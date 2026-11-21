// Configure os dados da sua loja antes de divulgar o site.
const STORE = {
  name: "ZW Store RN",
  whatsapp: "5584981142531",
  orderEmail: "zwstorern@gmail.com",
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
  // Para reunir opções em um único anúncio, use o mesmo variantGroup e informe variantName
  // em cada opção. Cada opção mantém seu próprio preço, desconto, imagem e estoque.
  // Para adicionar outras fotos, inclua images: ["./foto-extra-1.jpg", "./foto-extra-2.jpg"] no produto.
  // A foto principal continua no campo image; cada lista images pode ter qualquer quantidade de caminhos.
  // Para adicionar vídeos, inclua videos: ["./video.mp4"] no produto; eles aparecem depois das fotos.
  // Edite rating (0 a 5) e purchaseCount em cada produto para mostrar estrelas e vendas.
  // Use null quando ainda não tiver uma avaliação ou quantidade de vendas real.
  // Cadastre avaliações reais na constante PRODUCT_REVIEWS abaixo, usando o ID do produto.
  // Modelos fictícios não entram na nota ou contagem.
  // Edite description em cada produto para mostrar a descricao nos detalhes.
  // O campo reviewCount e opcional.
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
    images: ["./ip12transp.jpg.jpeg", "./ip12transp.jpg.jpeg"],
    videos: [],
    discount: 0,
    description: "Proteja seu iPhone 12 sem esconder sua beleza original! A capinha transparente combina elegância, praticidade e proteção para o dia a dia. Com design leve e discreto, oferece proteção contra arranhões e pequenos impactos, além de proporcionar encaixe perfeito e fácil acesso aos botões e entradas do aparelho. Ideal para quem busca manter o visual original do iPhone com mais segurança e estilo.",
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
    images: [],
    videos: [],
    discount: 0,
    description: "Dê um novo visual ao seu iPhone 13 Pro Max com esta capinha Azul, que combina estilo, elegância e proteção. Com acabamento moderno e design pensado para oferecer praticidade no dia a dia, ajuda a proteger o aparelho contra arranhões e pequenos impactos. Possui encaixe adequado, fácil acesso aos botões e entradas, garantindo conforto e segurança durante o uso. Ideal para quem deseja proteger seu iPhone sem abrir mão do estilo.",
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
    images: [],
    videos: [],
    discount: 0,
    description: "Dê um novo visual ao seu iPhone 13 Pro Max com esta capinha Bege, que combina estilo, elegância e proteção. Com acabamento moderno e design pensado para oferecer praticidade no dia a dia, ajuda a proteger o aparelho contra arranhões e pequenos impactos. Possui encaixe adequado, fácil acesso aos botões e entradas, garantindo conforto e segurança durante o uso. Ideal para quem deseja proteger seu iPhone sem abrir mão do estilo.",
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
    images: [],
    videos: [],
    discount: 0,
    description: "Dê um novo visual ao seu iPhone 13 Pro Max com esta capinha Marrom, que combina estilo, elegância e proteção. Com acabamento moderno e design pensado para oferecer praticidade no dia a dia, ajuda a proteger o aparelho contra arranhões e pequenos impactos. Possui encaixe adequado, fácil acesso aos botões e entradas, garantindo conforto e segurança durante o uso. Ideal para quem deseja proteger seu iPhone sem abrir mão do estilo.",
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
    images: [],
    videos: [],
    discount: 0,
    description: "Dê um novo visual ao seu iPhone 13 Pro Max com esta capinha Verde, que combina estilo, elegância e proteção. Com acabamento moderno e design pensado para oferecer praticidade no dia a dia, ajuda a proteger o aparelho contra arranhões e pequenos impactos. Possui encaixe adequado, fácil acesso aos botões e entradas, garantindo conforto e segurança durante o uso. Ideal para quem deseja proteger seu iPhone sem abrir mão do estilo.",
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
    images: [],
    videos: [],
    discount: 0,
    description: "Dê um novo visual ao seu iPhone 13 Pro Max com esta capinha Preta, que combina estilo, elegância e proteção. Com acabamento moderno e design pensado para oferecer praticidade no dia a dia, ajuda a proteger o aparelho contra arranhões e pequenos impactos. Possui encaixe adequado, fácil acesso aos botões e entradas, garantindo conforto e segurança durante o uso. Ideal para quem deseja proteger seu iPhone sem abrir mão do estilo.",
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
    images: [],
    videos: [],
    discount: 0,
    description: "Proteja seu iPhone 15 sem esconder seu design original! A capinha transparente oferece uma combinação perfeita de elegância, praticidade e proteção para o dia a dia. Com design leve e discreto, ajuda a proteger o aparelho contra arranhões e pequenos impactos, além de proporcionar fácil acesso aos botões e entradas. Ideal para quem deseja manter a aparência original do iPhone com mais segurança e estilo.",
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
    images: [],
    videos: [],
    discount: 0,
    description: "Dê mais estilo ao seu iPhone 12 com esta capinha azul, que combina beleza, praticidade e proteção. Com design moderno e acabamento elegante, ajuda a proteger o aparelho contra arranhões e pequenos impactos do dia a dia. Possui encaixe adequado e permite fácil acesso aos botões e entradas, garantindo conforto durante o uso. Ideal para quem busca proteger seu iPhone com personalidade e estilo.",
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
    images: [],
    videos: [],
    discount: 0,
    description: "Dê um toque de elegância ao seu iPhone 12 com esta capinha na cor bege escuro. Com visual moderno e sofisticado, combina estilo e praticidade para o dia a dia. Ajuda a proteger o aparelho contra arranhões e pequenos impactos, além de oferecer encaixe adequado e fácil acesso aos botões e entradas. Ideal para quem procura proteção, conforto e um visual discreto e elegante para seu iPhone.",
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
    images: [],
    videos: [],
    discount: 0,
    description: "Dê um toque de sofisticação ao seu iPhone 12 com esta capinha marrom. Com design moderno e acabamento elegante, oferece estilo e praticidade para o dia a dia. Ajuda a proteger o aparelho contra arranhões e pequenos impactos, além de proporcionar encaixe adequado e fácil acesso aos botões e entradas. Ideal para quem busca unir proteção, conforto e personalidade em um único acessório.",
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
    images: [],
    videos: [],
    discount: 0,
    description: "Renove o visual do seu iPhone 12 com esta capinha verde, que combina estilo, praticidade e proteção. Com design moderno e acabamento elegante, ajuda a proteger o aparelho contra arranhões e pequenos impactos do dia a dia. Possui encaixe adequado e fácil acesso aos botões e entradas, garantindo conforto e praticidade durante o uso. Ideal para quem deseja proteger seu iPhone com um toque de personalidade e cor.",
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
    images: [],
    videos: [],
    discount: 0,
    description: "Proteja seu iPhone 17 Pro Max sem esconder seu design original! Esta capinha transparente combina elegância, praticidade e proteção para o dia a dia. Com visual discreto e moderno, ajuda a proteger o aparelho contra arranhões e pequenos impactos, mantendo a beleza original do dispositivo em destaque. Possui encaixe adequado e fácil acesso aos botões e entradas, garantindo conforto e praticidade durante o uso. Ideal para quem busca proteção sem abrir mão do estilo.",
  },
  {
    id: 14,
    name: "Kit 4 Pilotos Para Quadro + Apagador",
    variantGroup: "kit-pilotos-quadro",
    variantName: "4 pilotos + apagador",
    category: "Achadinhos",
    price: 39.99,
    stock: 0,
    rating: 4.5,
    purchaseCount: 85,
    label: "kit",
    image: "./kitPilotos.jpg.jpeg",
    images: [],
    videos: [],
    discount: 15,
    description: "Kit completo com 4 pilotos para quadro branco e 1 apagador Masterprint, ideal para escolas, escritórios, professores e uso doméstico. Os pilotos oferecem praticidade na escrita e são perfeitos para anotações, explicações e apresentações. O apagador facilita a remoção da tinta, mantendo o quadro limpo e pronto para usar novamente. Um conjunto prático e econômico para facilitar sua rotina de estudos ou trabalho.",
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
    images: [],
    videos: [],
    discount: 0 ,
    description: "Dê um novo visual ao seu iPhone 11 com esta capinha azul, que combina estilo, praticidade e proteção. Com design moderno e acabamento elegante, ajuda a proteger o aparelho contra arranhões e pequenos impactos do dia a dia. Possui encaixe adequado e fácil acesso aos botões e entradas, garantindo conforto e praticidade durante o uso. Ideal para quem deseja manter seu iPhone protegido com um toque de personalidade.",
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
    images: [],
    videos: [],
    discount: 0,
    description: "Dê um toque de sofisticação ao seu iPhone 11 com esta capinha na cor bege escuro. Com design moderno e acabamento elegante, combina beleza, praticidade e proteção para o dia a dia. Ajuda a proteger o aparelho contra arranhões e pequenos impactos, além de oferecer encaixe adequado e fácil acesso aos botões e entradas. Ideal para quem busca proteger seu iPhone com estilo e elegância.",
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
    images: [],
    videos: [],
    discount: 0,
    description: "Dê um toque de elegância ao seu iPhone 11 com esta capinha marrom. Com design moderno e acabamento sofisticado, oferece estilo e praticidade para o dia a dia. Ajuda a proteger o aparelho contra arranhões e pequenos impactos, além de proporcionar encaixe adequado e fácil acesso aos botões e entradas. Ideal para quem deseja manter seu iPhone protegido com conforto, personalidade e sofisticação.",
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
    images: [],
    videos: [],
    discount: 0,
    description: "Renove o visual do seu iPhone 11 com esta capinha verde, que combina estilo, praticidade e proteção. Com design moderno e acabamento elegante, ajuda a proteger o aparelho contra arranhões e pequenos impactos do dia a dia. Possui encaixe adequado e fácil acesso aos botões e entradas, proporcionando conforto e praticidade durante o uso. Ideal para quem busca proteger seu iPhone com um toque de cor e personalidade.",
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
    images: [],
    videos: [],
    discount: 0,
    description: "Dê mais personalidade ao seu iPhone 11 com esta capinha roxa escura, que combina elegância, estilo e proteção. Com design moderno e acabamento sofisticado, ajuda a proteger o aparelho contra arranhões e pequenos impactos do dia a dia. Possui encaixe adequado e fácil acesso aos botões e entradas, garantindo conforto e praticidade durante o uso. Ideal para quem busca um visual diferenciado sem abrir mão da proteção.",
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
    images: [],
    videos: [],
    discount: 0,
    description: "Proteja seu iPhone 11 sem esconder seu design original! Esta capinha transparente combina praticidade, elegância e proteção para o dia a dia. Com visual leve e discreto, ajuda a proteger o aparelho contra arranhões e pequenos impactos, mantendo a aparência original do iPhone em destaque. Possui encaixe adequado e fácil acesso aos botões e entradas, garantindo conforto e praticidade durante o uso. Ideal para quem busca proteção com simplicidade e estilo.",
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
    images: [],
    videos: [],
    discount: 0,
    description: "",
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
    images: [],
    videos: [],
    discount: 0,
    description: "",
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
    images: [],
    videos: [],
    discount: 0,
    description: "",
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
    images: [],
    videos: [],
    discount: 0,
    description: "",
  },
  {
    id: 25,
    name: "78 Diamantes FF",
    category: "Jogos",
    variantGroup:"ff",
    variantName:"78 Diamantes",
    price: 4,
    stock: 100,
    rating: 4.9,
    purchaseCount: 861,
    reviews: [],
    label: "diamantes",
    image: "./78dimas.jpg.jpeg",
    images: [],
    videos: [],
    discount: 5,
    description: "Adquira 78 diamantes no Free Fire de forma rápida e prática! Ideal para quem deseja comprar itens na loja do jogo, participar de eventos, adquirir skins e aproveitar novas oportunidades dentro do Free Fire. A recarga é realizada diretamente pelo ID do jogador, sem necessidade de fornecer senha ou acesso à sua conta. Garanta seus diamantes e aproveite ainda mais sua experiência no jogo!",
  },
  {
    id: 26,
    name: "120 Diamantes FF",
    category: "Jogos",
    variantGroup:"ff",
    variantName:"120 Diamantes",
    price: 6,
    stock: 100,
    rating: 4.5,
    purchaseCount: 297,
    reviews: [],
    label: "diamantes",
    image: "./120dimas.jpg.jpeg",
    images: [],
    videos: [],
    discount: 10,
    description: "Adquira 120 diamantes no Free Fire de forma rápida e prática! Ideal para quem deseja comprar skins, personagens, itens especiais e aproveitar os eventos disponíveis no jogo. A recarga é realizada diretamente pelo ID do jogador, sem necessidade de fornecer senha ou acesso à sua conta. Garanta seus diamantes e aproveite ainda mais sua experiência no Free Fire!",
  },

