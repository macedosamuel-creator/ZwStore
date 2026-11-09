// Configure os dados da sua loja antes de divulgar o site.
const STORE = {
  name: "ZW Store RN",
  whatsapp: "5584981142531",
  pixKey: "ef303c07-7e05-4d5b-8a9c-aba04ac818cd",
  pixPayload:
    "00020126580014BR.GOV.BCB.PIX0136ef303c07-7e05-4d5b-8a9c-aba04ac818cd5204000053039865802BR5925Samuel Ferreira de Macedo6009SAO PAULO621405100GPLHLUiO86304BA9C",
  // Configure faixas de desconto sobre o subtotal já com descontos dos produtos.
  // Somente a maior faixa atingida é aplicada; não acumula com as anteriores.
  cartDiscounts: [
    { minimum: 500, percent: 1 },
    { minimum: 1400, percent: 5 },
  ],
};

const allProducts = [
  // Edite o campo stock de cada produto para atualizar as quantidades disponíveis.
  // Com stock: 0, o produto aparece como esgotado e não pode ser comprado.
  // Para dar desconto, adicione discount: 10 ao produto (percentual; omita ou use 0 para não dar desconto).
  // Edite rating (0 a 5) e purchaseCount em cada produto para mostrar estrelas e vendas.
  // Use null quando ainda não tiver uma avaliação ou quantidade de vendas real.
  // Detalhes opcionais: description e reviewCount.
  {
    id: 1,
    name: "Capinha iPhone 12 Transparente",
    category: "Celular",
    price: 19.99,
    stock: 3,
    rating: 5,
    purchaseCount: 1,
    label: "transparente",
    image: "./ip12transp.jpg.jpeg",
    discount: 0,
  },
  {
    id: 2,
    name: "Capinha iPhone 13 Pro Max Azul",
    category: "Celular",
    price: 24.99,
    stock: 1,
    rating: 4.5,
    purchaseCount: 4,
    label: "azul",
    image: "./ip13PMazul.jpg.jpeg",
    discount: 0,
  },
  {
    id: 3,
    name: "Capinha iPhone 13 Pro Max Bege",
    category: "Celular",
    price: 24.99,
    stock: 1,
    rating: 4,
    purchaseCount: 3,
    label: "bege",
    image: "./ip13PMbege.jpg.jpeg",
    discount: 0,
  },
  {
    id: 4,
    name: "Capinha iPhone 13 Pro Max Marrom",
    category: "Celular",
    price: 24.99,
    stock: 1,
    rating: 4.5,
    purchaseCount: 2,
    label: "marrom",
    image: "./ip13PMmarrom.jpg.jpeg",
    discount: 0,
  },
  {
    id: 6,
    name: "Capinha iPhone 13 Pro Max Verde",
    category: "Celular",
    price: 24.99,
    stock: 1,
    rating: 4.6,
    purchaseCount: 5,
    label: "verde",
    image: "./ip13PMverde.jpg.jpeg",
    discount: 0,
  },
  {
    id: 7,
    name: "Capinha iPhone 13 Pro Max Preta",
    category: "Celular",
    price: 24.99,
    stock: 1,
    rating: 5,
    purchaseCount: 2,
    label: "preta",
    image: "./ip13PMpreta.jpg.jpeg",
    discount: 0,
  },
  {
    id: 8,
    name: "Capinha iPhone 15 Transparente",
    category: "Celular",
    price: 19.99,
    stock: 3,
    rating: 4.8,
    purchaseCount: 10,
    label: "transparente",
    image: "./ip15transp.jpg.jpeg",
    discount: 0,
  },
  {
    id: 9,
    name: "Capinha iPhone 12 Azul",
    category: "Celular",
    price: 24.99,
    stock: 1,
    rating: 3.8,
    purchaseCount: 2,
    label: "azul",
    image: "./ip12azul.jpg.jpeg",
    discount: 0,
  },
  {
    id: 10,
    name: "Capinha iPhone 12 Bege Escuro",
    category: "Celular",
    price: 24.99,
    stock: 1,
    rating: 4.2,
    purchaseCount: 3,
    label: "bege escuro",
    image: "./ip12begeescuru.jpg.jpeg",
    discount: 0,
  },
  {
    id: 11,
    name: "Capinha iPhone 12 Marrom",
    category: "Celular",
    price: 24.99,
    stock: 1,
    rating: 4.5,
    purchaseCount: 2,
    label: "marrom",
    image: "./ip12marrom.jpg.jpeg",
    discount: 0,
  },
  {
    id: 12,
    name: "Capinha iPhone 12 Verde",
    category: "Celular",
    price: 24.99,
    stock: 1,
    rating: 4.0,
    purchaseCount: 1,
    label: "verde",
    image: "./ip12verde..jpg.jpeg",
    discount: 0
  },
  {id: 13,
    name: "Capinha iPhone 17 Pro Max transparente",
    category: "Celular",
    price: 19.99,
    stock: 2,
    rating: 4.8,
    purchaseCount: 10,
    label: "transparente",
    image: "./ip17PMtransp.jpg.jpeg",
    discount: 0
  },
  {
    id: 14,
    name: "Kit 4 Pilotos Para Quadro + Apagador",
    category: "Achadinhos",
    price: 39.99,
    stock: 1,
    rating: 4.5,
    purchaseCount: 5,
    label: "kit",
    image: "./kitPilotos.jpg.jpeg",
    discount: 15
  },
  {
    id: 15,
    name: "Capinha iPhone 11 Azul",
    category: "Celular",
    price: 24.99,
    stock: 1,
    rating: 5,
    purchaseCount: 2,
    label: "azul",
    image: "./ip11azul.jpg.jpeg",
    discount: 0 
  },
  {
    id: 16,
    name: "Capinha iPhone 11 Bege Escuro",
    category: "Celular",
    price: 24.99,
    stock: 1,
    rating: 4.2,
    purchaseCount: 3,
    label: "bege escuro",
    image: "./ip11bege_cinza.jpg.jpeg",
    discount: 0
  },
  {
    id: 17,
    name: "Capinha iPhone 11 Marrom",
    category: "Celular",
    price: 24.99,
    stock: 1,
    rating: 4.5,
    purchaseCount: 2,
    label: "marrom",
    image: "./ip11marrom.jpg.jpeg",
    discount: 0
  },
  {
    id: 18,
    name: "Capinha iPhone 11 Verde",
    category: "Celular",
    price: 24.99,
    stock: 1,
    rating: 4.0,
    purchaseCount: 1,
    label: "verde",
    image: "./ip11verde.jpg.jpeg",
    discount: 0
  },
  {
    id: 19,
    name: "Capinha iPhone 11 Roxa Escura",
    category: "Celular",
    price: 24.99,
    stock: 1,
    rating: 5,
    purchaseCount: 1,
    label: "roxa escura",
    image: "./ip11roxaescuro.jpg.jpeg",
    discount: 0
  },
  {
    id: 20,
    name: "Capinha iPhone 11 Transparente",
    category: "Celular",
    price: 19.99,
    stock: 2,
    rating: 4.0,
    purchaseCount: 1,
    label: "transparente",
    image: "./ip11transp.jpg.jpeg",
    discount: 0
  },
  {
    id: 21,
    name: "Capinha iPhone 13 Azul",
    category: "Celular",
    price: 24.99,
    stock: 1,
    rating: 4.6,
    purchaseCount: 9,
    label: "azul",
    image: "./ip13azul.jpg.jpeg",
    discount: 0
  },
  {
    id: 22,
    name: "Capinha iPhone 13 Branca",
    category: "Celular",
    price: 24.99,
    stock: 1,
    rating: 4.0,
    purchaseCount: 1,
    label: "branca",
    image: "./ip13branca.jpg.jpeg",
    discount: 0
  },
  {
    id: 23,
    name: "Capinha iPhone 13 Verde",
    category: "Celular",
    price: 24.99,
    stock: 1,
    rating: 4.5,
    purchaseCount: 2,
    label: "verde",
    image: "./ip13verde.jpg.jpeg",
    discount: 0
    },
    {
    id: 24,
    name: "Capinha iPhone 13 Transparente",
    category: "Celular",
    price: 19.99,
    stock: 3,
    rating: 4.0,
    purchaseCount: 1,
    label: "transparente",
    image: "./ip13transp.jpg.jpeg",
    discount: 0
  },
  {
    id: 25,
    name: "78 Diamantes FF",
    category: "Jogos",
    price: 4,
    stock: 100,
    rating: 4.9,
    purchaseCount: 861,
    label: "diamantes",
    image: "./78dimas.jpg.jpeg",
    discount: 5
  },
  {
    id: 26,
    name: "120 Diamantes FF",
    category: "Jogos",
    price: 6,
    stock: 100,
    rating: 4.5,
    purchaseCount: 297,
    label: "diamantes",
    image: "./120dimas.jpg.jpeg",
    discount: 10
  },

{
  id: 27,
  name: "372 Diamantes FF",
  category: "Jogos",
  price: 16,
  stock: 100,
  rating: 4.8,
  purchaseCount: 197,
  label: "diamantes",
  image: "./372dimas.jpg.jpeg",
  discount: 6
},
{
  id: 28,
  name: "624 Diamantes FF",
  category: "Jogos",
  price: 25,
  stock: 100,
  rating: 4.0,
  purchaseCount: 951,
  label: "diamantes",
  image: "./624dimas.jpg.jpeg",
  discount: 0
},
{
  id: 29,
  name: "1272 Diamantes FF",
  category: "Jogos",
  price: 50,
  stock: 100,
  rating: 4.0,
  purchaseCount: 51,
  label: "diamantes",
  image: "./1272dimas.jpg.jpeg",
  discount: 0
},
{
  id: 30,
  name: "2616 Diamantes FF",
  category: "Jogos",
  price: 99,
  stock: 100,
  rating: 4.7,
  purchaseCount: 21,
  label: "diamantes",
  image: "./2616dimas.jpg.jpeg",
  discount: 9
},
{
  id: 57,
  name: "6720 Diamantes FF",
  category: "Jogos",
  price: 235,
  stock: 100,
  rating: 5,
  purchaseCount: 11,
  label: "diamantes",
  image: "./6729dimas.jpg.jpeg",
  discount: 5
},
{
  id: 58,
  name: "26880 Diamantes FF",
  category: "Jogos",
  price: 929,
  stock: 100,
  rating: 4.8,
  purchaseCount: 10,
  label: "diamantes",
  image: "./26880dimas.jpg.jpeg",
  discount: 3
},
{
  id: 31,
  name: "Conta Blox Fruits | Level 2800 + Godhuman + 2 Frutas Míticas Garantidas + Outros",
  category: "Jogos",
  price: 25,
  stock: 15,
  rating: 4.7,
  purchaseCount: 14,
  label: "blox-fruits",
  image: "./contas.jpg.jpeg",
  discount: 20
},
{id: 32,
  name: "Conta Blox Fruits | 3-5 Frutas Míticas Garantidas + Level 2800 + Godhuman + Outros",
  category: "Jogos",
  price: 35,
  stock: 11,
  rating: 4.5,
  purchaseCount: 29,
  label: "blox-fruits",
  image: "./contas.jpg.jpeg",
  discount: 20
},
{
  id: 33,
  name: "Conta Blox Fruits | 4-6 Frutas Míticas Garantidas + Level 2800 + Godhuman + Outros",
  category: "Jogos",
  price: 55,
  stock: 7,
  rating: 4.8,
  purchaseCount: 10,
  label: "blox-fruits",
  image: "./contas.jpg.jpeg",
  discount: 30
},
{
  id: 34, 
  name: "Conta Blox Fruits | Level 2800 + Godhuman + Portal + Outros",
  category: "Jogos",
  price: 15,
  stock: 7,
  rating: 4.5,
  purchaseCount: 23,
  label: "blox-fruits",
  image: "./portal.jpg.jpeg",
  discount: 15
},
{
  id: 35,
  name: "Conta Blox Fruits | Level 2800 + Godhuman + Lightning (Rumble) + Outros",
  category: "Jogos",
  price: 20,
  stock: 3,
  rating: 4.5,
  purchaseCount: 37,
  label: "blox-fruits",
  image: "./rumble.jpg.jpeg",
  discount: 25
},
{
  id: 36,
  name: "Conta Blox Fruits | Level 2800 + Godhuman + Gás + Outros",
  category: "Jogos",
  price: 20,
  stock: 2,
  rating: 4.2,
  purchaseCount: 98,
  label: "blox-fruits",
  image: "./gas.jpg.jpeg",
  discount: 25
},
{
  id: 37,
  name: "💎 CAIXA ROBUX (SORTE🍀) de 1000 até 50.000 Robux! 🔥",
  category: "Jogos",
  price: 25,
  stock: 1000,
  rating: 4.9,
  purchaseCount: 951,
  label: "robux",
  image: "./caixarubux.jpg.jpeg",
  discount: 10
},
{
  id: 38,
  name: "Assinatura Semanal FF (7 dias)",
  category: "Jogos",
  price: 11.50,
  stock: 1000,
  rating: 4.0,
  purchaseCount: 129,
  label: "assinatura pelo ID",
  image: "./FF.jpg.jpeg",
  discount: 10
},
{
  id: 39,
  name: "Assinatura Mensal FF (30 dias)",
  category: "Jogos",
  price: 52.50,
  stock: 1000,
  rating: 4.0,
  purchaseCount: 124,
  label: "assinatura pelo ID",
  image: "./FF.jpg.jpeg",
  discount: 10
},
{
  id: 40,
  name: "Semanal Econômica FF (7 dias)",
  category: "Jogos",
  price: 2.22,
  stock: 1000,
  rating: 4.0,
  purchaseCount: 210,
  label: "assinatura pelo ID",
  image: "./FF.jpg.jpeg",
  discount: 10
},
{
  id: 41,
  name: "Passe Booyah FF",
  category: "Jogos",
  price: 15.50,
  stock: 1000,
  rating: 4.5,
  purchaseCount: 10,
  label: "envio pelo ID",
  image: "./Passe.jpg.jpeg",
  discount: 10
},
{
  id: 42,
  name: "Passe Booyah Premium Plus FF ",
  category: "Jogos",
  price: 45.50,
  stock: 1000,
  rating: 4.8,
  purchaseCount: 8,
  label: "envio pelo ID",
  image: "./Passe.jpg.jpeg",
  discount: 28
},
{
  id: 44,
  name: "Suporte Ventosa Para Celular",
  category: "Acessórios",
  price: 8,
  stock: 1,
  rating: 4.5,
  purchaseCount: 9,
  label: "preto",
  image: "./suporteventosa.jpg.jpeg",
  discount: 0
},
{
  id: 45,
  name: "Pelicula de Vidro iPhone 13",
  category: "Celular",
  price: 15,
  stock: 5,
  rating: 4.5,
  purchaseCount: 91,
  label: "pelicula 3d",
  image: "./ip13_13pm_13p_14_16e_17e.jpg.jpeg",
  discount: 0
},
{
  id: 46,
  name: "Pelicula de Vidro iPhone 13 Pro",
  category: "Celular",
  price: 15,
  stock: 5,
  rating: 4.5,
  purchaseCount: 91,
  label: "pelicula 3d",
  image: "./ip13_13pm_13p_14_16e_17e.jpg.jpeg",
  discount: 0
},
{
  id: 47,
  name: "Pelicula de Vidro iPhone 13 Pro Max",
  category: "Celular",
  price: 15,
  stock: 5,
  rating: 4.7,
  purchaseCount: 51,
  label: "pelicula 3d",
  image: "./ip13_13pm_13p_14_16e_17e.jpg.jpeg",
  discount: 0
},
{
  id: 48,
  name: "Pelicula de Vidro iPhone 14",
  category: "Celular",
  price: 15,
  stock: 5,
  rating: 4.5,
  purchaseCount: 35,
  label: "pelicula 3d",
  image: "./ip13_13pm_13p_14_16e_17e.jpg.jpeg",
  discount: 0
},
{
  id: 49,
  name: "Pelicula de Vidro iPhone 15",
  category: "Celular",
  price: 15,
  stock: 5,
  rating: 4.7,
  purchaseCount: 20,
  label: "pelicula 3d",
  image: "./ip16pelicula.jpg.jpeg",
  discount: 0
},
{
  id: 50,
  name: "Pelicula de Vidro iPhone 16",
  category: "Celular",
  price: 15,
  stock: 5,
  rating: 4.7,
  purchaseCount: 20,
  label: "pelicula 3d",
  image: "./ip16pelicula.jpg.jpeg",
  discount: 0
},
{
  id: 51,
  name: "Pelicula de Vidro iPhone 16e",
  category: "Celular",
  price: 15,
  stock: 5,
  rating: 4.1,
  purchaseCount: 50,
  label: "pelicula 3d",
  image: "./ip13_13pm_13p_14_16e_17e.jpg.jpeg",
  discount: 0
},
{
  id: 52,
  name: "Pelicula de Vidro iPhone 17e",
  category: "Celular",
  price: 15,
  stock: 5,
  rating: 4.5,
  purchaseCount: 10,
  label: "pelicula 3d",
  image: "./ip13_13pm_13p_14_16e_17e.jpg.jpeg",
  discount: 0
},
{
  id: 53,
  name: "Tapete Mousepad 80x30cm Ilustrações Mangá Monocromático com Efeitos Luminosos Azul Laranja Superfície à Água Setup Gamer",
  category: "Achadinhos",
  price: 100,
  stock: 5,
  rating: 4.5,
  purchaseCount: 100,
  label: "prazo 30 dias",
  image: "./mousepadgojo.jpg.jpeg",
  discount: 42
},
{
  id: 54,
  name: "Tapete Mousepad 80x30cm Ilustrações Mangá Monocromático com Efeitos Luminosos Azul Laranja Superfície à Água Setup Gamer",
  category: "Achadinhos",
  price: 100,
  stock: 5,
  rating: 4.7,
  purchaseCount: 100,
  label: "prazo 30 dias",
  image: "./mousepadbleach.jpg.jpeg",
  discount: 40
},
{
  id: 55,
  name: "Tapete Mousepad 80x30cm Ilustrações Mangá Monocromático com Efeitos Luminosos Azul Laranja Superfície à Água Setup Gamer",
  category: "Achadinhos",
  price: 100,
  stock: 5,
  rating: 4.5,
  purchaseCount: 170,
  label: "prazo 30 dias",
  image: "./mousepadsukuna.jpg.jpeg",
  discount: 45
},
{
  id: 56,
  name: "Lapis Infinito",
  category: "Achadinhos",
  price: 10,
  stock: 47,
  rating: 4.5,
  purchaseCount: 953,
  label: "cores variadas",
  image: "./lapisinfinito.jpg.jpeg",
  discount: 10
},
{
  id: 59,
  name: "Monitor Led 20' Tronos Trs-hk20wy Preto Vesa Widescreen",
  category: "Ofertas",
  price: 359.99,
  stock: 50,
  rating: 4.8,
  purchaseCount: 96,
  label: "Prazo 30 dias",
  image: "./monitor20.jpg.jpeg",
  discount: 0
},
{
  id: 60,
  name: "Placa De Vídeo Nvidia Gddr3 200 Series Gt 210 Revenger 1gb",
  category: "Ofertas",
  price: 279.99,
  stock: 50,
  rating: 4.7,
  purchaseCount: 74,
  label: "Prazo 30 dias",
  image: "./placagddr3.jpg.jpeg",
  discount: 25
}
];

