// Configure os dados da sua loja antes de divulgar o site.
const STORE = {
  name: "Capivaras & Cia",
  whatsapp: "5584981142531",
  pixKey: "10738074446",
};

const products = [
  // Edite o campo stock de cada produto para atualizar as quantidades disponíveis.
  // Com stock: 0, o produto aparece como esgotado e não pode ser comprado.
  {
    id: 1,
    name: "Capinha iPhone 12 Transparente",
    category: "Capinhas",
    price: 19.99,
    stock: 3,
    label: "transparente",
    image: "./ip12transp.jpg.jpeg",
  },
  {
    id: 2,
    name: "Capinha iPhone 13 Pro Max Azul",
    category: "Capinhas",
    price: 24.99,
    stock: 1,
    label: "azul",
    image: "./ip13PMazul.jpg.jpeg",
  },
  {
    id: 3,
    name: "Capinha iPhone 13 Pro Max Bege",
    category: "Capinhas",
    price: 24.99,
    stock: 1,
    label: "bege",
    image: "./ip13PMbege.jpg.jpeg",
  },
  {
    id: 4,
    name: "Capinha iPhone 13 Pro Max Marrom",
    category: "Capinhas",
    price: 24.99,
    stock: 1,
    label: "marrom",
    image: "./ip13PMmarrom.jpg.jpeg",
  },
  {
    id: 6,
    name: "Capinha iPhone 13 Pro Max Verde",
    category: "Capinhas",
    price: 24.99,
    stock: 1,
    label: "verde",
    image: "./ip13PMverde.jpg.jpeg",
  },
  {
    id: 7,
    name: "Capinha iPhone 13 Pro Max Preta",
    category: "Capinhas",
    price: 24.99,
    stock: 1,
    label: "preta",
    image: "./ip13PMpreta.jpg.jpeg",
  },
  {
    id: 8,
    name: "Capinha iPhone 15 Transparente",
    category: "Capinhas",
    price: 19.99,
    stock: 3,
    label: "transparente",
    image: "./ip15transp.jpg.jpeg",
  },
  {
    id: 9,
    name: "Capinha iPhone 12 Azul",
    category: "Capinhas",
    price: 24.99,
    stock: 1,
    label: "azul",
    image: "./ip12azul.jpg.jpeg",
  },
  {
    id: 10,
    name: "Capinha iPhone 12 Bege Escuro",
    category: "Capinhas",
    price: 24.99,
    stock: 1,
    label: "bege escuro",
    image: "./ip12begeescuru.jpg.jpeg",
  },
  {
    id: 11,
    name: "Capinha iPhone 12 Marrom",
    category: "Capinhas",
    price: 24.99,
    stock: 1,
    label: "marrom",
    image: "./ip12marrom.jpg.jpeg",
  },
  {
    id: 12,
    name: "Capinha iPhone 12 Verde",
    category: "Capinhas",
    price: 24.99,
    stock: 1,
    label: "verde",
    image: "./ip12verde..jpg.jpeg",
  },
  {id: 13,
    name: "Capinha iPhone 17 Pro Max transparente",
    category: "Capinhas",
    price: 19.99,
    stock: 2,
    label: "transparente",
    image: "./ip17PMtransp.jpg.jpeg"
  },
  {
    id: 14,
    name: "Kit 4 Pilotos Para Quadro + Apagador",
    category: "Achadinhos",
    price: 39.99,
    stock: 1,
    label: "kit",
    image: "./kitPilotos.jpg.jpeg"
  },
  {
    id: 15,
    name: "Capinha iPhone 11 Azul",
    category: "Capinhas",
    price: 24.99,
    stock: 1,
    label: "azul",
    image: "./ip11azul.jpg.jpeg"
  },
  {
    id: 16,
    name: "Capinha iPhone 11 Bege Escuro",
    category: "Capinhas",
    price: 24.99,
    stock: 1,
    label: "bege escuro",
    image: "./ip11bege_cinza.jpg.jpeg"
  },
  {
    id: 17,
    name: "Capinha iPhone 11 Marrom",
    category: "Capinhas",
    price: 24.99,
    stock: 1,
    label: "marrom",
    image: "./ip11marrom.jpg.jpeg"
  },
  {
    id: 18,
    name: "Capinha iPhone 11 Verde",
    category: "Capinhas",
    price: 24.99,
    stock: 1,
    label: "verde",
    image: "./ip11verde.jpg.jpeg"
  },
  {
    id: 19,
    name: "Capinha iPhone 11 Roxa Escura",
    category: "Capinhas",
    price: 24.99,
    stock: 1,
    label: "roxa escura",
    image: "./ip11roxaescuro.jpg.jpeg"
  },
  {
    id: 20,
    name: "Capinha iPhone 11 Transparente",
    category: "Capinhas",
    price: 19.99,
    stock: 2,
    label: "transparente",
    image: "./ip11transp.jpg.jpeg"
  },
  {
    id: 21,
    name: "Capinha iPhone 13 Azul",
    category: "Capinhas",
    price: 24.99,
    stock: 1,
    label: "azul",
    image: "./ip13azul.jpg.jpeg"
  },
  {
    id: 22,
    name: "Capinha iPhone 13 Branca",
    category: "Capinhas",
    price: 24.99,
    stock: 1,
    label: "branca",
    image: "./ip13branca.jpg.jpeg"
  },
  {
    id: 23,
    name: "Capinha iPhone 13 Verde",
    category: "Capinhas",
    price: 24.99,
    stock: 1,
    label: "verde",
    image: "./ip13verde.jpg.jpeg"
    },
    {
    id: 24,
    name: "Capinha iPhone 13 Transparente",
    category: "Capinhas",
    price: 19.99,
    stock: 3,
    label: "transparente",
    image: "./ip13transp.jpg.jpeg"
  }
];