{
  id: 27,
  name: "372 Diamantes FF",
  category: "Jogos",
  variantGroup:"ff",
  variantName:"372 Diamantes",
  price: 16,
  stock: 100,
  rating: 4.8,
  purchaseCount: 197,
  reviews: [],
  label: "diamantes",
  image: "./372dimas.jpg.jpeg",
  images: [],
  videos: [],
  discount: 6,
  description: "Adquira 372 diamantes no Free Fire de forma rápida e prática! Aproveite para comprar skins, personagens, pacotes exclusivos e participar dos eventos especiais do jogo. A recarga é realizada diretamente pelo ID do jogador, sem necessidade de fornecer senha ou acesso à sua conta. Garanta seus diamantes e aproveite todas as novidades do Free Fire!",
},
{
  id: 28,
  name: "624 Diamantes FF",
  category: "Jogos",
  variantGroup:"ff",
  variantName:"624 Diamantes",
  price: 25,
  stock: 100,
  rating: 4.0,
  purchaseCount: 951,
  reviews: [],
  label: "diamantes",
  image: "./624dimas.jpg.jpeg",
  images: [],
  videos: [],
  discount: 0,
  description: "Adquira 624 diamantes no Free Fire de forma rápida e prática! Tenha mais possibilidades para aproveitar o jogo, comprar skins, personagens, pacotes especiais e participar de eventos exclusivos. A recarga é realizada diretamente pelo ID do jogador, sem necessidade de fornecer senha ou acesso à sua conta. Garanta seus diamantes e deixe sua experiência no Free Fire ainda melhor!",
},
{
  id: 29,
  name: "1272 Diamantes FF",
  category: "Jogos",
  variantGroup:"ff",
  variantName:"1272 Diamantes",
  price: 50,
  stock: 100,
  rating: 4.0,
  purchaseCount: 51,
  reviews: [],
  label: "diamantes",
  image: "./1272dimas.jpg.jpeg",
  images: [],
  videos: [],
  discount: 0,
  description: "Adquira 1.272 diamantes no Free Fire de forma rápida e prática! Aproveite uma quantidade ainda maior de diamantes para desbloquear skins, personagens, pacotes exclusivos, passes e diversos itens especiais dentro do jogo. A recarga é realizada diretamente pelo ID do jogador, sem necessidade de fornecer senha ou acesso à sua conta. Garanta seus diamantes e aproveite tudo o que o Free Fire tem a oferecer!",
},
{
  id: 30,
  name: "2616 Diamantes FF",
  category: "Jogos",
  variantGroup:"ff",
  variantName:"2616 Diamantes",
  price: 99,
  stock: 100,
  rating: 4.7,
  purchaseCount: 21,
  reviews: [],
  label: "diamantes",
  image: "./2616dimas.jpg.jpeg",
  images: [],
  videos: [],
  discount: 9,
  description: "Adquira 2.616 diamantes no Free Fire de forma rápida e prática! Com essa quantidade, você terá ainda mais liberdade para aproveitar o jogo, adquirir skins, personagens, pacotes especiais, passes e participar de eventos exclusivos. A recarga é realizada diretamente pelo ID do jogador, sem necessidade de fornecer senha ou acesso à sua conta. Garanta seus diamantes e aproveite ao máximo sua experiência no Free Fire!",
},
{
  id: 57,
  name: "6720 Diamantes FF",
  category: "Jogos",
  variantGroup:"ff",
  variantName:"6720 Diamantes",
  price: 235,
  stock: 100,
  rating: 5,
  purchaseCount: 11,
  reviews: [],
  label: "diamantes",
  image: "./6729dimas.jpg.jpeg",
  images: [],
  videos: [],
  discount: 5,
  description: "Adquira 6.720 diamantes no Free Fire de forma rápida e prática! Aproveite uma grande quantidade de diamantes para desbloquear skins raras, personagens, pacotes exclusivos, passes e diversos itens especiais. A recarga é realizada diretamente pelo ID do jogador, sem necessidade de fornecer senha ou acesso à sua conta. Garanta seus diamantes e tenha ainda mais possibilidades para aproveitar tudo o que o Free Fire oferece!",
},
{
  id: 58,
  name: "26880 Diamantes FF",
  category: "Jogos",
  variantGroup:"ff",
  variantName:"26880 Diamantes",
  price: 929,
  stock: 100,
  rating: 4.8,
  purchaseCount: 10,
  reviews: [],
  label: "diamantes",
  image: "./26880dimas.jpg.jpeg",
  images: [],
  videos: [],
  discount: 3,
  description: "Adquira 26.880 diamantes no Free Fire de forma rápida e prática! Com essa quantidade, você terá muitas possibilidades para aproveitar o jogo, adquirir skins exclusivas, personagens, pacotes especiais, passes e participar de diversos eventos. A recarga é realizada diretamente pelo ID do jogador, sem necessidade de fornecer senha ou acesso à sua conta. Garanta seus diamantes e aproveite uma experiência ainda mais completa no Free Fire!",
},
{
  id: 31,
  name: "Conta Blox Fruits | Level 2800 + Godhuman + 2 Frutas Míticas Garantidas + Outros",
  category: "Jogos",
  variantGroup: "CBLF",
  price: 25,
  stock: 15,
  rating: 4.7,
  purchaseCount: 14,
  reviews: [],
  label: "blox-fruits",
  image: "./contas.jpg.jpeg",
  images: [],
  videos: [],
  discount: 20,
  description: "Conta de Blox Fruits nível máximo (2800), ideal para quem deseja começar com vantagem e aproveitar ao máximo o universo do jogo! A conta acompanha Godhuman, 2 frutas míticas garantidas e outros itens e recursos para melhorar sua experiência. Uma ótima opção para jogadores que procuram uma conta avançada, com bastante progresso e diversas possibilidades para explorar, evoluir e participar de batalhas. Adquira sua conta e entre na aventura com muito mais recursos!",
},
{id: 32,
  name: "Conta Blox Fruits | 3-5 Frutas Míticas Garantidas + Level 2800 + Godhuman + Outros",
  category: "Jogos",
  variantGroup: "CBLF",
  price: 35,
  stock: 11,
  rating: 4.5,
  purchaseCount: 29,
  reviews: [],
  label: "blox-fruits",
  image: "./contas.jpg.jpeg",
  images: [],
  videos: [],
  discount: 20,
  description: "Conta de Blox Fruits nível máximo (2800), perfeita para jogadores que desejam começar com muito progresso e recursos! A conta acompanha de 3 a 5 frutas míticas garantidas, estilo de luta Godhuman e outros itens que tornam a experiência ainda mais completa. Ideal para quem gosta de explorar, enfrentar chefes, participar de batalhas PvP e aproveitar tudo o que o jogo oferece. Garanta uma conta avançada e esteja pronto para novas aventuras no Blox Fruits!",
},
{
  id: 33,
  name: "Conta Blox Fruits | 4-6 Frutas Míticas Garantidas + Level 2800 + Godhuman + Outros",
  category: "Jogos",
  variantGroup: "CBLF",
  price: 55,
  stock: 7,
  rating: 4.8,
  purchaseCount: 10,
  reviews: [],
  label: "blox-fruits",
  image: "./contas.jpg.jpeg",
  images: [],
  videos: [],
  discount: 30,
  description: "Conta de Blox Fruits nível máximo (2800), ideal para jogadores que buscam uma experiência avançada e cheia de recursos! A conta acompanha de 4 a 6 frutas míticas garantidas, estilo de luta Godhuman e diversos outros itens para aproveitar ao máximo o jogo. Perfeita para quem gosta de batalhas PvP, exploração, desafios e evolução dentro do universo de Blox Fruits. Comece sua jornada com uma conta avançada e aproveite todas as possibilidades do jogo!",
},
{
  id: 34, 
  name: "Conta Blox Fruits | Level 2800 + Godhuman + Portal + Outros",
  category: "Jogos",
  variantGroup: "Frutas",
  variantName:"Portal",
  price: 15,
  stock: 7,
  rating: 4.5,
  purchaseCount: 23,
  reviews: [],
  label: "blox-fruits",
  image: "./portal.jpg.jpeg",
  images: [],
  videos: [],
  discount: 15,
  description: "Conta de Blox Fruits nível máximo (2800), ideal para jogadores que procuram uma experiência avançada e cheia de possibilidades! A conta acompanha o estilo de luta Godhuman, fruta Portal e outros itens para aproveitar ao máximo o jogo. Perfeita para quem gosta de batalhas PvP, exploração, desafios e aventuras pelos mares. Comece com uma conta já evoluída e aproveite tudo o que Blox Fruits tem a oferecer!",
},
{
  id: 35,
  name: "Conta Blox Fruits | Level 2800 + Godhuman + Lightning (Rumble) + Outros",
  category: "Jogos",
  variantGroup: "Frutas",
  variantName:"Rumble",
  price: 20,
  stock: 3,
  rating: 4.5,
  purchaseCount: 37,
  reviews: [],
  label: "blox-fruits",
  image: "./rumble.jpg.jpeg",
  images: [],
  videos: [],
  discount: 25,
  description: "Conta de Blox Fruits nível máximo (2800), perfeita para jogadores que buscam uma experiência avançada e cheia de recursos! A conta acompanha o estilo de luta Godhuman, fruta Lightning (Rumble) e outros itens para melhorar sua experiência no jogo. Ideal para quem gosta de batalhas PvP, exploração, desafios e combates estratégicos. Comece sua jornada com uma conta evoluída e aproveite todas as possibilidades que Blox Fruits oferece!",
},
{
  id: 36,
  name: "Conta Blox Fruits | Level 2800 + Godhuman + Gás + Outros",
  category: "Jogos",
  variantGroup: "Frutas",
  variantName:"Gás",
  price: 20,
  stock: 2,
  rating: 4.2,
  purchaseCount: 98,
  reviews: [],
  label: "blox-fruits",
  image: "./gas.jpg.jpeg",
  images: [],
  videos: [],
  discount: 25,
  description: "Conta de Blox Fruits nível máximo (2800), ideal para jogadores que desejam começar com bastante progresso e recursos! A conta acompanha o estilo de luta Godhuman, fruta Gás e outros itens para tornar sua experiência ainda mais completa. Perfeita para quem gosta de batalhas PvP, exploração, desafios e combates estratégicos. Aproveite uma conta avançada e esteja pronto para novas aventuras no universo de Blox Fruits!",
},
{
  id: 37,
  name: "💎 CAIXA ROBUX (SORTE🍀) de 1000 até 50.000 Robux! 🔥",
  category: "Jogos",
  price: 25,
  stock: 1000,
  rating: 4.9,
  purchaseCount: 951,
  reviews: [],
  label: "robux",
  image: "./caixarubux.jpg.jpeg",
  images: [],
  videos: [],
  discount: 10,
  description: "🎁 Surpreenda-se com a Caixa Robux da Sorte! 🍀 Uma oportunidade de receber quantidades variadas de Robux, podendo ganhar de 1.000 até 50.000 Robux! Cada caixa reserva uma surpresa diferente, tornando a experiência ainda mais emocionante. Ideal para quem deseja adquirir Robux e aproveitar ainda mais o universo Roblox. Escolha sua caixa, descubra sua sorte e divirta-se! 🔥",
},
{
  id: 38,
  name: "Assinatura Semanal FF (7 dias)",
  variantGroup:"assinatura-ff",
  variantName:"Assinatura Semanal FF (7 dias)",
  category: "Jogos",
  price: 11.50,
  stock: 1000,
  rating: 4.0,
  purchaseCount: 129,
  reviews: [],
  label: "assinatura pelo ID",
  image: "./FF.jpg.jpeg",
  images: [],
  videos: [],
  discount: 10,
  description: "Aproveite a Assinatura Semanal do Free Fire e tenha acesso a benefícios exclusivos durante 7 dias! Receba recompensas especiais, diamantes e vantagens disponíveis no período da assinatura. Ideal para jogadores que desejam aproveitar ainda mais os eventos, adquirir itens e melhorar sua experiência dentro do jogo. Garanta sua assinatura e aproveite todos os benefícios por uma semana!",
},
{
  id: 39,
  name: "Assinatura Mensal FF (30 dias)",
  category: "Jogos",
  variantGroup:"assinatura-ff",
  variantName:"Assinatura Mensal FF (30 dias)",
  price: 52.50,
  stock: 1000,
  rating: 4.0,
  purchaseCount: 124,
  reviews: [],
  label: "assinatura pelo ID",
  image: "./FF.jpg.jpeg",
  images: [],
  videos: [],
  discount: 10,
  description: "",
},
{
  id: 40,
  name: "Semanal Econômica FF (7 dias)",
  category: "Jogos",
  variantGroup: "assinatura-ff",
  variantName: "Semanal Econômica FF (7 dias)",
  price: 2.22,
  stock: 1000,
  rating: 4.0,
  purchaseCount: 210,
  reviews: [],
  label: "assinatura pelo ID",
  image: "./FF.jpg.jpeg",
  images: [],
  videos: [],
  discount: 10,
  description: "",
},
{
  id: 41,
  name: "Passe Booyah FF",
  variantGroup: "passe-booyah",
  variantName: "Passe Booyah FF",
  category: "Jogos",
  price: 15.50,
  stock: 1000,
  rating: 4.5,
  purchaseCount: 10,
  reviews: [],
  label: "envio pelo ID",
  image: "./Passe.jpg.jpeg",
  images: [],
  videos: [],
  discount: 10,
  description: "",
},
{
  id: 42,
  name: "Passe Booyah Premium Plus FF ",
  variantGroup: "passe-booyah",
  variantName: "Passe Booyah Premium Plus FF",
  category: "Jogos",
  price: 45.50,
  stock: 1000,
  rating: 4.8,
  purchaseCount: 8,
  reviews: [],
  label: "envio pelo ID",
  image: "./Passe.jpg.jpeg",
  images: [],
  videos: [],
  discount: 28,
  description: "",
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
  images: [],
  videos: [],
  discount: 0,
  description: "",
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
  images: [],
  videos: [],
  discount: 0,
  description: "",
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
  images: [],
  videos: [],
  discount: 0,
  description: "",
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
  images: [],
  videos: [],
  discount: 0,
  description: "",
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
  images: [],
  videos: [],
  discount: 0,
  description: "",
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
  images: [],
  videos: [],
  discount: 0,
  description: "",
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
  images: [],
  videos: [],
  discount: 0,
  description: "",
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
  images: [],
  videos: [],
  discount: 0,
  description: "",
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
  images: [],
  videos: [],
  discount: 0,
  description: "",
},
{
  id: 53,
  name: "Tapete Mousepad 80x30cm Ilustrações Mangá Monocromático com Efeitos Luminosos Azul Laranja Superfície à Água Setup Gamer",
  variantGroup: "mousepad-80x30",
  variantName: "Gojo",
  category: "Achadinhos",
  price: 100,
  stock: 5,
  rating: 4.5,
  purchaseCount: 100,
  label: "prazo 30 dias",
  image: "./mousepadgojo.jpg.jpeg",
  images: [],
  videos: [],
  discount: 42,
  description: "",
},
{
  id: 54,
  name: "Tapete Mousepad 80x30cm Ilustrações Mangá Monocromático com Efeitos Luminosos Azul Laranja Superfície à Água Setup Gamer",
  variantGroup: "mousepad-80x30",
  variantName: "Bleach",
  category: "Achadinhos",
  price: 100,
  stock: 5,
  rating: 4.7,
  purchaseCount: 100,
  label: "prazo 30 dias",
  image: "./mousepadbleach.jpg.jpeg",
  images: [],
  videos: [],
  discount: 40,
  description: "",
},
{
  id: 55,
  name: "Tapete Mousepad 80x30cm Ilustrações Mangá Monocromático com Efeitos Luminosos Azul Laranja Superfície à Água Setup Gamer",
  variantGroup: "mousepad-80x30",
  variantName: "Sukuna",
  category: "Achadinhos",
  price: 100,
  stock: 5,
  rating: 4.5,
  purchaseCount: 170,
  label: "prazo 30 dias",
  image: "./mousepadsukuna.jpg.jpeg",
  images: [],
  videos: [],
  discount: 45,
  description: "",
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
  images: [],
  videos: [],
  discount: 10,
  description: "",
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
  images: [],
  videos: [],
  discount: 0,
  description: "",
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
  images: [],
  videos: [],
  discount: 25,
  description: "",
},
{
  id: 61,
  name: "Uniwity Mouse Gamer Sem Fio Bluetooth 2.4G RGB Recarregável 1600 DPI Estampado Silencioso para PC NotebookUniwity Mouse Gamer Sem Fio Bluetooth 2.4G RGB Recarregável 1600 DPI Estampado Silencioso para PC Notebook",
  category: ["Ofertas","Achadinhos"],
  variantGroup:"mouses",
  variantName:"Branco",
  price: 139.99,
  stock: 50,
  rating: 4.7,
  purchaseCount: 74,
  label: "Prazo 30 dias",
  image: "./mouseB.jpg",
  images: [],
  videos: [],
  discount: 5,
  description: "",
},
{
  id: 62,
  name: "Uniwity Mouse Gamer Sem Fio Bluetooth 2.4G RGB Recarregável 1600 DPI Estampado Silencioso para PC NotebookUniwity Mouse Gamer Sem Fio Bluetooth 2.4G RGB Recarregável 1600 DPI Estampado Silencioso para PC Notebook",
  category: ["Ofertas","Achadinhos"],
  variantGroup:"mouses",
  variantName:"Preto",
  price: 139.99,
  stock: 50,
  rating: 4.7,
  purchaseCount: 74,
  label: "Prazo 30 dias",
  image: "./mouseP.jpg.jpeg",
  images: [],
  videos: [],
  discount: 10,
  description: "",
},
{
  id: 63,
  name: " Relógio Esporte Led unissex à prova d'agua da moda original watch U9",
  category: "Ofertas",
  variantGroup:"relogios",
  variantName:"Preto",
  price: 59.99,
  stock: 64,
  rating: 4.7,
  purchaseCount: 74,
  label: "Prazo 30 dias",
  image: "./relogioP.jpg.jpeg",
  images: [],
  videos: [],
  discount: 0,
  description: "",
},
{
  id: 64,
  name: " Relógio Esporte Led unissex à prova d'agua da moda original watch U9",
  category: "Ofertas",
  variantGroup:"relogios",
  variantName:"Dourado",
  price: 59.99,
  stock: 64,
  rating: 4.7,
  purchaseCount: 74,
  label: "Prazo 30 dias",
  image: "./relogioD.jpg.jpeg",
  images: [],
  videos: [],
  discount: 0,
  description: "",
},
{
  id: 65,
  name: " Relógio Esporte Led unissex à prova d'agua da moda original watch U9",
  category: "Ofertas",
  variantGroup:"relogios",
  variantName:"Branco",
  price: 59.99,
  stock: 64,
  rating: 4.7,
  purchaseCount: 74,
  label: "Prazo 30 dias",
  image: "./relogioB.jpg.jpeg",
  images: [],
  videos: [],
  discount: 5,
  description: "",
},
{
  id: 66,
  name: "Mouse Fibra De Carbono",
  category: ["Ofertas","Achadinhos"],
  price: 84.21,
  stock: 64,
  rating: 4.7,
  purchaseCount: 74,
  label: "Prazo 30 dias",
  image: "./mouseFDC.jpg.jpeg",
  images: [],
  //videos: ["./mouseFDC.mp4"],
  discount: 5,
  description: "🖱️ Mouse Sem Fio em Fibra de Carbono – Dual Mode. Modernidade, praticidade e desempenho em um único produto! Com design elegante e acabamento em fibra de carbono, é ideal para quem busca conforto e versatilidade no dia a dia. Possui conexão Dual Mode (2.4G e Bluetooth 5.4), DPI ajustável de 800/1200/1600, Polling Rate de até 250Hz, bateria recarregável de 300mAh e sensor Sigma 8650. Acompanha cabo de carregamento, receptor USB e manual do usuário. Ideal para estudos, trabalho e uso cotidiano!",
}
];