const IS_GAMES_STORE = document.body.dataset.catalog === "games";
const products = allProducts.filter((product) => {
  const isGameProduct = normalizeCategory(product.category) === "jogos";
  return IS_GAMES_STORE ? isGameProduct : !isGameProduct;
});

const productGrid = document.querySelector("#product-grid");
const emptyState = document.querySelector("#empty-state");
const searchInput = document.querySelector("#search");
const setupNotice = document.querySelector("#setup-notice");
const productDetailBackdrop = document.querySelector("#product-detail-backdrop");
const productDetailDialog = document.querySelector("#product-detail-dialog");
const productDetailImage = document.querySelector("#product-detail-image");
const productDetailTitle = document.querySelector("#product-detail-title");
const productDetailCategory = document.querySelector("#product-detail-category");
const productDetailPrice = document.querySelector("#product-detail-price");
const productDetailDescription = document.querySelector("#product-detail-description");
const productDetailStars = document.querySelector("#product-detail-stars");
const productDetailRating = document.querySelector("#product-detail-rating");
const productDetailPurchases = document.querySelector("#product-detail-purchases");
const productDetailAddButton = document.querySelector("#product-detail-add");
const productDetailBuyButton = document.querySelector("#product-detail-buy");
const cartBackdrop = document.querySelector("#cart-backdrop");
const cartItems = document.querySelector("#cart-items");
const cartEmpty = document.querySelector("#cart-empty");
const cartSummary = document.querySelector("#cart-summary");
const cartCount = document.querySelector("#cart-count");
const cartTotal = document.querySelector("#cart-total");
const cartSubtotal = document.querySelector("#cart-subtotal");
const cartDiscountRow = document.querySelector("#cart-discount-row");
const cartDiscount = document.querySelector("#cart-discount");
const cartVolumeDiscountRow = document.querySelector("#cart-volume-discount-row");
const cartVolumeDiscountLabel = document.querySelector("#cart-volume-discount-label");
const cartVolumeDiscount = document.querySelector("#cart-volume-discount");
const cartDiscountHint = document.querySelector("#cart-discount-hint");
const cartTitle = document.querySelector("#cart-title");
const checkoutButton = document.querySelector("#checkout-button");
const paymentDetails = document.querySelector("#payment-details");
const pixAmount = document.querySelector("#pix-amount");
const pixCode = document.querySelector("#pix-code");
const pixQrCode = document.querySelector("#pix-qr-code");
const paymentNotice = document.querySelector("#payment-notice");
const sendOrderButton = document.querySelector("#send-order-button");
const ORDER_SEND_CLICK_LIMIT = 5;
const CART_STORAGE_KEY = IS_GAMES_STORE
  ? "zw-store-rn-games-cart"
  : "nexora-cia-cart";
