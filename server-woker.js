// Formulário de envio
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  if (!nome || !email || !mensagem) {
    formMessage.style.color = "red";
    formMessage.textContent =
      "Por favor, preencha todos os campos obrigatórios!";
    return;
  }

  // Validação de e-mail
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    formMessage.style.color = "red";
    formMessage.textContent = "Por favor, insira um e-mail válido!";
    return;
  }

  formMessage.style.color = "#179248";
  formMessage.textContent = "Mensagem enviada com sucesso! ✅";
  form.reset();

  setTimeout(() => {
    formMessage.textContent = "";
  }, 4000);
});

// Renderização do mapa
function renderMap() {
  const mapContainer = document.getElementById("map");
  const iframe = document.createElement("iframe");

  // URL correta para o Google Maps Embed API
  iframe.src =
    "https://www.google.com/maps/embed/v1/place?q=Av.%20Boa%20Viagem,%20123%20-%20Recife,%20PE&key=SEU_API_KEY";
  iframe.width = "600";
  iframe.height = "400";
  iframe.style.border = "0";
  iframe.allowFullscreen = true;

  mapContainer.appendChild(iframe);
}

// Chamar a função para renderizar o mapa
document.addEventListener("DOMContentLoaded", () => {
  renderMap();
});

// ---------------------------------------

const CACHE_NAME = "dino-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/style.css",
  "/dinossauros.js",
  "/manifest.json",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