const IS_GAMES_STORE = document.body.dataset.catalog === "games";
const PRODUCT_REVIEWS = {
  // Avaliações aprovadas: use o ID do produto como chave.
  1: [
    {
      name: "me*****r",
      rating: 5,
      message: "Produto de alta qualidade e entrega rápida.",
    },
  ],
  7:  [
    {
      name:"f******m" ,
      rating: 5,
      message: "Slk", 
    },
  ],
  21: [
    {
      name: "le*****m",
      rating: 4,
      message: "Ficou ótimo, recomendo muito",
    },
  ],
  37: [
    {
      name: "fa*****o",
      rating: 5,
      message: "Veio 5000 Robux vale muito a pena",
    },
  ],
  
  // Um produto com avaliações cadastradas deixa de exibir os modelos fictícios.
};
const REVIEW_EXAMPLES = [
  {
    name: "Modelo 1",
    rating: 5,
    message: "Exemplo fictício: gostei do produto e ele atendeu às minhas expectativas.",
    isExample: true,
  },
  {
    name: "Modelo 2",
    rating: 4,
    message: "Exemplo fictício: bom produto, com qualidade e preço que valeram a pena.",
    isExample: true,
  },
  {
    name: "Modelo 3",
    rating: 5,
    message: "Exemplo fictício: minha experiência foi positiva. Recomendo conferir os detalhes antes de comprar.",
    isExample: true,
  },
];
const products = allProducts
  .filter((product) => {
    const categories = getProductCategories(product);
    const isGameProduct = categories.includes("jogos");
    return IS_GAMES_STORE
      ? isGameProduct
      : categories.some((category) => category !== "jogos");
  })
  .map((product) => ({
    ...product,
    reviews: PRODUCT_REVIEWS[product.id] ??
      (Array.isArray(product.reviews) && product.reviews.length > 0
        ? product.reviews
        : REVIEW_EXAMPLES.map((review) => ({ ...review }))),
  }));