const HIDDEN_FROM_ALL_PRODUCTS = new Set(["jogos"]);
const CATEGORY_ALIASES = {
  jogos: new Set(["jogos", "pagina de jogos", "página de jogos"]),
  "pagina de jogos": new Set(["jogos", "pagina de jogos", "página de jogos"]),
  "página de jogos": new Set(["jogos", "pagina de jogos", "página de jogos"]),
};
let activeCategory = "Todos";
let cart = loadCart();
let cartBeforeDirectPurchase = null;
let activeDetailProductId = null;
let productDetailTrigger = null;
let paymentConfirmationAttempts = 0;
let paymentTabWasHidden = false;
saveCart();

function normalizeCategory(category) {
  return String(category ?? "")
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("pt-BR")
    .replace(/\s+/g, " ");
}

function matchesCategory(productCategory, selectedCategory) {
  const normalizedProductCategory = normalizeCategory(productCategory);
  const normalizedSelectedCategory = normalizeCategory(selectedCategory);

  if (normalizedSelectedCategory === "todos") {
    return IS_GAMES_STORE
      ? normalizedProductCategory === "jogos"
      : !HIDDEN_FROM_ALL_PRODUCTS.has(normalizedProductCategory);
  }

  const aliases = CATEGORY_ALIASES[normalizedSelectedCategory] || new Set([normalizedSelectedCategory]);
  return aliases.has(normalizedProductCategory);
}

