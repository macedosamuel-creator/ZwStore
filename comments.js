const reviewsList = document.querySelector("#product-reviews-list");
const reviewsEmpty = document.querySelector("#product-reviews-empty");
const approvedReviewsFile = document.querySelector("#approved-reviews-file");
const reviewsImportStatus = document.querySelector("#reviews-import-status");
const reviewForm = document.querySelector("#review-form");
const reviewStatus = document.querySelector("#review-status");
const reviewEmailFallback = document.querySelector("#review-email-fallback");
const REVIEW_RECIPIENT = "macedo.samuel@escolar.ifrn.edu.br";
let activeProductId = null;
let publishedReviews = [];

function getApprovedReviews() {
  const configuredReviews = products.flatMap((product) =>
    (Array.isArray(product.reviews) ? product.reviews : [])
      .filter((review) => !review.isExample && isValidReview(review))
      .map((review) => ({
        ...review,
        productId: product.id,
        status: "approved",
      })),
  );
  return [...configuredReviews, ...publishedReviews];
}

function updateProductRatings() {
  const ratings = Object.create(null);
  for (const review of getApprovedReviews()) {
    const current = ratings[review.productId] || { total: 0, count: 0 };
    current.total += review.rating;
    current.count += 1;
    ratings[review.productId] = current;
  }
  const productRatings = Object.fromEntries(
    Object.entries(ratings).map(([productId, { total, count }]) => [
      productId,
      { rating: total / count, count },
    ]),
  );
  document.dispatchEvent(
    new CustomEvent("approved-product-reviews-loaded", {
      detail: { ratings: productRatings },
    }),
  );
}

function setPublishedReviews(comments) {
  publishedReviews = comments.filter(isPublishedReview);
  updateProductRatings();
  if (activeProductId !== null) renderProductReviews(activeProductId);
}

function isValidReview(review) {
  return (
    review &&
    typeof review.name === "string" &&
    (review.email === undefined ||
      (typeof review.email === "string" &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(review.email))) &&
    typeof review.message === "string" &&
    Number.isInteger(review.rating) &&
    review.rating >= 1 &&
    review.rating <= 5
  );
}

function isPublishedReview(review) {
  return (
    isValidReview(review) &&
    Number.isSafeInteger(review.productId) &&
    review.productId > 0 &&
    review.status === "approved"
  );
}

function renderProductReviews(productId) {
  const product = products.find((item) => item.id === productId);
  const exampleReviews = Array.isArray(product?.reviews)
    ? product.reviews.filter((review) => review.isExample && isValidReview(review))
    : [];
  const productReviews = [
    ...exampleReviews,
    ...getApprovedReviews().filter(
    (review) => review.productId === productId,
    ),
  ];
  reviewsList.replaceChildren();
  reviewsEmpty.hidden = productReviews.length > 0;
  if (productReviews.length === 0) {
    reviewsEmpty.textContent = "Este produto ainda não tem avaliações publicadas.";
    reviewsList.append(reviewsEmpty);
    return;
  }

  for (const review of productReviews) {
    const article = document.createElement("article");
    article.className = "customer-review";

    const heading = document.createElement("div");
    heading.className = "customer-review-heading";
    const name = document.createElement("span");
    name.className = "customer-review-name";
    name.textContent = review.name;
    if (review.isExample) {
      const exampleLabel = document.createElement("span");
      exampleLabel.className = "customer-review-example";
      exampleLabel.textContent = "EXEMPLO FICTÍCIO";
      heading.append(name, exampleLabel);
    } else {
      heading.append(name);
    }
    const stars = document.createElement("span");
    stars.className = "customer-review-stars";
    stars.setAttribute("aria-label", `${review.rating} de 5 estrelas`);
    stars.textContent = `${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}`;
    heading.append(stars);

    const message = document.createElement("p");
    message.className = "customer-review-message";
    message.textContent = review.message;
    article.append(heading, message);
    reviewsList.append(article);
  }
}