const GAME_PRODUCT_IDS = {
  "free fire": new Set([25, 26, 27, 28, 29, 30, 38, 39, 40, 41, 42, 57, 58]),
  roblox: new Set([37]),
  "blox fruits": new Set([31, 32, 33, 34, 35, 36]),
};

const productGrid = document.querySelector("#product-grid");
const emptyState = document.querySelector("#empty-state");
const searchInput = document.querySelector("#search");
const setupNotice = document.querySelector("#setup-notice");
const productDetailBackdrop = document.querySelector("#product-detail-backdrop");
const productDetailDialog = document.querySelector("#product-detail-dialog");
const productDetailImage = document.querySelector("#product-detail-image");
const productDetailVideo = document.querySelector("#product-detail-video");
const productDetailImagePrevious = document.querySelector("#product-detail-image-previous");
const productDetailImageNext = document.querySelector("#product-detail-image-next");
const productDetailImageCount = document.querySelector("#product-detail-image-count");
const productDetailThumbnails = document.querySelector("#product-detail-thumbnails");
const productDetailDiscountBadge = document.querySelector("#product-detail-discount-badge");
const productDetailTitle = document.querySelector("#product-detail-title");
const productDetailCategory = document.querySelector("#product-detail-category");
const productDetailPrice = document.querySelector("#product-detail-price");
const productDetailVariants = document.querySelector("#product-detail-variants");
const productDetailDescription = document.querySelector("#product-detail-description");
const productDetailStars = document.querySelector("#product-detail-stars");
const productDetailRating = document.querySelector("#product-detail-rating");
const productDetailPurchases = document.querySelector("#product-detail-purchases");
const productDetailStock = document.querySelector("#product-detail-stock");
const productDetailAddButton = document.querySelector("#product-detail-add");
const productDetailBuyButton = document.querySelector("#product-detail-buy");
const productDetailShareButton = document.querySelector("#product-detail-share");
const productShareStatus = document.querySelector("#product-share-status");
const productShareWhatsapp = document.querySelector("#product-share-whatsapp");
const productShareUrlInput = document.querySelector("#product-share-url");
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
const accountCouponRow = document.querySelector("#account-coupon-row");
const accountCouponLabel = document.querySelector("#account-coupon-label");
const accountCouponDiscount = document.querySelector("#account-coupon-discount");
const cartTitle = document.querySelector("#cart-title");
const checkoutButton = document.querySelector("#checkout-button");
const customerForm = document.querySelector("#customer-form");
const gameCustomerForm = document.querySelector("#game-customer-form");
const freeFireIdField = document.querySelector("#free-fire-id-field");
const freeFireIdInput = document.querySelector("#free-fire-id");
const robloxUsernameField = document.querySelector("#roblox-username-field");
const robloxUsernameInput = document.querySelector("#roblox-username");
const bloxFruitsEmailField = document.querySelector("#blox-fruits-email-field");
const bloxFruitsEmailInput = document.querySelector("#blox-fruits-email");
const paymentDetails = document.querySelector("#payment-details");
const pixAmount = document.querySelector("#pix-amount");
const pixCode = document.querySelector("#pix-code");
const pixQrCode = document.querySelector("#pix-qr-code");
const paymentNotice = document.querySelector("#payment-notice");
const sendOrderButton = document.querySelector("#send-order-button");
const subscriptionPaymentPanel = document.querySelector("#subscription-payment");
const subscriptionPixQr = document.querySelector("#subscription-pix-qr");
const subscriptionPixCode = document.querySelector("#subscription-pix-code");
const subscriptionPaymentStatus = document.querySelector("#subscription-payment-status");
const subscriptionSendProof = document.querySelector("#subscription-send-proof");
const ORDER_SEND_CLICK_LIMIT = 5;
const CART_STORAGE_KEY = IS_GAMES_STORE
  ? "zw-store-rn-games-cart"
  : "nexora-cia-cart";