function formatPrice(price) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);
}

function getDiscountPercent(product) {
  if (!Number.isFinite(product.discount)) return 0;
  return Math.min(100, Math.max(0, product.discount));
}

function getDiscountedPrice(product) {
  return Math.round(product.price * (1 - getDiscountPercent(product) / 100) * 100) / 100;
}

function getCartDiscountPercent(eligibleSubtotalCents) {
  const eligibleTiers = STORE.cartDiscounts
    .filter(
      ({ minimum, percent }) =>
        Number.isFinite(minimum) &&
        minimum > 0 &&
        Number.isFinite(percent) &&
        percent > 0,
    )
    .sort((a, b) => a.minimum - b.minimum);
  const activeTier = eligibleTiers
    .filter(({ minimum }) => eligibleSubtotalCents >= Math.round(minimum * 100))
    .at(-1);
  return activeTier ? Math.min(100, activeTier.percent) : 0;
}

function getCartDiscountProgress(eligibleSubtotalCents) {
  const tiers = STORE.cartDiscounts
    .filter(
      ({ minimum, percent }) =>
        Number.isFinite(minimum) &&
        minimum > 0 &&
        Number.isFinite(percent) &&
        percent > 0,
    )
    .sort((a, b) => a.minimum - b.minimum);
  const nextTier = tiers.find(
    ({ minimum }) => eligibleSubtotalCents < Math.round(minimum * 100),
  );
  const activeTier = tiers
    .filter(({ minimum }) => eligibleSubtotalCents >= Math.round(minimum * 100))
    .at(-1);

  return { activeTier, nextTier };
}

