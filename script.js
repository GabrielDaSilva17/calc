const cards = [
  {
    image: "https://link-da-imagem-1.jpg",
    title: "Massagem Sensual",
    description: "Use óleos aromáticos e explore o corpo do parceiro com toques suaves e atentos."
  },
  {
    image: "https://link-da-imagem-2.jpg",
    title: "Jogo de Dominação",
    description: "Um assume o controle e o outro se entrega. Estabeleçam limites e explorem fantasias."
  }
];

let currentIndex = 0;

function showCard() {
  const card = cards[currentIndex];
  document.getElementById('card-image').src = card.image;
  document.getElementById('card-title').textContent = card.title;
  document.getElementById('card-description').textContent = card.description;
}

document.getElementById('next-button').addEventListener('click', () => {
  currentIndex = Math.floor(Math.random() * cards.length);
  showCard();
});

// Inicializar a primeira carta
showCard();
