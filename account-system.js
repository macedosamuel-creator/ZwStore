(() => {
  "use strict";

  const STORAGE_KEY = "zw-store-rn-local-accounts-v1";
  const ACTIVE_COUPON_KEY = "zw-store-rn-active-coupon";
  const STORE_EMAIL = "zwstorern@gmail.com";
  const CUSTOMER_ENTITLEMENTS = {
    // Use e-mail minúsculo; incremente revision a cada alteração de active/spins.
    // Ex.: "cliente@example.com": { active: true, spins: 5, revision: 1 },
  };
  const PRIZE_ODDS = [
    { percent: 1, probability: 24750 },
    { percent: 2, probability: 12375 },
    { percent: 5, probability: 61875 },
    { percent: 15, probability: 400 },
    { percent: 20, probability: 600 },
  ];
  const COLORS = ["#bafc4a", "#d8ff86", "#9af51b", "#e9ffd0", "#77c91a"];
  const byId = (id) => document.getElementById(id);
  const accountSection = byId("conta");
  const authStatus = byId("account-auth-status");
  const adminStatus = byId("admin-status");
  let selectedAdminEmail = "";
  let isSpinning = false;
  let latestSpinMessage = "";
  let latestSpinOwner = "";
  let storageError = "";
  let storeLoadFailed = false;

  function readStore() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) {
        return {
          version: 1,
          users: [],
          settings: { expiryDays: 30, minimumCents: 0 },
        };
      }
      const parsed = JSON.parse(saved);
      if (
        parsed?.version !== 1 ||
        !Array.isArray(parsed.users) ||
        !parsed.settings
      ) {
        throw new Error("Formato dos dados locais inválido.");
      }
      return parsed;
    } catch (error) {
      storeLoadFailed = true;
      storageError = "Não foi possível ler os dados locais. O armazenamento está indisponível ou corrompido.";
      console.error(storageError, error);
      return {
        version: 1,
        users: [],
        settings: { expiryDays: 30, minimumCents: 0 },
      };
    }
  }

  let store = readStore();

  function saveStore() {
    if (storeLoadFailed) return false;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
      storageError = "";
      return true;
    } catch (error) {
      storageError = "Não foi possível salvar. Verifique o espaço e as permissões de armazenamento do navegador.";
      console.error(storageError, error);
      return false;
    }
  }

  function getCurrentUser() {
    const email = localStorage.getItem("zw-store-rn-local-session");
    return store.users.find((user) => user.email === email) || null;
  }

  function currentCoupon() {
    const user = getCurrentUser();
    const couponId = localStorage.getItem(ACTIVE_COUPON_KEY);
    if (!user || !couponId) return null;
    return user.coupons.find((coupon) => coupon.id === couponId) || null;
  }

  function couponAdjustment(eligibleSubtotalCents, cartDiscountCents) {
    const coupon = currentCoupon();
    if (!coupon) return null;
    if (coupon.status !== "available" || Date.parse(coupon.expiresAt) <= Date.now()) {
      return { coupon, discountCents: 0, reason: "Este cupom não está mais disponível." };
    }
    const remainingCents = Math.max(0, eligibleSubtotalCents - cartDiscountCents);
    if (remainingCents < coupon.minimumCents) {
      return {
        coupon,
        discountCents: 0,
        reason: `Compra mínima de ${formatCents(coupon.minimumCents)} não atingida.`,
      };
    }
    return {
      coupon,
      discountCents: Math.round(remainingCents * coupon.percent / 100),
      reason: "",
    };
  }

  function formatCents(cents) {
    return (cents / 100).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  function safeText(value) {
    return String(value).replace(/[&<>"']/g, (character) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "\"": "&quot;",
      "'": "&#39;",
    })[character]);
  }

  function statusForCoupon(coupon) {
    if (coupon.status === "used") return "utilizado";
    if (Date.parse(coupon.expiresAt) <= Date.now()) return "expirado";
    return "disponível";
  }

  function addLog(user, message) {
    user.history.unshift({
      message,
      date: new Date().toISOString(),
    });
  }

  function applyConfiguredEntitlement(user) {
    const config = CUSTOMER_ENTITLEMENTS[user.email];
    if (!config) return true;
    if (
      typeof config.active !== "boolean" ||
      !Number.isSafeInteger(config.spins) ||
      config.spins < 0 ||
      !Number.isSafeInteger(config.revision) ||
      config.revision < 1
    ) {
      throw new Error(`Configuração inválida para ${user.email} em CUSTOMER_ENTITLEMENTS.`);
    }
    if (user.appliedEntitlementRevision === config.revision) return true;

    const index = store.users.findIndex((entry) => entry.email === user.email);
    const previous = JSON.parse(JSON.stringify(user));
    const renewedAt = new Date().toISOString();
    user.subscription.active = config.active;
    user.spins = config.spins;
    user.appliedEntitlementRevision = config.revision;
    if (config.active) {
      user.subscription.renewedAt = renewedAt;
      user.subscription.cycles.push({ renewedAt, spinsGranted: config.spins });
    }
    addLog(user, `Assinatura e giros atualizados pela configuração do site (revisão ${config.revision}).`);
    if (!saveStore()) {
      store.users[index] = previous;
      return false;
    }
    return true;
  }

  function hashPassword(password, salt) {
    if (!crypto.subtle || !crypto.getRandomValues) {
      throw new Error("Este navegador precisa oferecer Web Crypto em uma conexão HTTPS para criar e validar contas de demonstração.");
    }
    return crypto.subtle.digest(
      "SHA-256",
      new TextEncoder().encode(`${salt}:${password}`),
    ).then((digest) =>
      Array.from(new Uint8Array(digest), (byte) =>
        byte.toString(16).padStart(2, "0"),
      ).join(""),
    );
  }

  function randomHex(byteLength) {
    const bytes = crypto.getRandomValues(new Uint8Array(byteLength));
    return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
  }

  function drawPrizeIndex() {
    const range = 100000;
    const limit = Math.floor(0x100000000 / range) * range;
    let value;
    do {
      value = crypto.getRandomValues(new Uint32Array(1))[0];
    } while (value >= limit);
    const draw = value % range;
    let threshold = 0;
    return PRIZE_ODDS.findIndex((prize) => {
      threshold += prize.probability;
      return draw < threshold;
    });
  }

  function getDateLabel(value) {
    return new Date(value).toLocaleDateString("pt-BR");
  }

  function renderWheel() {
    const wheel = byId("discount-wheel");
    const labels = byId("wheel-labels");
    if (!wheel || !labels) return;
    const slice = 360 / PRIZE_ODDS.length;
    const stops = PRIZE_ODDS.map((_, index) =>
      `${COLORS[index]} ${index * slice}deg ${(index + 1) * slice}deg`,
    );
    wheel.style.background = `conic-gradient(${stops.join(", ")})`;
    labels.replaceChildren();
    PRIZE_ODDS.forEach((prize, index) => {
      const label = document.createElement("span");
      label.className = "wheel-segment-label";
      label.textContent = `${prize.percent}%`;
      label.style.transform =
        `translate(-50%, -50%) rotate(${(index + 0.5) * slice}deg) translateY(-104px) rotate(90deg)`;
      labels.append(label);
    });
  }

  function renderCouponSelect() {
    const select = byId("cart-coupon-select");
    if (!select) return;
    const user = getCurrentUser();
    const activeId = localStorage.getItem(ACTIVE_COUPON_KEY) || "";
    const coupons = user
      ? user.coupons.filter(
          (coupon) =>
            coupon.status === "available" &&
            Date.parse(coupon.expiresAt) > Date.now(),
        )
      : [];
    select.innerHTML = [
      '<option value="">Não usar cupom</option>',
      ...coupons.map(
        (coupon) =>
          `<option value="${safeText(coupon.id)}">${coupon.percent}% · ${safeText(coupon.code)} · válido até ${getDateLabel(coupon.expiresAt)}</option>`,
      ),
    ].join("");
    select.value = coupons.some((coupon) => coupon.id === activeId) ? activeId : "";
    if (select.value !== activeId) localStorage.removeItem(ACTIVE_COUPON_KEY);
  }

  function renderAccount() {
    renderCouponSelect();
    if (!accountSection) return;
    const user = getCurrentUser();
    byId("coupon-expiry-days").value = store.settings.expiryDays;
    byId("coupon-minimum").value = (store.settings.minimumCents / 100).toFixed(2);
    const auth = byId("account-auth");
    const profile = byId("account-profile");
    const couponCard = byId("account-coupons-card");
    auth.hidden = Boolean(user);
    profile.hidden = !user;
    couponCard.hidden = !user;

    if (user) {
      try {
        if (!applyConfiguredEntitlement(user)) {
          setStatus(authStatus, storageError, true);
        }
      } catch (error) {
        console.error("Configuração de assinatura/giros inválida.", error);
        setStatus(authStatus, error.message, true);
      }
      byId("account-profile-name").textContent = user.name;
      byId("account-profile-email").textContent = user.email;
      byId("account-subscription-status").textContent =
        user.subscription.active
          ? `Ativa${user.subscription.renewedAt ? ` · renovada em ${getDateLabel(user.subscription.renewedAt)}` : ""}`
          : "Inativa";
      byId("account-spins").textContent = user.spins;
      const subject = "Novo cadastro na ZW Store RN";
      const body = [
        "Novo cadastro recebido:",
        "",
        `Nome: ${user.name}`,
        `E-mail: ${user.email}`,
        "",
        "Para liberar assinatura e giros, edite CUSTOMER_ENTITLEMENTS em account-system.js e publique o site.",
      ].join("\n");
      byId("account-signup-email-link").href =
        `mailto:${STORE_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      byId("wheel-result").textContent =
        latestSpinOwner === user.email && latestSpinMessage
          ? latestSpinMessage
          : `Você tem ${user.spins} giro(s) neste navegador.`;
      byId("account-coupon-list").innerHTML = user.coupons.length
        ? user.coupons.map((coupon) => `
            <article class="account-coupon">
              <strong>${coupon.percent}% de desconto</strong>
              <span>Código: <code>${safeText(coupon.code)}</code></span>
              <span>Recebido: ${getDateLabel(coupon.receivedAt)} · válido até ${getDateLabel(coupon.expiresAt)}</span>
              <span>Mínimo: ${formatCents(coupon.minimumCents)} · Situação: ${statusForCoupon(coupon)}</span>
            </article>
          `).join("")
        : '<p class="account-empty">Você ainda não recebeu cupons.</p>';
      byId("account-spin-history").innerHTML = user.history.length
        ? user.history.map((item) => `
            <p class="account-history-item">${safeText(item.message)} · ${getDateLabel(item.date)}</p>
          `).join("")
        : '<p class="account-empty">Nenhuma alteração ou giro registrado.</p>';
    } else {
      byId("subscription-payment").hidden = true;
      byId("wheel-result").textContent =
        "Entre na sua conta local para ver seus giros.";
    }
    const spinButton = byId("wheel-spin");
    if (spinButton) {
      spinButton.disabled = isSpinning || !user || user.spins < 1;
      spinButton.title = !user
        ? "Entre na sua conta para girar."
        : user.spins < 1
          ? "Você não possui giros disponíveis."
          : "";
    }
    renderAdmin();
  }

  function renderAdmin() {
    if (!accountSection) return;
    const adminPanel = byId("account-admin-panel");
    const currentUser = getCurrentUser();
    const isAdmin = currentUser?.email === STORE_EMAIL;
    adminPanel.hidden = !isAdmin;
    if (!isAdmin) {
      selectedAdminEmail = "";
      return;
    }
    const search = (byId("admin-user-search").value || "").trim().toLocaleLowerCase("pt-BR");
    const filter = byId("admin-subscription-filter").value;
    byId("admin-total-users").textContent = store.users.length;
    byId("admin-active-subscriptions").textContent =
      store.users.filter((user) => user.subscription.active).length;
    byId("admin-total-spins").textContent =
      store.users.reduce((total, user) => total + user.spins, 0);
    const matchingUsers = store.users.filter(
      (user) =>
        user.name.toLocaleLowerCase("pt-BR").includes(search) ||
        user.email.includes(search),
    ).filter((user) =>
      filter === "all" ||
      (filter === "active" ? user.subscription.active : !user.subscription.active),
    );
    byId("admin-user-list").innerHTML = matchingUsers.length
      ? matchingUsers.map((user) => `
          <button type="button" class="admin-user-button" data-admin-email="${safeText(user.email)}">
            ${safeText(user.name)} · ${safeText(user.email)}
          </button>
        `).join("")
      : '<p class="account-empty">Nenhuma conta local encontrada neste navegador.</p>';
    const user = matchingUsers.find((entry) => entry.email === selectedAdminEmail);
    const details = byId("admin-user-details");
    details.hidden = !user;
    if (!user) return;
    byId("admin-selected-name").textContent = user.name;
    byId("admin-selected-email").textContent = user.email;
    byId("admin-selected-subscription").textContent =
      user.subscription.active ? "ativa" : "inativa";
    byId("admin-selected-spins").textContent = user.spins;
    byId("admin-customer-history").innerHTML = [
      ...user.coupons.map((coupon) => ({
        date: coupon.receivedAt,
        message: `Cupom ${coupon.code} · ${coupon.percent}% · ${statusForCoupon(coupon)} · vence ${getDateLabel(coupon.expiresAt)}`,
      })),
      ...user.subscription.cycles.map((cycle, index) => ({
        date: cycle.renewedAt,
        message: `Ciclo ${index + 1} · renovação manual · ${cycle.spinsGranted} giro(s) liberado(s)`,
      })),
      ...user.history,
    ].sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
      .map((item) => `<p class="account-history-item">${safeText(item.message)} · ${getDateLabel(item.date)}</p>`)
      .join("") || '<p class="account-empty">Sem cupons ou alterações registradas.</p>';
  }

  function setStatus(element, message, isError) {
    if (!element) return;
    element.textContent = message;
    element.classList.toggle("is-error", Boolean(isError));
  }

  function restoreLocalUi() {
    renderWheel();
    if (accountSection) {
      if (storageError) setStatus(authStatus, storageError, true);
      byId("admin-user-search").addEventListener("input", renderAdmin);
      byId("admin-subscription-filter").addEventListener("change", renderAdmin);
      byId("admin-user-list").addEventListener("click", (event) => {
        const button = event.target.closest("[data-admin-email]");
        if (!button) return;
        selectedAdminEmail = button.dataset.adminEmail;
        renderAdmin();
      });
      byId("account-login-form").addEventListener("submit", async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const email = form.elements.email.value.trim().toLocaleLowerCase("pt-BR");
        const password = form.elements.password.value;
        const user = store.users.find((entry) => entry.email === email);
        if (!user) {
          setStatus(authStatus, "Conta local não encontrada.", true);
          return;
        }
        try {
          const hash = await hashPassword(password, user.salt);
          if (hash !== user.passwordHash) {
            setStatus(authStatus, "E-mail ou senha incorretos.", true);
            return;
          }
          if (!applyConfiguredEntitlement(user)) {
            setStatus(authStatus, storageError, true);
            return;
          }
          localStorage.setItem("zw-store-rn-local-session", user.email);
          form.reset();
          setStatus(authStatus, "", false);
          renderAccount();
          document.dispatchEvent(new CustomEvent("zwstorecouponchange"));
        } catch (error) {
          console.error("Não foi possível validar a conta local.", error);
          setStatus(authStatus, error.message, true);
        }
      });
      byId("account-register-form").addEventListener("submit", async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const name = form.elements.name.value.trim();
        const email = form.elements.email.value.trim().toLocaleLowerCase("pt-BR");
        const password = form.elements.password.value;
        if (store.users.some((user) => user.email === email)) {
          setStatus(authStatus, "Já existe uma conta local com este e-mail.", true);
          return;
        }
        try {
          const salt = randomHex(16);
          const user = {
            name,
            email,
            salt,
            passwordHash: await hashPassword(password, salt),
            subscription: { active: false, renewedAt: null, cycles: [] },
            spins: 0,
            appliedEntitlementRevision: 0,
            coupons: [],
            history: [],
          };
          store.users.push(user);
          if (!applyConfiguredEntitlement(user)) {
            store.users.pop();
            setStatus(authStatus, storageError, true);
            return;
          }
          if (!saveStore()) {
            store.users.pop();
            setStatus(authStatus, storageError, true);
            return;
          }
          localStorage.setItem("zw-store-rn-local-session", email);
          form.reset();
          setStatus(authStatus, "", false);
          renderAccount();
          document.dispatchEvent(new CustomEvent("zwstorecouponchange"));
        } catch (error) {
          console.error("Não foi possível criar a conta local.", error);
          setStatus(authStatus, error.message, true);
        }
      });
      byId("account-logout").addEventListener("click", () => {
        localStorage.removeItem("zw-store-rn-local-session");
        localStorage.removeItem(ACTIVE_COUPON_KEY);
        renderAccount();
        document.dispatchEvent(new CustomEvent("zwstorecouponchange"));
      });
      byId("subscription-open").addEventListener("click", () => {
        const user = getCurrentUser();
        if (!user || !window.ZWStorePayments?.prepareSubscriptionPayment) {
          setStatus(authStatus, "Não foi possível preparar o Pix da assinatura.", true);
          return;
        }
        window.ZWStorePayments.prepareSubscriptionPayment(user);
      });
      byId("wheel-spin").addEventListener("click", spinWheel);
      byId("admin-toggle-subscription").addEventListener("click", () => {
        const index = store.users.findIndex((entry) => entry.email === selectedAdminEmail);
        const user = store.users[index];
        if (!user) return;
        const previous = JSON.parse(JSON.stringify(user));
        const active = !user.subscription.active;
        user.subscription.active = active;
        if (active) {
          const renewedAt = new Date().toISOString();
          user.subscription.renewedAt = renewedAt;
          user.subscription.cycles.push({ renewedAt, spinsGranted: 0 });
        }
        addLog(user, `Assinatura ${active ? "ativada" : "desativada"} manualmente.`);
        if (!saveStore()) {
          store.users[index] = previous;
          return setStatus(adminStatus, storageError, true);
        }
        setStatus(adminStatus, "Assinatura local atualizada. Isto não confirma pagamento.", false);
        renderAccount();
      });
      byId("admin-adjust-spins").addEventListener("click", () => {
        const index = store.users.findIndex((entry) => entry.email === selectedAdminEmail);
        const user = store.users[index];
        const amount = Number(byId("admin-spin-amount").value);
        if (!user || !Number.isSafeInteger(amount) || amount === 0 || user.spins + amount < 0) {
          setStatus(adminStatus, "Informe um ajuste inteiro diferente de zero, sem deixar os giros negativos.", true);
          return;
        }
        const previous = JSON.parse(JSON.stringify(user));
        user.spins += amount;
        if (amount > 0) {
          const renewedAt = new Date().toISOString();
          user.subscription.renewedAt = renewedAt;
          user.subscription.cycles.push({ renewedAt, spinsGranted: amount });
          user.subscription.active = true;
        }
        addLog(user, `${amount > 0 ? "Adicionados" : "Retirados"} ${Math.abs(amount)} giro(s) manualmente.`);
        if (!saveStore()) {
          store.users[index] = previous;
          return setStatus(adminStatus, storageError, true);
        }
        setStatus(adminStatus, "Ajuste local registrado. A renovação manual não valida um pagamento.", false);
        renderAccount();
      });
      byId("save-coupon-rules").addEventListener("click", () => {
        const expiryDays = Number(byId("coupon-expiry-days").value);
        const minimum = Number(byId("coupon-minimum").value);
        if (
          !Number.isSafeInteger(expiryDays) || expiryDays < 1 || expiryDays > 365 ||
          !Number.isFinite(minimum) || minimum < 0
        ) {
          setStatus(adminStatus, "Defina validade entre 1 e 365 dias e mínimo de compra igual ou maior que zero.", true);
          return;
        }
        const previous = { ...store.settings };
        store.settings = { expiryDays, minimumCents: Math.round(minimum * 100) };
        if (!saveStore()) {
          store.settings = previous;
          return setStatus(adminStatus, storageError, true);
        }
        setStatus(adminStatus, "Regras locais salvas e aplicáveis aos próximos cupons.", false);
      });
    }
    const couponSelect = byId("cart-coupon-select");
    if (couponSelect) {
      couponSelect.addEventListener("change", () => {
        if (couponSelect.value) {
          localStorage.setItem(ACTIVE_COUPON_KEY, couponSelect.value);
        } else {
          localStorage.removeItem(ACTIVE_COUPON_KEY);
        }
        document.dispatchEvent(new CustomEvent("zwstorecouponchange"));
      });
      window.addEventListener("storage", (event) => {
        if (event.key === STORAGE_KEY || event.key === "zw-store-rn-local-session") {
          store = readStore();
          renderAccount();
          document.dispatchEvent(new CustomEvent("zwstorecouponchange"));
        }
      });
    }
    renderAccount();
  }

  function spinWheel() {
    const user = getCurrentUser();
    const button = byId("wheel-spin");
    const wheel = byId("discount-wheel");
    if (!button || !wheel || isSpinning) return;
    if (!user) {
      setStatus(authStatus, "Entre na sua conta local antes de girar.", true);
      return;
    }
    if (user.spins < 1) {
      byId("wheel-result").textContent = "Você não tem giros disponíveis.";
      return;
    }
    const resultIndex = drawPrizeIndex();
    const percent = PRIZE_ODDS[resultIndex].percent;
    const couponId = randomHex(12);
    const receivedAt = new Date();
    const expiresAt = new Date(receivedAt);
    expiresAt.setDate(expiresAt.getDate() + store.settings.expiryDays);
    let code;
    do {
      code = `ZW${percent}-${randomHex(8).toUpperCase()}`;
    } while (store.users.some((entry) =>
      entry.coupons.some((existing) => existing.code === code),
    ));
    const coupon = {
      id: couponId,
      code,
      percent,
      receivedAt: receivedAt.toISOString(),
      expiresAt: expiresAt.toISOString(),
      minimumCents: store.settings.minimumCents,
      status: "available",
    };
    user.spins -= 1;
    user.coupons.unshift(coupon);
    addLog(user, `Roleta: recebeu cupom de ${percent}%.`);
    if (!saveStore()) {
      user.spins += 1;
      user.coupons.shift();
      user.history.shift();
      byId("wheel-result").textContent = storageError;
      return;
    }
    isSpinning = true;
    renderAccount();
    byId("wheel-result").classList.remove("is-winner");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = reducedMotion ? 10 : 4200;
    const slice = 360 / PRIZE_ODDS.length;
    const turn = 360 * 6 + (360 - (resultIndex + 0.5) * slice);
    wheel.style.transition = "none";
    wheel.style.transform = "rotate(0deg)";
    void wheel.offsetWidth;
    wheel.style.transition = `transform ${duration}ms cubic-bezier(.12,.72,.08,1)`;
    wheel.style.transform = `rotate(${turn}deg)`;
    button.disabled = true;
    window.setTimeout(() => {
      isSpinning = false;
      localStorage.setItem(ACTIVE_COUPON_KEY, coupon.id);
      renderAccount();
      latestSpinOwner = user.email;
      latestSpinMessage =
        `Você ganhou ${percent}% de desconto! Código ${coupon.code}, válido até ${getDateLabel(coupon.expiresAt)}.`;
      const result = byId("wheel-result");
      result.textContent = latestSpinMessage;
      result.classList.add("is-winner");
      document.dispatchEvent(new CustomEvent("zwstorecouponchange"));
    }, duration + 150);
  }

  function consumeCoupon(couponId) {
    const user = getCurrentUser();
    if (!user) return false;
    const coupon = user.coupons.find((entry) => entry.id === couponId);
    if (
      !coupon ||
      coupon.status !== "available" ||
      Date.parse(coupon.expiresAt) <= Date.now()
    ) {
      return false;
    }
    coupon.status = "used";
    coupon.usedAt = new Date().toISOString();
    addLog(user, `Cupom ${coupon.code} marcado como utilizado ao preparar o pedido por e-mail.`);
    if (!saveStore()) {
      coupon.status = "available";
      delete coupon.usedAt;
      user.history.shift();
      return false;
    }
    localStorage.removeItem(ACTIVE_COUPON_KEY);
    renderAccount();
    return true;
  }

  window.ZWStoreAccount = {
    getCouponAdjustment: couponAdjustment,
    consumeCoupon,
    getActiveCoupon: currentCoupon,
  };
  restoreLocalUi();
})();