function parsePixFields(payload) {
  const fields = [];
  let position = 0;

  while (position < payload.length) {
    const tag = payload.slice(position, position + 2);
    const length = Number(payload.slice(position + 2, position + 4));
    if (!/^\d{2}$/.test(tag) || !Number.isInteger(length) || length < 0) {
      throw new Error("O código Pix da loja está inválido.");
    }

    const valueStart = position + 4;
    const value = payload.slice(valueStart, valueStart + length);
    if (value.length !== length) {
      throw new Error("O código Pix da loja está incompleto.");
    }
    fields.push({ tag, value });
    position = valueStart + length;
  }

  return fields;
}

function calculatePixCrc16(payload) {
  let crc = 0xffff;
  for (const character of payload) {
    crc ^= character.charCodeAt(0) << 8;
    for (let bit = 0; bit < 8; bit += 1) {
      crc = crc & 0x8000 ? (crc << 1) ^ 0x1021 : crc << 1;
      crc &= 0xffff;
    }
  }
  return crc.toString(16).toUpperCase().padStart(4, "0");
}

function createPixPayload(amount) {
  const fields = parsePixFields(STORE.pixPayload).filter(
    ({ tag }) => tag !== "54" && tag !== "63",
  );
  const amountField = { tag: "54", value: amount.toFixed(2) };
  const merchantAccountIndex = fields.findIndex(({ tag }) => tag === "58");
  if (merchantAccountIndex < 0) {
    throw new Error("O código Pix da loja está sem os dados de pagamento.");
  }
  fields.splice(merchantAccountIndex, 0, amountField);

  const payload = `${fields
    .map(({ tag, value }) => `${tag}${String(value.length).padStart(2, "0")}${value}`)
    .join("")}6304`;
  return `${payload}${calculatePixCrc16(payload)}`;
}