const productGrid = document.querySelector("#product-grid");
const emptyState = document.querySelector("#empty-state");
const searchInput = document.querySelector("#search");
const setupNotice = document.querySelector("#setup-notice");
const cartBackdrop = document.querySelector("#cart-backdrop");
const cartItems = document.querySelector("#cart-items");
const cartEmpty = document.querySelector("#cart-empty");
const cartSummary = document.querySelector("#cart-summary");
const cartCount = document.querySelector("#cart-count");
const cartTotal = document.querySelector("#cart-total");
const CART_STORAGE_KEY = "capivaras-cia-cart";
let activeCategory = "Todos";
let cart = loadCart();
saveCart();

function formatPrice(price) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);
}

function renderProducts() {
  const searchTerm = searchInput.value.trim().toLocaleLowerCase("pt-BR");
  const visibleProducts = products.filter((product) => {
    const matchesCategory =
      activeCategory === "Todos" || product.category === activeCategory;
    const matchesSearch = `${product.name} ${product.category}`
      .toLocaleLowerCase("pt-BR")
      .includes(searchTerm);
    return matchesCategory && matchesSearch;
  });

  productGrid.innerHTML = visibleProducts
    .map(
      (product) => {
        const quantityInCart = cart[product.id] || 0;
        const outOfStock = product.stock <= 0;
        const cannotAddMore = outOfStock || quantityInCart >= product.stock;
        return `
        <article class="product-card">
          <div class="product-image">
            <img src="${product.image}" alt="${product.name}" loading="lazy" />
            <span class="product-label">${product.label}</span>
          </div>
          <div class="product-details">
            <span class="product-category">${product.category}</span>
            <h3 class="product-title">${product.name}${outOfStock ? " (Esgotado)" : ""}</h3>
            <p class="product-stock${outOfStock ? " product-stock-empty" : ""}">
              ${outOfStock ? "Estoque: 0 unidades" : `Estoque: ${product.stock} ${product.stock === 1 ? "unidade" : "unidades"}`}
            </p>
            <div class="product-bottom">
              <span class="product-price">${formatPrice(product.price)}</span>
              <button class="order-button${cannotAddMore ? " out-of-stock" : ""}" type="button" data-add-to-cart="${product.id}" ${cannotAddMore ? "disabled" : ""}>
                ${outOfStock ? "Esgotado" : cannotAddMore ? "Estoque no carrinho" : "Adicionar ao carrinho +"}
              </button>
            </div>
          </div>
        </article>`;
      },
    )
    .join("");

  emptyState.hidden = visibleProducts.length > 0;
}

function loadCart() {
  try {
    const savedCart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY) || "{}");
    if (!savedCart || typeof savedCart !== "object" || Array.isArray(savedCart)) {
      throw new Error("Formato de carrinho inválido.");
    }

    return Object.fromEntries(
      Object.entries(savedCart)
        .filter(([id, quantity]) => {
        const validProduct = products.some((product) => product.id === Number(id));
        const product = products.find((item) => item.id === Number(id));
        return (
          validProduct &&
          Number.isSafeInteger(quantity) &&
          quantity > 0 &&
          product.stock > 0
        );
        })
        .map(([id, quantity]) => [
          id,
          Math.min(
            quantity,
            products.find((product) => product.id === Number(id)).stock,
          ),
        ]),
    );
  } catch (error) {
    console.error("Não foi possível carregar o carrinho salvo.", error);
    return {};
  }
}

function saveCart() {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    setupNotice.hidden = true;
  } catch (error) {
    console.error("Não foi possível salvar o carrinho neste navegador.", error);
    setupNotice.textContent = "Não foi possível salvar o carrinho neste navegador.";
    setupNotice.hidden = false;
  }
}