const CUSTOMER_STORAGE_KEY = "zw-store-rn-customer";
const GAME_CUSTOMER_STORAGE_KEY = "zw-store-rn-games-customer";
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
let productDetailMedia = [];
let productDetailImageIndex = 0;
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

function getProductCategories(product) {
  const categories = Array.isArray(product.category)
    ? product.category
    : [product.category];
  return categories.map(normalizeCategory).filter(Boolean);
}

function matchesCategory(productCategory, selectedCategory) {
  const productCategories = (Array.isArray(productCategory)
    ? productCategory
    : [productCategory]).map(normalizeCategory);
  const normalizedSelectedCategory = normalizeCategory(selectedCategory);

  if (normalizedSelectedCategory === "todos") {
    return IS_GAMES_STORE
      ? productCategories.includes("jogos")
      : productCategories.some((category) => !HIDDEN_FROM_ALL_PRODUCTS.has(category));
  }

  const aliases = CATEGORY_ALIASES[normalizedSelectedCategory] || new Set([normalizedSelectedCategory]);
  return productCategories.some((category) => aliases.has(category));
}

function getGameName(product) {
  if (!IS_GAMES_STORE) {
    return (Array.isArray(product.category) ? product.category : [product.category])
      .join(" · ");
  }
  return Object.entries(GAME_PRODUCT_IDS).find(([, productIds]) =>
    productIds.has(product.id),
  )?.[0]
    .replace(/\b\w/g, (letter) => letter.toLocaleUpperCase("pt-BR")) || "Jogos";
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

function getProductVariants(product) {
  if (!product.variantGroup) return [product];
  return products.filter((item) => item.variantGroup === product.variantGroup);
}

function getProductImages(product) {
  const additionalImages = Array.isArray(product.images)
    ? product.images
    : [];
  return [product.image, ...additionalImages]
    .filter((image) => typeof image === "string" && image.trim())
    .map((image) => image.trim());
}

function getProductMedia(product) {
  const images = getProductImages(product).map((src) => ({ type: "image", src }));
  const videos = Array.isArray(product.videos)
    ? product.videos
        .filter((src) => typeof src === "string" && src.trim())
        .map((src) => ({ type: "video", src: src.trim() }))
    : [];
  return [...images, ...videos];
}

function getDisplayProductName(product) {
  return product.variantName
    ? `${product.name} — ${product.variantName}`
    : product.name;
}

function getCatalogProducts() {
  const seenGroups = new Set();
  return products.filter((product) => {
    const group = product.variantGroup || `product-${product.id}`;
    if (seenGroups.has(group)) return false;
    seenGroups.add(group);
    return true;
  });
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

function prepareSubscriptionPayment(user) {
  if (!subscriptionPaymentPanel || !subscriptionPixQr || !subscriptionPixCode) {
    return false;
  }
  if (!user?.email || !STORE.orderEmail || !STORE.pixKey) {
    subscriptionPaymentStatus.textContent =
      "Não foi possível preparar o Pix. Confira os dados de pagamento da loja.";
    subscriptionPaymentPanel.hidden = false;
    return false;
  }

  try {
    const amount = 19.99;
    const payload = createPixPayload(amount);
    const subject = "Assinatura mensal ZW Store RN";
    const body = [
      "Olá! Estou enviando o comprovante da assinatura mensal da ZW Store RN.",
      "",
      "Valor: R$ 19,99",
      `Nome: ${user.name}`,
      `E-mail da conta: ${user.email}`,
      "",
      "O comprovante será anexado manualmente a este e-mail.",
    ].join("\n");
    subscriptionPixCode.value = payload;
    subscriptionPixQr.src =
      `https://api.qrserver.com/v1/create-qr-code/?size=240x240&format=png&data=${encodeURIComponent(payload)}`;
    subscriptionPixQr.alt = "QR Code Pix da assinatura mensal de R$ 19,99";
    subscriptionSendProof.href =
      `mailto:${STORE.orderEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    subscriptionPaymentStatus.textContent =
      "Após pagar, abra o e-mail, anexe o comprovante e aguarde a conferência manual. O envio deste e-mail não confirma o pagamento.";
    subscriptionPaymentPanel.hidden = false;
    subscriptionPaymentPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
    return true;
  } catch (error) {
    console.error("Não foi possível preparar o Pix da assinatura.", error);
    subscriptionPaymentStatus.textContent =
      "Não foi possível preparar o Pix da assinatura. Confira a configuração Pix da loja.";
    subscriptionPaymentPanel.hidden = false;
    return false;
  }
}

window.ZWStorePayments = {
  prepareSubscriptionPayment,
};

function renderProducts() {
  const searchTerm = searchInput.value.trim().toLocaleLowerCase("pt-BR");
  const isTopSellers = normalizeCategory(activeCategory) === "mais vendidos";
  const catalogProducts = getCatalogProducts();
  const topSellers = isTopSellers
    ? catalogProducts
        .filter(
          (product) =>
            Number.isSafeInteger(product.purchaseCount) &&
            product.purchaseCount > 0,
        )
        .sort((a, b) => b.purchaseCount - a.purchaseCount)
        .slice(0, 10)
    : catalogProducts;
  const visibleProducts = topSellers.filter((product) => {
    const variants = getProductVariants(product);
    const selectedGameIds = GAME_PRODUCT_IDS[normalizeCategory(activeCategory)];
    const matchesCategoryFilter = isTopSellers
      ? true
      : selectedGameIds
        ? selectedGameIds.has(product.id)
        : normalizeCategory(activeCategory) === "ofertas"
        ? variants.some((variant) => matchesCategory(variant.category, "Ofertas")) ||
          variants.some((variant) => getDiscountPercent(variant) >= 45)
        : variants.some((variant) =>
            matchesCategory(variant.category, activeCategory),
          );
    const matchesSearch = `${product.name} ${variants.map((variant) => variant.variantName || "").join(" ")} ${product.category} ${getGameName(product)}`
      .toLocaleLowerCase("pt-BR")
      .includes(searchTerm);
    return matchesCategoryFilter && matchesSearch;
  });

  productGrid.innerHTML = visibleProducts
    .map(
      (product) => {
        const variants = getProductVariants(product);
        const hasVariants = variants.length > 1;
        const availableVariants = variants.filter((variant) => variant.stock > 0);
        const outOfStock = availableVariants.length === 0;
        const discountPercent = getDiscountPercent(product);
        const discountedPrice = getDiscountedPrice(product);
        const priceVariants = availableVariants.length ? availableVariants : variants;
        const bestVariantPrice = Math.min(...priceVariants.map(getDiscountedPrice));
        const maxVariantDiscount = Math.max(...variants.map(getDiscountPercent));
        const productReviews = Array.isArray(product.reviews)
          ? product.reviews.filter(
              (review) =>
               !review.isExample &&
               Number.isInteger(review.rating) &&
                review.rating >= 1 &&
                review.rating <= 5,
            )
          : [];
        const rating = product.reviewCount > 0 && Number.isFinite(product.rating)
          ? product.rating
          : productReviews.length
          ? productReviews.reduce((sum, review) => sum + review.rating, 0) /
            productReviews.length
          : Number.isFinite(product.rating)
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
              <img src="${getProductImages(product)[0] || ""}" alt="" loading="lazy" />
            </button>
            <button class="product-image-share" type="button" data-share-product="${product.id}" aria-label="Compartilhar ${getDisplayProductName(product)}" title="Ícone de compartilhamento de Dave Gandy (Icon-Icons.com)"><svg class="share-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 12 16 7M8 12l8 5" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="6" r="3" /><circle cx="18" cy="18" r="3" /></svg></button>
            <span class="product-label">${product.label}</span>
            ${hasVariants ? maxVariantDiscount ? `<span class="product-discount-badge">ATÉ ${maxVariantDiscount}% OFF</span>` : "" : discountPercent ? `<span class="product-discount-badge">${discountPercent}% OFF</span>` : ""}
          </div>
          <div class="product-details">
            <span class="product-category">${getGameName(product)}</span>
            <h3 class="product-title"><button class="product-detail-title-trigger" type="button" data-product-details="${product.id}">${product.name}${outOfStock ? " (Esgotado)" : ""}</button></h3>
            <p class="product-stock${outOfStock ? " product-stock-empty" : ""}">
              ${outOfStock ? "Esgotado" : hasVariants ? `${availableVariants.length} opções disponíveis` : `Estoque: ${product.stock} ${product.stock === 1 ? "unidade" : "unidades"}`}
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
                ${hasVariants ? `<span class="product-price">${formatPrice(bestVariantPrice)}</span>` : discountPercent ? `<span class="product-original-price">${formatPrice(product.price)}</span>` : ""}
                ${hasVariants ? "" : `<span class="product-price">${formatPrice(discountedPrice)}</span>`}
              </div>
              <div class="product-actions">
                ${hasVariants
                  ? `<button class="order-button" type="button" data-product-details="${product.id}" ${outOfStock ? "disabled" : ""}>${outOfStock ? "Esgotado" : "Escolher opção"}</button>`
                  : `<button class="order-button${outOfStock || (cart[product.id] || 0) >= product.stock ? " out-of-stock" : ""}" type="button" data-add-to-cart="${product.id}" ${outOfStock || (cart[product.id] || 0) >= product.stock ? "disabled" : ""}>
                    ${outOfStock ? "Esgotado" : (cart[product.id] || 0) >= product.stock ? "Estoque no carrinho" : "Adicionar ao carrinho +"}
                  </button>
                  <button class="direct-buy-button" type="button" data-buy-now="${product.id}" ${outOfStock ? "disabled" : ""}>
                    ${outOfStock ? "Esgotado" : "Comprar"}
                  </button>`}
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

function updateGameCustomerFields(order) {
  if (!gameCustomerForm) return;

  const gameNames = new Set(
    (order?.entries || []).flatMap(({ product }) =>
      Object.entries(GAME_PRODUCT_IDS)
        .filter(([, productIds]) => productIds.has(product.id))
        .map(([gameName]) => gameName),
    ),
  );
  const needsFreeFireId = gameNames.has("free fire");
  const needsRobloxUsername = gameNames.has("roblox");
  const needsBloxFruitsEmail = gameNames.has("blox fruits");

  freeFireIdField.hidden = !needsFreeFireId;
  freeFireIdInput.required = needsFreeFireId;
  robloxUsernameField.hidden = !needsRobloxUsername;
  robloxUsernameInput.required = needsRobloxUsername;
  bloxFruitsEmailField.hidden = !needsBloxFruitsEmail;
  bloxFruitsEmailInput.required = needsBloxFruitsEmail;
  gameCustomerForm.hidden =
    !needsFreeFireId && !needsRobloxUsername && !needsBloxFruitsEmail;
}

function restoreGameCustomerDetails() {
  if (!gameCustomerForm) return;

  try {
    const savedDetails = JSON.parse(
      localStorage.getItem(GAME_CUSTOMER_STORAGE_KEY) || "null",
    );
    if (!savedDetails || typeof savedDetails !== "object" || Array.isArray(savedDetails)) {
      return;
    }

    if (typeof savedDetails.freeFireId === "string") {
      freeFireIdInput.value = savedDetails.freeFireId;
    }
    if (typeof savedDetails.robloxUsername === "string") {
      robloxUsernameInput.value = savedDetails.robloxUsername;
    }
    if (typeof savedDetails.bloxFruitsEmail === "string") {
      bloxFruitsEmailInput.value = savedDetails.bloxFruitsEmail;
    }
  } catch (error) {
    console.error("Não foi possível carregar os dados de jogo salvos.", error);
    setupNotice.textContent =
      "Não foi possível carregar os dados de jogo salvos neste navegador. Confira o armazenamento do navegador.";
    setupNotice.hidden = false;
  }
}

function saveGameCustomerDetails() {
  if (!gameCustomerForm || gameCustomerForm.hidden) return true;
  if (!gameCustomerForm.reportValidity()) return false;

  try {
    const savedDetails = {
      freeFireId: freeFireIdInput.value.trim(),
      robloxUsername: robloxUsernameInput.value.trim(),
      bloxFruitsEmail: bloxFruitsEmailInput.value.trim(),
    };
    localStorage.setItem(GAME_CUSTOMER_STORAGE_KEY, JSON.stringify(savedDetails));
    setupNotice.hidden = true;
    return true;
  } catch (error) {
    console.error("Não foi possível salvar os dados de jogo neste navegador.", error);
    setupNotice.textContent =
      "Não foi possível salvar os dados do jogo neste navegador. Verifique as configurações de armazenamento e tente novamente.";
    setupNotice.hidden = false;
    return false;
  }
}

function restoreCustomerDetails() {
  if (!customerForm) return;

  try {
    const savedDetails = JSON.parse(localStorage.getItem(CUSTOMER_STORAGE_KEY) || "null");
    if (!savedDetails || typeof savedDetails !== "object" || Array.isArray(savedDetails)) {
      return;
    }

    for (const [name, value] of Object.entries(savedDetails)) {
      const field = customerForm.elements.namedItem(name);
      if (field instanceof HTMLInputElement && typeof value === "string") {
        field.value = value;
      }
    }
  } catch (error) {
    console.error("Não foi possível carregar os dados do cliente salvos.", error);
    setupNotice.textContent =
      "Não foi possível carregar os dados salvos neste navegador. Confira o armazenamento do navegador.";
    setupNotice.hidden = false;
  }
}

function saveCustomerDetails() {
  if (!customerForm) return true;

  try {
    const details = Object.fromEntries(
      [...new FormData(customerForm)].map(([name, value]) => [
        name,
        String(value).trim(),
      ]),
    );
    localStorage.setItem(CUSTOMER_STORAGE_KEY, JSON.stringify(details));
    setupNotice.hidden = true;
    return true;
  } catch (error) {
    console.error("Não foi possível salvar os dados do cliente neste navegador.", error);
    setupNotice.textContent =
      "Não foi possível salvar seus dados neste navegador. Verifique as configurações de armazenamento e tente novamente.";
    setupNotice.hidden = false;
    return false;
  }
}

function renderCart() {
  const isDirectPurchase = cartBeforeDirectPurchase !== null;
  cartTitle.textContent = isDirectPurchase ? "Compra direta" : "Meu carrinho";
  checkoutButton.textContent = IS_GAMES_STORE
    ? isDirectPurchase ? "Gerar Pix do pedido" : "Gerar Pix para pagar"
    : customerForm.hidden
      ? "Comprar"
      : isDirectPurchase ? "Salvar dados e gerar Pix do pedido" : "Salvar dados e gerar Pix";
  paymentConfirmationAttempts = 0;
  paymentDetails.hidden = true;
  sendOrderButton.hidden = true;
  sendOrderButton.textContent = "Já paguei — enviar pedido por e-mail";
  paymentNotice.textContent = "";
  const entries = Object.entries(cart)
    .map(([id, quantity]) => ({
      product: products.find((item) => item.id === Number(id)),
      quantity,
    }))
    .filter((entry) => entry.product);
  const itemCount = entries.reduce((sum, entry) => sum + entry.quantity, 0);
  const order = getOrderDetails();

  updateGameCustomerFields(order);
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
    if (accountCouponRow) accountCouponRow.hidden = !order.coupon;
    if (order.coupon && accountCouponRow) {
      accountCouponLabel.textContent =
        `Cupom ${order.coupon.percent}%${order.couponReason ? ` · ${order.couponReason}` : order.couponDiscountCents === 0 ? " · adicione produtos elegíveis" : ""}`;
      accountCouponDiscount.textContent =
        order.couponDiscountCents > 0
          ? `− ${formatPrice(order.couponDiscountCents / 100)}`
          : formatPrice(0);
    }
  } else {
    cartDiscountHint.hidden = true;
    if (accountCouponRow) accountCouponRow.hidden = true;
  }
  cartItems.innerHTML = entries
    .map(
      ({ product, quantity }) => {
        const discountPercent = getDiscountPercent(product);
        const discountedPrice = getDiscountedPrice(product);
        return `
        <article class="cart-item">
          <img src="${getProductImages(product)[0] || ""}" alt="" />
          <div class="cart-item-info">
            <h3>${getDisplayProductName(product)}</h3>
            <span>${discountPercent ? `<s>${formatPrice(product.price)}</s> ${formatPrice(discountedPrice)} cada · ${discountPercent}% OFF` : `${formatPrice(product.price)} cada`}</span>
            <div class="quantity-controls" aria-label="Quantidade de ${getDisplayProductName(product)}">
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

function openProductDetails(productId, trigger, preferredVariantId = null) {
  const product = products.find((item) => item.id === productId);
  if (!product) {
    throw new Error(`Produto não encontrado: ${productId}`);
  }

  const variants = getProductVariants(product);
  const initialVariant =
    variants.find((variant) => variant.id === preferredVariantId) ||
    variants.find((variant) => variant.stock > 0) ||
    product;
  activeDetailProductId = initialVariant.id;
  productDetailTrigger = trigger;
  productDetailVariants.hidden = variants.length < 2;
  productDetailVariants.innerHTML = variants.length > 1
    ? `<label for="product-detail-variant-select">Escolha a opção</label><select id="product-detail-variant-select" aria-label="Escolha a opção">${variants.map((variant) => `<option value="${variant.id}" ${variant.id === initialVariant.id ? "selected" : ""} ${variant.stock <= 0 && variant.id !== initialVariant.id ? "disabled" : ""}>${variant.variantName || variant.name}${variant.stock <= 0 ? " (Esgotado)" : ""}</option>`).join("")}</select>`
    : "";
  renderProductDetail(initialVariant);
  productDetailBackdrop.hidden = false;
  document.querySelector("#product-detail-close").focus();
}

function renderProductDetail(product) {
  activeDetailProductId = product.id;
  const discountPercent = getDiscountPercent(product);
  const productReviews = Array.isArray(product.reviews)
    ? product.reviews.filter(
        (review) =>
         !review.isExample &&
         Number.isInteger(review.rating) &&
          review.rating >= 1 &&
          review.rating <= 5,
      )
    : [];
  const rating = product.reviewCount > 0 && Number.isFinite(product.rating)
    ? product.rating
    : productReviews.length
    ? productReviews.reduce((sum, review) => sum + review.rating, 0) /
      productReviews.length
    : Number.isFinite(product.rating)
    ? Math.min(5, Math.max(0, product.rating))
    : null;
  const reviewCount = product.reviewCount > 0 && Number.isSafeInteger(product.reviewCount)
    ? product.reviewCount
    : productReviews.length || (Number.isSafeInteger(product.reviewCount)
    ? Math.max(0, product.reviewCount)
    : null);
  const purchaseCount = Number.isSafeInteger(product.purchaseCount)
    ? Math.max(0, product.purchaseCount)
    : null;

  renderProductGallery(product);
  productDetailDiscountBadge.hidden = discountPercent <= 0;
  productDetailDiscountBadge.textContent = discountPercent
    ? `${discountPercent}% OFF`
    : "";
  productDetailTitle.textContent = product.name;
  productDetailShareButton.dataset.productId = String(product.id);
  productShareStatus.hidden = true;
  productShareWhatsapp.hidden = true;
  productShareUrlInput.hidden = true;
  productDetailCategory.textContent = getGameName(product);
  productDetailPrice.innerHTML = discountPercent
    ? `<s>${formatPrice(product.price)}</s><strong>${formatPrice(getDiscountedPrice(product))}</strong>`
    : `<strong>${formatPrice(product.price)}</strong>`;
  productDetailDescription.textContent =
    product.description ||
    `${getDisplayProductName(product)}. Produto da categoria ${product.category}. Confira o modelo e os detalhes na imagem antes de comprar.`;
  productDetailStars.textContent = rating === null
    ? "☆☆☆☆☆"
    : `${"★".repeat(Math.round(rating))}${"☆".repeat(5 - Math.round(rating))}`;
  productDetailRating.textContent = rating === null
    ? "Sem avaliações"
    : `${rating.toLocaleString("pt-BR", { maximumFractionDigits: 1 })}/5${reviewCount ? ` (${reviewCount} avaliações)` : ""}`;
  productDetailPurchases.textContent =
    purchaseCount === null ? "Vendas não informadas" : `${purchaseCount} vendidos`;
  productDetailStock.textContent =
    product.stock <= 0
      ? "Esgotado"
      : `${product.stock} ${product.stock === 1 ? "unidade" : "unidades"}`;
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
  document.dispatchEvent(
    new CustomEvent("product-detail-opened", {
      detail: {
        productId: product.id,
        productName: product.name,
        reviews: Array.isArray(product.reviews) ? product.reviews : [],
      },
    }),
  );
}

function getProductShareUrl(productId) {
  const shareUrl = new URL(window.location.href);
  shareUrl.searchParams.set("produto", String(productId));
  shareUrl.hash = "";
  return shareUrl.toString();
}

async function shareProduct(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) {
    throw new Error(`Produto não encontrado: ${productId}`);
  }

  const url = getProductShareUrl(product.id);
  const shareData = {
    title: product.name,
    text: `${product.name} — ${formatPrice(getDiscountedPrice(product))}`,
    url,
  };

  if (typeof navigator.share === "function") {
    try {
      await navigator.share(shareData);
      return;
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return;
      console.error("Não foi possível abrir o compartilhamento do produto.", error);
    }
  }

  productShareWhatsapp.href =
    `https://wa.me/?text=${encodeURIComponent(`${shareData.text} ${url}`)}`;
  productShareWhatsapp.hidden = false;
  productShareUrlInput.value = url;
  productShareUrlInput.hidden = false;
  try {
    await navigator.clipboard.writeText(url);
    productShareStatus.textContent =
      "Link copiado. Cole no WhatsApp, Instagram ou onde quiser.";
  } catch (error) {
    console.error("Não foi possível copiar o link do produto.", error);
    productShareStatus.textContent =
      "Não foi possível copiar o link automaticamente. Selecione e copie o endereço abaixo ou compartilhe pelo WhatsApp.";
    productShareUrlInput.focus();
    productShareUrlInput.select();
  }
  productShareStatus.hidden = false;
}

function renderProductGallery(product) {
  productDetailMedia = getProductMedia(product);
  productDetailImageIndex = 0;
  const hasMultipleMedia = productDetailMedia.length > 1;
  productDetailImagePrevious.hidden = !hasMultipleMedia;
  productDetailImageNext.hidden = !hasMultipleMedia;
  productDetailImageCount.hidden = !hasMultipleMedia;
  productDetailThumbnails.hidden = !hasMultipleMedia;
  productDetailThumbnails.replaceChildren();

  if (hasMultipleMedia) {
    productDetailMedia.forEach((media, index) => {
      const thumbnail = document.createElement("button");
      thumbnail.type = "button";
      thumbnail.className = "product-detail-thumbnail";
      thumbnail.id = `product-detail-${media.type}-thumb-${index + 1}`;
      thumbnail.dataset.galleryIndex = String(index);
      thumbnail.setAttribute(
        "aria-label",
        `Mostrar ${media.type === "video" ? "vídeo" : "foto"} ${index + 1}`,
      );
      thumbnail.setAttribute("aria-pressed", String(index === productDetailImageIndex));
      if (media.type === "video") {
        const videoIcon = document.createElement("span");
        videoIcon.className = "product-detail-thumbnail-video";
        videoIcon.setAttribute("aria-hidden", "true");
        videoIcon.textContent = "▶";
        thumbnail.append(videoIcon);
      } else {
        const thumbnailImage = document.createElement("img");
        thumbnailImage.src = media.src;
        thumbnailImage.alt = "";
        thumbnailImage.loading = "lazy";
        thumbnail.append(thumbnailImage);
      }
      productDetailThumbnails.append(thumbnail);
    });
  }

  updateProductGalleryImage(product);
}

function updateProductGalleryImage(product) {
  const media = productDetailMedia[productDetailImageIndex];
  if (!media) return;
  const isVideo = media.type === "video";
  productDetailVideo.pause();
  productDetailVideo.hidden = !isVideo;
  productDetailImage.hidden = isVideo;
  if (isVideo) {
    productDetailVideo.src = media.src;
    productDetailVideo.setAttribute(
      "aria-label",
      `${getDisplayProductName(product)} — vídeo ${productDetailImageIndex + 1}`,
    );
    productDetailVideo.load();
  } else {
    productDetailVideo.removeAttribute("src");
    productDetailVideo.load();
    productDetailImage.src = media.src;
    productDetailImage.alt =
      `${getDisplayProductName(product)} — foto ${productDetailImageIndex + 1}`;
  }
  productDetailImage.dataset.imageId = String(productDetailImageIndex + 1);
  productDetailImageCount.textContent =
    `${isVideo ? "Vídeo" : "Foto"} ${productDetailImageIndex + 1} de ${productDetailMedia.length}`;
  productDetailThumbnails
    .querySelectorAll("[data-gallery-index]")
    .forEach((thumbnail, index) => {
      thumbnail.setAttribute("aria-pressed", String(index === productDetailImageIndex));
    });
}

function selectProductGalleryMedia(index) {
  if (!productDetailMedia.length || activeDetailProductId === null) return;
  productDetailImageIndex =
    (index + productDetailMedia.length) % productDetailMedia.length;
  const product = products.find((item) => item.id === activeDetailProductId);
  if (!product) {
    throw new Error(`Produto não encontrado: ${activeDetailProductId}`);
  }
  updateProductGalleryImage(product);
}

function closeProductDetails(restoreFocus = true) {
  productDetailVideo.pause();
  productDetailVideo.removeAttribute("src");
  productDetailVideo.load();
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
  const couponResult = window.ZWStoreAccount?.getCouponAdjustment(
    eligibleSubtotalCents,
    cartDiscountCents,
  );
  const couponDiscountCents = couponResult?.discountCents || 0;
  const totalCents =
    gamesSubtotalCents + eligibleSubtotalCents - cartDiscountCents - couponDiscountCents;
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
    coupon: couponResult?.coupon || null,
    couponDiscountCents,
    couponReason: couponResult?.reason || "",
  };
}

function startPixPayment() {
  if (customerForm && !customerForm.reportValidity()) return;
  if (!saveCustomerDetails()) return;
  if (!saveGameCustomerDetails()) return;

  const order = getOrderDetails();
  if (!order) return;
  if (!STORE.orderEmail || !STORE.pixKey) {
    setupNotice.textContent =
      "Para finalizar o pedido, preencha o e-mail da loja e os dados Pix no início do arquivo app.js.";
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

function sendOrderByEmail() {
  if (paymentDetails.hidden || !pixCode.value) return;
  if (customerForm && !customerForm.reportValidity()) return;
  if (!saveCustomerDetails()) return;
  if (!saveGameCustomerDetails()) return;

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
  if (
    order.couponDiscountCents > 0 &&
    !window.ZWStoreAccount?.consumeCoupon(order.coupon.id)
  ) {
    paymentNotice.textContent =
      "Não foi possível validar ou marcar o cupom como usado. Atualize o carrinho e tente novamente.";
    paymentDetails.hidden = false;
    return;
  }
  const savings = order.subtotalCents - order.totalCents;

  const message = [
    `Olá! Quero fazer um pedido na ${STORE.name}:`,
    ...(customerForm
      ? [
          "",
          "Dados do cliente:",
          `Nome completo: ${customerForm.elements.namedItem("name").value.trim()}`,
          `CPF: ${customerForm.elements.namedItem("cpf").value.trim()}`,
          `CEP: ${customerForm.elements.namedItem("cep").value.trim()}`,
          `Rua: ${customerForm.elements.namedItem("street").value.trim()}`,
          `N° de casa: ${customerForm.elements.namedItem("houseNumber").value.trim()}`,
          `E-mail: ${customerForm.elements.namedItem("email").value.trim()}`,
        ]
      : []),
    ...(gameCustomerForm && !gameCustomerForm.hidden
      ? [
          "",
          "Dados do jogo:",
          ...(freeFireIdInput.required
            ? [`ID do Free Fire: ${freeFireIdInput.value.trim()}`]
            : []),
          ...(robloxUsernameInput.required
            ? [`Nome de usuário do Roblox: ${robloxUsernameInput.value.trim()}`]
            : []),
          ...(bloxFruitsEmailInput.required
            ? [`E-mail para receber as informações da conta Blox Fruits: ${bloxFruitsEmailInput.value.trim()}`]
            : []),
        ]
      : []),
    "",
    ...order.entries.map(
      ({ product, quantity }) =>
        `• ${getDisplayProductName(product)} — ${quantity} x ${formatPrice(getDiscountedPrice(product))}${getDiscountPercent(product) ? ` (${getDiscountPercent(product)}% OFF)` : ""} = ${formatPrice(getDiscountedPrice(product) * quantity)}`,
    ),
    "",
    `Subtotal: ${formatPrice(order.subtotal)}`,
    ...(order.productSavingsCents > 0
      ? [`Descontos nos produtos: − ${formatPrice(order.productSavingsCents / 100)}`]
      : []),
    ...(order.cartDiscountCents > 0
      ? [`Desconto no carrinho (${order.cartDiscountPercent}%): − ${formatPrice(order.cartDiscountCents / 100)}`]
      : []),
    ...(order.couponDiscountCents > 0
      ? [`Cupom ${order.coupon.code} (${order.coupon.percent}%): − ${formatPrice(order.couponDiscountCents / 100)}`]
      : []),
    ...(savings > 0
      ? [`Total de descontos: − ${formatPrice(savings / 100)}`]
      : []),
    `Total dos produtos: ${formatPrice(order.total)}`,
  ].join("\n");
  const customerName = customerForm
    ? customerForm.elements.namedItem("name").value.trim()
    : "cliente";
  const emailSubject = `Pedido ${STORE.name} — ${customerName}`;
  const mailtoLink = document.createElement("a");
  mailtoLink.href =
    `mailto:${STORE.orderEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(message)}`;
  mailtoLink.hidden = true;
  document.body.append(mailtoLink);
  mailtoLink.click();
  mailtoLink.remove();

  const gmailComposeUrl = new URL("https://mail.google.com/mail/");
  gmailComposeUrl.search = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: STORE.orderEmail,
    su: emailSubject,
    body: message,
  }).toString();
  paymentNotice.textContent =
    "Seu app de e-mail deve abrir com o pedido pronto. Se não abrir, ";
  const gmailFallback = document.createElement("a");
  gmailFallback.className = "review-email-fallback";
  gmailFallback.href = gmailComposeUrl.toString();
  gmailFallback.target = "_blank";
  gmailFallback.rel = "noopener noreferrer";
  gmailFallback.textContent = "compor pelo Gmail";
  paymentNotice.append(gmailFallback);
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
  const shareTrigger = event.target.closest("[data-share-product]");
  if (shareTrigger) {
    const productId = Number(shareTrigger.dataset.shareProduct);
    openProductDetails(productId, shareTrigger, productId);
    shareProduct(productId);
    return;
  }

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

  if (event.target.closest("#product-detail-share")) {
    shareProduct(activeDetailProductId);
    return;
  }

  if (event.target.closest("#product-detail-image-previous")) {
    selectProductGalleryMedia(productDetailImageIndex - 1);
    return;
  }

  if (event.target.closest("#product-detail-image-next")) {
    selectProductGalleryMedia(productDetailImageIndex + 1);
    return;
  }

  const thumbnail = event.target.closest("[data-gallery-index]");
  if (thumbnail) {
    selectProductGalleryMedia(Number(thumbnail.dataset.galleryIndex));
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

productDetailDialog.addEventListener("change", (event) => {
  if (event.target.id !== "product-detail-variant-select") return;
  const selectedProduct = products.find(
    (product) => product.id === Number(event.target.value),
  );
  if (!selectedProduct) {
    throw new Error(`Opção de produto não encontrada: ${event.target.value}`);
  }
  renderProductDetail(selectedProduct);
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
document.querySelector("#cart-coupon-select")?.addEventListener("change", renderCart);
document.addEventListener("zwstorecouponchange", renderCart);
if (gameCustomerForm) {
  gameCustomerForm.addEventListener("submit", (event) => {
    event.preventDefault();
  });
}
if (customerForm) {
  customerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    startPixPayment();
  });
  checkoutButton.addEventListener("click", () => {
    if (customerForm.hidden) {
      customerForm.hidden = false;
      checkoutButton.textContent = cartBeforeDirectPurchase !== null
        ? "Salvar dados e gerar Pix do pedido"
        : "Salvar dados e gerar Pix";
      customerForm.querySelector("input")?.focus();
      return;
    }

    startPixPayment();
  });
} else {
  checkoutButton.addEventListener("click", startPixPayment);
}
document.querySelector("#send-order-button").addEventListener("click", sendOrderByEmail);
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
document.querySelector("#subscription-copy-pix")?.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(subscriptionPixCode.value);
    subscriptionPaymentStatus.textContent = "Código Pix da assinatura copiado.";
  } catch (error) {
    console.error("Não foi possível copiar o código Pix da assinatura.", error);
    subscriptionPaymentStatus.textContent =
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
document.addEventListener("approved-product-reviews-loaded", (event) => {
  const ratings = event.detail?.ratings;
  if (!ratings || typeof ratings !== "object") return;

  for (const product of products) {
    const productRating = ratings[product.id];
    if (
      productRating &&
      Number.isFinite(productRating.rating) &&
      Number.isSafeInteger(productRating.count)
    ) {
      product.rating = productRating.rating;
      product.reviewCount = productRating.count;
    }
  }
  renderProducts();

  if (activeDetailProductId === null) return;
  const product = products.find((item) => item.id === activeDetailProductId);
  if (!product || !Number.isFinite(product.rating)) return;
  const roundedRating = Math.round(product.rating);
  productDetailStars.textContent =
    `${"★".repeat(roundedRating)}${"☆".repeat(5 - roundedRating)}`;
  productDetailRating.textContent =
    `${product.rating.toLocaleString("pt-BR", { maximumFractionDigits: 1 })}/5 (${product.reviewCount} avaliações)`;
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

restoreCustomerDetails();
restoreGameCustomerDetails();
renderProducts();
renderCart();
const sharedProductId = new URLSearchParams(window.location.search).get("produto");
if (sharedProductId && /^\d+$/.test(sharedProductId)) {
  const sharedProduct = products.find((product) => product.id === Number(sharedProductId));
  if (sharedProduct) openProductDetails(sharedProduct.id, null, sharedProduct.id);
}
productDetailShareButton.addEventListener("click", () => {
  const productId = Number(productDetailShareButton.dataset.productId);
  shareProduct(productId);
});