function renderProducts() {
  const searchTerm = searchInput.value.trim().toLocaleLowerCase("pt-BR");
  const isTopSellers = normalizeCategory(activeCategory) === "mais vendidos";
  const topSellers = isTopSellers
    ? products
        .filter(
          (product) =>
            Number.isSafeInteger(product.purchaseCount) &&
            product.purchaseCount > 0,
        )
        .sort((a, b) => b.purchaseCount - a.purchaseCount)
        .slice(0, 10)
    : products;
  const visibleProducts = topSellers.filter((product) => {
    const matchesCategoryFilter = isTopSellers
      ? true
      : normalizeCategory(activeCategory) === "ofertas"
        ? normalizeCategory(product.category) === "ofertas" ||
          getDiscountPercent(product) >= 45
        : matchesCategory(product.category, activeCategory);
    const matchesSearch = `${product.name} ${product.category}`
      .toLocaleLowerCase("pt-BR")
      .includes(searchTerm);
    return matchesCategoryFilter && matchesSearch;
  });

  productGrid.innerHTML = visibleProducts
    .map(
      (product) => {
        const quantityInCart = cart[product.id] || 0;
        const outOfStock = product.stock <= 0;
        const cannotAddMore = outOfStock || quantityInCart >= product.stock;
        const discountPercent = getDiscountPercent(product);
        const discountedPrice = getDiscountedPrice(product);
        const rating = Number.isFinite(product.rating)
          ? Math.min(5, Math.max(0, product.rating))
          : null;
        const roundedRating = rating === null ? 0 : Math.round(rating);
        const purchaseCount = Number.isSafeInteger(product.purchaseCount) && product.purchaseCount >= 0
          ? product.purchaseCount
          : null;
        return `
        <article class="product-card">
          <div class="product-image">
            <button class="product-detail-trigger" type="button" data-product-details="${product.id}" aria-label="Ver detalhes de ${product.name}">
              <img src="${product.image}" alt="" loading="lazy" />
            </button>
            <span class="product-label">${product.label}</span>
            ${discountPercent ? `<span class="product-discount-badge">${discountPercent}% OFF</span>` : ""}
          </div>
          <div class="product-details">
            <span class="product-category">${product.category}</span>
            <h3 class="product-title"><button class="product-detail-title-trigger" type="button" data-product-details="${product.id}">${product.name}${outOfStock ? " (Esgotado)" : ""}</button></h3>
            <p class="product-stock${outOfStock ? " product-stock-empty" : ""}">
              ${outOfStock ? "Estoque: 0 unidades" : `Estoque: ${product.stock} ${product.stock === 1 ? "unidade" : "unidades"}`}
            </p>
            <div class="product-social-proof">
              <span class="product-card-rating" aria-label="${rating === null ? "Sem avaliações" : `Avaliação ${rating.toLocaleString("pt-BR", { maximumFractionDigits: 1 })} de 5`}">
                <span class="product-card-stars" aria-hidden="true">${"★".repeat(roundedRating)}${"☆".repeat(5 - roundedRating)}</span>
                <span>${rating === null ? "Sem avaliações" : rating.toLocaleString("pt-BR", { maximumFractionDigits: 1 })}</span>
              </span>
              <span class="product-card-purchases">${purchaseCount === null ? "Vendas não informadas" : `${purchaseCount} vendidos`}</span>
            </div>
            <div class="product-bottom">
              <div class="product-pricing">
                ${discountPercent ? `<span class="product-original-price">${formatPrice(product.price)}</span>` : ""}
                <span class="product-price">${formatPrice(discountedPrice)}</span>
              </div>
              <div class="product-actions">
                <button class="order-button${cannotAddMore ? " out-of-stock" : ""}" type="button" data-add-to-cart="${product.id}" ${cannotAddMore ? "disabled" : ""}>
                  ${outOfStock ? "Esgotado" : cannotAddMore ? "Estoque no carrinho" : "Adicionar ao carrinho +"}
                </button>
                <button class="direct-buy-button" type="button" data-buy-now="${product.id}" ${outOfStock ? "disabled" : ""}>
                  ${outOfStock ? "Esgotado" : "Comprar"}
                </button>
              </div>
            </div>
          </div>
        </article>`;
      },
    )
    .join("");

  emptyState.textContent = isTopSellers
    ? "Cadastre purchaseCount nos produtos para mostrar os 10 mais vendidos."
    : "Nenhum produto encontrado. Tente outra busca.";
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
  const isDirectPurchase = cartBeforeDirectPurchase !== null;
  cartTitle.textContent = isDirectPurchase ? "Compra direta" : "Meu carrinho";
  checkoutButton.textContent = isDirectPurchase ? "Gerar Pix do pedido" : "Gerar Pix para pagar";
  paymentConfirmationAttempts = 0;
  paymentDetails.hidden = true;
  sendOrderButton.hidden = true;
  sendOrderButton.textContent = "Já paguei — enviar pedido pelo WhatsApp";
  paymentNotice.textContent = "";
  const entries = Object.entries(cart)
    .map(([id, quantity]) => ({
      product: products.find((item) => item.id === Number(id)),
      quantity,
    }))
    .filter((entry) => entry.product);
  const itemCount = entries.reduce((sum, entry) => sum + entry.quantity, 0);
  const order = getOrderDetails();

  cartCount.textContent = itemCount;
  cartEmpty.hidden = entries.length > 0;
  cartSummary.hidden = entries.length === 0;
  if (order) {
    cartSubtotal.textContent = formatPrice(order.subtotal);
    cartDiscountRow.hidden = order.productSavingsCents <= 0;
    cartDiscount.textContent = `− ${formatPrice(order.productSavingsCents / 100)}`;
    cartVolumeDiscountRow.hidden = order.cartDiscountCents <= 0;
    cartVolumeDiscountLabel.textContent =
      `Desconto no carrinho (${order.cartDiscountPercent}%)${order.hasGames ? " · jogos não inclusos" : ""}`;
    cartVolumeDiscount.textContent =
      `− ${formatPrice(order.cartDiscountCents / 100)}`;
    const { activeTier, nextTier } = getCartDiscountProgress(order.eligibleSubtotalCents);
    cartDiscountHint.hidden =
      !order.hasCartDiscountEligibleItems || (!activeTier && !nextTier);
    let discountHintText = "";
    if (activeTier && nextTier) {
      discountHintText =
        `Desconto de ${Math.min(100, activeTier.percent)}% aplicado! Próximo: ${Math.min(100, nextTier.percent)}% a partir de ${formatPrice(nextTier.minimum)}.`;
    } else if (activeTier) {
      discountHintText =
        `Você atingiu o maior desconto: ${Math.min(100, activeTier.percent)}%.`;
    } else if (nextTier) {
      discountHintText =
        `Próximo desconto: ${Math.min(100, nextTier.percent)} a partir de ${formatPrice(nextTier.minimum)}.`;
    }
    if (!cartDiscountHint.hidden) {
      cartDiscountHint.textContent = order.hasGames
        ? `${discountHintText} Itens de Jogos não estão inclusos no desconto do carrinho.`
        : discountHintText;
    }
    cartTotal.textContent = formatPrice(order.total);
  } else {
    cartDiscountHint.hidden = true;
  }
  cartItems.innerHTML = entries
    .map(
      ({ product, quantity }) => {
        const discountPercent = getDiscountPercent(product);
        const discountedPrice = getDiscountedPrice(product);
        return `
        <article class="cart-item">
          <img src="${product.image}" alt="" />
          <div class="cart-item-info">
            <h3>${product.name}</h3>
            <span>${discountPercent ? `<s>${formatPrice(product.price)}</s> ${formatPrice(discountedPrice)} cada · ${discountPercent}% OFF` : `${formatPrice(product.price)} cada`}</span>
            <div class="quantity-controls" aria-label="Quantidade de ${product.name}">
              <button type="button" data-cart-action="decrease" data-product-id="${product.id}" aria-label="Diminuir quantidade">−</button>
              <span>${quantity}</span>
              <button type="button" data-cart-action="increase" data-product-id="${product.id}" aria-label="Aumentar quantidade">+</button>
              <button class="remove-item" type="button" data-cart-action="remove" data-product-id="${product.id}">Remover</button>
            </div>
          </div>
          <strong class="cart-line-total">${formatPrice(discountedPrice * quantity)}</strong>
        </article>`;
      },
    )
    .join("");
}

function showCartAddedAnimation(productId, targetButton = null) {
  const addButton =
    targetButton ||
    productGrid.querySelector(`[data-add-to-cart="${productId}"]`);
  if (!addButton) return;

  const target = addButton.getBoundingClientRect();
  const animation = document.createElement("div");
  animation.className = "cart-added-animation";
  animation.setAttribute("role", "status");
  animation.setAttribute("aria-live", "polite");
  animation.innerHTML = '<span aria-hidden="true">✓</span> Item adicionado ao carrinho';
  document.body.append(animation);

  const startX = window.innerWidth / 2;
  const startY = window.innerHeight - 22 - animation.offsetHeight / 2;
  animation.style.setProperty("--cart-fly-x", `${target.left + target.width / 2 - startX}px`);
  animation.style.setProperty("--cart-fly-y", `${target.top + target.height / 2 - startY}px`);
  requestAnimationFrame(() => {
    requestAnimationFrame(() => animation.classList.add("is-flying"));
  });
  window.setTimeout(() => animation.remove(), 1200);
}

function openCart() {
  cartBackdrop.hidden = false;
  document.querySelector("#cart-close").focus();
}

function closeCart() {
  cartBackdrop.hidden = true;
  if (cartBeforeDirectPurchase !== null) {
    cart = cartBeforeDirectPurchase;
    cartBeforeDirectPurchase = null;
    renderCart();
    renderProducts();
  }
  document.querySelector("#cart-open").focus();
}

