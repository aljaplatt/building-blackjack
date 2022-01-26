let messageEl = document.querySelector(".message-el");
let sumEl = document.querySelector(".sum-el");
let cardsEl = document.querySelector(".cards-el");
console.log(messageEl);

let firstCard = 10;
let secondCard = 2;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

const startGame = () => renderGame();

function renderGame() {
  // render out cards
  cardsEl.textContent = `Your cards are: ${cards[0]} and ${cards[1]}`;
  sumEl.textContent = "Total: " + sum;

  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack";
    hasBlackJack = true;
  } else {
    message = "You're out of the game";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  console.log("Drawing a new card from the deck!");
  let card = 4;
  sum += card;
  cards.push(card);
  console.log(cards);
  renderGame();
}