async function loadPublishedReviews() {
  try {
    const response = await fetch("./server.json", { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`Não foi possível carregar as avaliações (${response.status}).`);
    }

    const data = await response.json();
    if (!Array.isArray(data.comments)) {
      throw new Error("O JSON da loja não contém uma lista de avaliações.");
    }

    setPublishedReviews(data.comments);
  } catch (error) {
    console.error("Não foi possível carregar as avaliações publicadas.", error);
    if (activeProductId !== null && publishedReviews.length === 0) {
      reviewsEmpty.hidden = false;
      reviewsEmpty.textContent =
        "Selecione o server.json para visualizar avaliações aprovadas neste acesso local.";
      reviewsList.replaceChildren(reviewsEmpty);
    }
  }
}

approvedReviewsFile.addEventListener("change", async () => {
  reviewsImportStatus.textContent = "";
  const [file] = approvedReviewsFile.files || [];
  if (!file) return;

  try {
    const data = JSON.parse(await file.text());
    if (!data || !Array.isArray(data.comments)) {
      throw new Error("O arquivo deve conter uma lista comments.");
    }

    const approvedComments = data.comments.filter(isPublishedReview);
    setPublishedReviews(approvedComments);
    reviewsImportStatus.textContent =
      `Carregadas ${approvedComments.length} avaliações aprovadas. Abra cada produto para visualizá-las.`;
  } catch (error) {
    console.error("Não foi possível ler o arquivo de avaliações.", error);
    reviewsImportStatus.textContent =
      "Não foi possível ler o JSON. Confira se ele tem uma lista comments válida.";
  } finally {
    approvedReviewsFile.value = "";
  }
});

document.addEventListener("product-detail-opened", (event) => {
  activeProductId = event.detail.productId;
  reviewForm.reset();
  reviewStatus.textContent = "";
  renderProductReviews(activeProductId);
});

reviewForm.addEventListener("submit", (event) => {
  event.preventDefault();
  reviewStatus.textContent = "";
  if (!Number.isSafeInteger(activeProductId)) {
    reviewStatus.textContent = "Abra os detalhes de um produto para avaliá-lo.";
    return;
  }

  const formData = new FormData(reviewForm);
  const review = {
    productId: activeProductId,
    productName: document.querySelector("#product-detail-title").textContent,
    name: String(formData.get("name") || "").trim(),
    email: String(formData.get("email") || "").trim(),
    rating: Number(formData.get("rating")),
    message: String(formData.get("message") || "").trim(),
    status: "pending",
    submittedAt: new Date().toISOString(),
  };
  if (
    !review.name ||
    review.name.length > 50 ||
    !review.email ||
    review.email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(review.email) ||
    !Number.isInteger(review.rating) ||
    review.rating < 1 ||
    review.rating > 5 ||
    !review.message ||
    review.message.length > 500
  ) {
    reviewStatus.textContent = "Confira o nome, o e-mail, a nota e o comentário antes de enviar.";
    return;
  }

  const emailSubject = `Avaliação de produto: ${review.productName}`;
  const emailBody = [
    "Nova avaliação de produto para aprovação",
    "",
    `Produto: ${review.productName} (ID ${review.productId})`,
    `Nome: ${review.name}`,
    `E-mail do cliente: ${review.email}`,
    `Nota: ${review.rating}/5`,
    `Comentário: ${review.message}`,
    `Preparado em: ${review.submittedAt}`,
  ].join("\n");
  const mailtoLink = document.createElement("a");
  mailtoLink.href =
    `mailto:${REVIEW_RECIPIENT}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
  mailtoLink.hidden = true;
  document.body.append(mailtoLink);
  mailtoLink.click();
  mailtoLink.remove();

  const gmailComposeUrl = new URL("https://mail.google.com/mail/");
  gmailComposeUrl.search = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: REVIEW_RECIPIENT,
    su: emailSubject,
    body: emailBody,
  }).toString();
  reviewEmailFallback.href = gmailComposeUrl.toString();
  reviewEmailFallback.hidden = false;

  reviewForm.reset();
  reviewStatus.textContent =
    "Seu app de e-mail deve abrir com a avaliação pronta. Se não abrir, use o link para compor pelo Gmail no navegador.";
});

updateProductRatings();
loadPublishedReviews();