function renderCart() {
  const entries = Object.entries(cart)
    .map(([id, quantity]) => ({
      product: products.find((item) => item.id === Number(id)),
      quantity,
    }))
    .filter((entry) => entry.product);
  const itemCount = entries.reduce((sum, entry) => sum + entry.quantity, 0);
  const total = entries.reduce(
    (sum, entry) => sum + entry.product.price * entry.quantity,
    0,
  );

  cartCount.textContent = itemCount;
  cartEmpty.hidden = entries.length > 0;
  cartSummary.hidden = entries.length === 0;
  cartTotal.textContent = formatPrice(total);
  cartItems.innerHTML = entries
    .map(
      ({ product, quantity }) => `
        <article class="cart-item">
          <img src="${product.image}" alt="" />
          <div class="cart-item-info">
            <h3>${product.name}</h3>
            <span>${formatPrice(product.price)} cada</span>
            <div class="quantity-controls" aria-label="Quantidade de ${product.name}">
              <button type="button" data-cart-action="decrease" data-product-id="${product.id}" aria-label="Diminuir quantidade">−</button>
              <span>${quantity}</span>
              <button type="button" data-cart-action="increase" data-product-id="${product.id}" aria-label="Aumentar quantidade">+</button>
              <button class="remove-item" type="button" data-cart-action="remove" data-product-id="${product.id}">Remover</button>
            </div>
          </div>
          <strong class="cart-line-total">${formatPrice(product.price * quantity)}</strong>
        </article>`,
    )
    .join("");
}

function openCart() {
  cartBackdrop.hidden = false;
  document.querySelector("#cart-close").focus();
}

function closeCart() {
  cartBackdrop.hidden = true;
  document.querySelector("#cart-open").focus();
}

function finalizeOrder() {
  const entries = Object.entries(cart)
    .map(([id, quantity]) => ({
      product: products.find((item) => item.id === Number(id)),
      quantity,
    }))
    .filter((entry) => entry.product);

  if (entries.length === 0) return;
  if (!STORE.whatsapp || !STORE.pixKey) {
    setupNotice.textContent =
      "Para finalizar o pedido, preencha o WhatsApp e a chave Pix no início do arquivo app.js.";
    setupNotice.hidden = false;
    return;
  }

  const total = entries.reduce(
    (sum, entry) => sum + entry.product.price * entry.quantity,
    0,
  );
  const message = [
    `Olá! Quero fazer um pedido na ${STORE.name}:`,
    "",
    ...entries.map(
      ({ product, quantity }) =>
        `• ${product.name} — ${quantity} x ${formatPrice(product.price)} = ${formatPrice(product.price * quantity)}`,
    ),
    "",
    `Total dos produtos: ${formatPrice(total)}`,
    `Chave Pix: ${STORE.pixKey}`,
    "Podemos combinar a entrega?",
  ].join("\n");
  const whatsappUrl = `https://wa.me/${STORE.whatsapp}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
}

document.querySelector(".category-list").addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;

  activeCategory = button.dataset.category;
  document.querySelectorAll(".category-chip").forEach((chip) => {
    chip.classList.toggle("active", chip === button);
  });
  renderProducts();
});

productGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-add-to-cart]");
  if (!button) return;

  const productId = Number(button.dataset.addToCart);
  const product = products.find((item) => item.id === productId);
  if (!product) {
    throw new Error(`Produto não encontrado: ${productId}`);
  }
  if (product.stock <= (cart[productId] || 0)) return;
  cart[productId] = (cart[productId] || 0) + 1;
  saveCart();
  renderCart();
  renderProducts();
});

cartItems.addEventListener("click", (event) => {
  const button = event.target.closest("[data-cart-action]");
  if (!button) return;

  const productId = button.dataset.productId;
  const quantity = cart[productId];
  const product = products.find((item) => item.id === Number(productId));
  if (!quantity) return;

  if (button.dataset.cartAction === "remove" || (button.dataset.cartAction === "decrease" && quantity === 1)) {
    delete cart[productId];
  } else if (button.dataset.cartAction === "decrease") {
    cart[productId] -= 1;
  } else if (button.dataset.cartAction === "increase" && product && quantity < product.stock) {
    cart[productId] += 1;
  }
  saveCart();
  renderCart();
  renderProducts();
});

searchInput.addEventListener("input", renderProducts);
document.querySelector("#cart-open").addEventListener("click", openCart);
document.querySelector("#cart-close").addEventListener("click", closeCart);
document.querySelector("#checkout-button").addEventListener("click", finalizeOrder);
cartBackdrop.addEventListener("click", (event) => {
  if (event.target === cartBackdrop) closeCart();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !cartBackdrop.hidden) closeCart();
});
document.querySelector("#year").textContent = new Date().getFullYear();

if (STORE.whatsapp) {
  document.querySelector("#contact-link").href = `https://wa.me/${STORE.whatsapp}`;
  document.querySelector("#contact-link").target = "_blank";
  document.querySelector("#contact-link").rel = "noopener noreferrer";
}

renderProducts();
renderCart();