function openProductDetails(productId, trigger) {
  const product = products.find((item) => item.id === productId);
  if (!product) {
    throw new Error(`Produto não encontrado: ${productId}`);
  }

  activeDetailProductId = product.id;
  productDetailTrigger = trigger;
  const discountPercent = getDiscountPercent(product);
  const rating = Number.isFinite(product.rating)
    ? Math.min(5, Math.max(0, product.rating))
    : null;
  const reviewCount = Number.isSafeInteger(product.reviewCount)
    ? Math.max(0, product.reviewCount)
    : null;
  const purchaseCount = Number.isSafeInteger(product.purchaseCount)
    ? Math.max(0, product.purchaseCount)
    : null;

  productDetailImage.src = product.image;
  productDetailImage.alt = product.name;
  productDetailTitle.textContent = product.name;
  productDetailCategory.textContent = product.category;
  productDetailPrice.innerHTML = discountPercent
    ? `<s>${formatPrice(product.price)}</s><strong>${formatPrice(getDiscountedPrice(product))}</strong>`
    : `<strong>${formatPrice(product.price)}</strong>`;
  productDetailDescription.textContent =
    product.description ||
    `${product.name}. Produto da categoria ${product.category}. Confira o modelo e os detalhes na imagem antes de comprar.`;
  productDetailStars.textContent = rating === null
    ? "☆☆☆☆☆"
    : `${"★".repeat(Math.round(rating))}${"☆".repeat(5 - Math.round(rating))}`;
  productDetailRating.textContent = rating === null
    ? "Sem avaliações"
    : `${rating.toLocaleString("pt-BR", { maximumFractionDigits: 1 })}/5${reviewCount ? ` (${reviewCount} avaliações)` : ""}`;
  productDetailPurchases.textContent =
    purchaseCount === null ? "Vendas não informadas" : `${purchaseCount} vendidos`;
  const outOfStock = product.stock <= 0;
  productDetailAddButton.disabled =
    outOfStock || (cart[product.id] || 0) >= product.stock;
  productDetailAddButton.textContent = outOfStock
    ? "Esgotado"
    : productDetailAddButton.disabled
      ? "Estoque no carrinho"
      : "Adicionar ao carrinho";
  productDetailBuyButton.disabled = outOfStock;
  productDetailBuyButton.textContent = outOfStock ? "Esgotado" : "Comprar";
  productDetailBackdrop.hidden = false;
  document.querySelector("#product-detail-close").focus();
}

function closeProductDetails(restoreFocus = true) {
  productDetailBackdrop.hidden = true;
  activeDetailProductId = null;
  if (restoreFocus && productDetailTrigger?.isConnected) {
    productDetailTrigger.focus();
  }
  productDetailTrigger = null;
}

function buyProductDirectly(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) {
    throw new Error(`Produto não encontrado: ${productId}`);
  }
  if (product.stock <= 0 || cartBeforeDirectPurchase !== null) return;

  cartBeforeDirectPurchase = { ...cart };
  cart = { [product.id]: 1 };
  renderCart();
  renderProducts();
  openCart();
  startPixPayment();
}

function getOrderDetails() {
  const entries = Object.entries(cart)
    .map(([id, quantity]) => ({
      product: products.find((item) => item.id === Number(id)),
      quantity,
    }))
    .filter((entry) => entry.product);

  if (entries.length === 0) return null;

  const productDiscountedSubtotalCents = entries.reduce(
    (sum, entry) =>
      sum + Math.round(getDiscountedPrice(entry.product) * 100) * entry.quantity,
    0,
  );
  const eligibleSubtotalCents = entries.reduce(
    (sum, entry) => {
      if (normalizeCategory(entry.product.category) === "jogos") return sum;
      return sum + Math.round(getDiscountedPrice(entry.product) * 100) * entry.quantity;
    },
    0,
  );
  const gamesSubtotalCents = entries.reduce(
    (sum, entry) => {
      if (normalizeCategory(entry.product.category) !== "jogos") return sum;
      return sum + Math.round(getDiscountedPrice(entry.product) * 100) * entry.quantity;
    },
    0,
  );
  const hasGames = entries.some(
    (entry) => normalizeCategory(entry.product.category) === "jogos",
  );
  const hasCartDiscountEligibleItems = entries.some(
    (entry) => normalizeCategory(entry.product.category) !== "jogos",
  );
  const subtotalCents = entries.reduce(
    (sum, entry) => sum + Math.round(entry.product.price * 100) * entry.quantity,
    0,
  );
  const cartDiscountPercent = getCartDiscountPercent(eligibleSubtotalCents);
  const cartDiscountCents = Math.round(
    eligibleSubtotalCents * cartDiscountPercent / 100,
  );
  const totalCents = gamesSubtotalCents + eligibleSubtotalCents - cartDiscountCents;
  return {
    entries,
    total: totalCents / 100,
    subtotal: subtotalCents / 100,
    subtotalCents,
    totalCents,
    productDiscountedSubtotalCents,
    eligibleSubtotalCents,
    hasGames,
    hasCartDiscountEligibleItems,
    productSavingsCents: subtotalCents - productDiscountedSubtotalCents,
    cartDiscountPercent,
    cartDiscountCents,
  };
}

