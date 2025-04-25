let cards = [];
let currentIndex = 0;

fetch('cards.json')
  .then(response => response.json())
  .then(data => {
    cards = data;
    showCard();
    console.log(showCard())
  });

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