function startPixPayment() {
  const order = getOrderDetails();
  if (!order) return;
  if (!STORE.whatsapp || !STORE.pixKey) {
    setupNotice.textContent =
      "Para finalizar o pedido, preencha o WhatsApp e os dados Pix no início do arquivo app.js.";
    setupNotice.hidden = false;
    return;
  }

  try {
    const payload = createPixPayload(order.total);
    paymentConfirmationAttempts = 0;
    pixAmount.textContent = formatPrice(order.total);
    pixCode.value = payload;
    pixQrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&format=png&data=${encodeURIComponent(payload)}`;
    pixQrCode.alt = `QR Code Pix para pagamento de ${formatPrice(order.total)}`;
    paymentNotice.textContent = "";
    sendOrderButton.hidden = false;
    paymentDetails.hidden = false;
    paymentDetails.scrollIntoView({ behavior: "smooth", block: "nearest" });
  } catch (error) {
    console.error("Não foi possível gerar o código Pix.", error);
    sendOrderButton.hidden = true;
    paymentNotice.textContent =
      "Não foi possível gerar o Pix. Confira os dados Pix da loja e tente novamente.";
    paymentDetails.hidden = false;
  }
}

function sendOrderToWhatsApp() {
  if (paymentDetails.hidden || !pixCode.value) return;
  sendOrderButton.classList.remove("click-effect");
  void sendOrderButton.offsetWidth;
  sendOrderButton.classList.add("click-effect");
  paymentConfirmationAttempts += 1;
  if (paymentConfirmationAttempts < ORDER_SEND_CLICK_LIMIT) {
    paymentNotice.textContent =
      "Pix não enviado. Confira o pagamento e tente novamente.";
    return;
  }

  const order = getOrderDetails();
  if (!order) return;
  const savings = order.subtotalCents - order.totalCents;

  const message = [
    `Olá! Quero fazer um pedido na ${STORE.name}:`,
    "",
    ...order.entries.map(
      ({ product, quantity }) =>
        `• ${product.name} — ${quantity} x ${formatPrice(getDiscountedPrice(product))}${getDiscountPercent(product) ? ` (${getDiscountPercent(product)}% OFF)` : ""} = ${formatPrice(getDiscountedPrice(product) * quantity)}`,
    ),
    "",
    `Subtotal: ${formatPrice(order.subtotal)}`,
    ...(order.productSavingsCents > 0
      ? [`Descontos nos produtos: − ${formatPrice(order.productSavingsCents / 100)}`]
      : []),
    ...(order.cartDiscountCents > 0
      ? [`Desconto no carrinho (${order.cartDiscountPercent}%): − ${formatPrice(order.cartDiscountCents / 100)}`]
      : []),
    ...(savings > 0
      ? [`Total de descontos: − ${formatPrice(savings / 100)}`]
      : []),
    `Total dos produtos: ${formatPrice(order.total)}`,
  ].join("\n");
  const whatsappUrl = `https://wa.me/${STORE.whatsapp}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
}

function selectCategory(category) {
  activeCategory = category;
  document.querySelectorAll(".category-chip").forEach((chip) => {
    const isActive = chip.dataset.category === category;
    chip.classList.toggle("active", isActive);
    chip.setAttribute("aria-pressed", String(isActive));
  });
  const offersButton = document.querySelector("#offers-feature-button");
  const offersActive = normalizeCategory(category) === "ofertas";
  offersButton.classList.toggle("active", offersActive);
  offersButton.setAttribute("aria-pressed", String(offersActive));
  const bestsellersButton = document.querySelector("#bestsellers-feature-button");
  const bestsellersActive = normalizeCategory(category) === "mais vendidos";
  bestsellersButton.classList.toggle("active", bestsellersActive);
  bestsellersButton.setAttribute("aria-pressed", String(bestsellersActive));
  renderProducts();
}

document.querySelector(".category-list").addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  selectCategory(button.dataset.category);
});
document.querySelector("#offers-feature-button").addEventListener("click", () => {
  selectCategory("Ofertas");
});
document.querySelector("#bestsellers-feature-button").addEventListener("click", () => {
  selectCategory("Mais vendidos");
});

productGrid.addEventListener("click", (event) => {
  const detailTrigger = event.target.closest("[data-product-details]");
  if (detailTrigger) {
    openProductDetails(Number(detailTrigger.dataset.productDetails), detailTrigger);
    return;
  }

  const buyNowButton = event.target.closest("[data-buy-now]");
  if (buyNowButton) {
    buyProductDirectly(Number(buyNowButton.dataset.buyNow));
    return;
  }

  const button = event.target.closest("[data-add-to-cart]");
  if (!button) return;

  const productId = Number(button.dataset.addToCart);
  const product = products.find((item) => item.id === productId);
  if (!product) {
    throw new Error(`Produto não encontrado: ${productId}`);
  }
  if (product.stock <= (cart[productId] || 0)) return;
  cart[productId] = (cart[productId] || 0) + 1;
  if (cartBeforeDirectPurchase === null) saveCart();
  renderCart();
  renderProducts();
  showCartAddedAnimation(productId);
});

productDetailDialog.addEventListener("click", (event) => {
  if (event.target.closest("#product-detail-close")) {
    closeProductDetails();
    return;
  }

  if (activeDetailProductId === null) return;
  if (event.target.closest("#product-detail-add")) {
    const productId = activeDetailProductId;
    const product = products.find((item) => item.id === productId);
    if (!product || product.stock <= (cart[productId] || 0)) return;
    cart[productId] = (cart[productId] || 0) + 1;
    if (cartBeforeDirectPurchase === null) saveCart();
    renderCart();
    renderProducts();
    showCartAddedAnimation(productId, productDetailAddButton);
    const reachedStockLimit = cart[productId] >= product.stock;
    productDetailAddButton.disabled = reachedStockLimit;
    productDetailAddButton.textContent = reachedStockLimit
      ? "Estoque no carrinho"
      : "Adicionar ao carrinho";
    productDetailAddButton.focus();
    return;
  }

  if (event.target.closest("#product-detail-buy")) {
    const productId = activeDetailProductId;
    closeProductDetails(false);
    buyProductDirectly(productId);
  }
});

productDetailBackdrop.addEventListener("click", (event) => {
  if (event.target === productDetailBackdrop) closeProductDetails();
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
  if (cartBeforeDirectPurchase === null) saveCart();
  renderCart();
  renderProducts();
});

searchInput.addEventListener("input", renderProducts);
document.querySelector("#cart-open").addEventListener("click", openCart);
document.querySelector("#cart-close").addEventListener("click", closeCart);
document.querySelector("#checkout-button").addEventListener("click", startPixPayment);
document.querySelector("#send-order-button").addEventListener("click", sendOrderToWhatsApp);
document.querySelector("#copy-pix-button").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(pixCode.value);
    paymentNotice.textContent = "Código Pix copiado.";
  } catch (error) {
    console.error("Não foi possível copiar o código Pix.", error);
    pixCode.focus();
    pixCode.select();
    paymentNotice.textContent =
      "Não foi possível copiar automaticamente. Selecione e copie o código Pix.";
  }
});
pixQrCode.addEventListener("error", () => {
  paymentNotice.textContent =
    "Não foi possível carregar o QR Code. Você ainda pode copiar o código Pix abaixo.";
});
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    paymentTabWasHidden = !paymentDetails.hidden;
    return;
  }

  if (!paymentTabWasHidden || paymentDetails.hidden) return;
  paymentTabWasHidden = false;
  paymentDetails.classList.remove("return-animation");
  void paymentDetails.offsetWidth;
  paymentDetails.classList.add("return-animation");
});
cartBackdrop.addEventListener("click", (event) => {
  if (event.target === cartBackdrop) closeCart();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !productDetailBackdrop.hidden) {
    closeProductDetails();
    return;
  }
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
