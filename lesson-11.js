let messageEl = document.querySelector(".message-el");
let sumEl = document.querySelector(".sum-el");
let cardsEl = document.querySelector(".cards-el");
console.log(messageEl);

let firstCard = 10;
let secondCard = 2;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
// 1. Declare a variable called message and assign its value to an empty string
let message = "";
// 2. Reassign the message variable to the string we're logging out

const startGame = () => renderGame();

function renderGame() {
  sumEl.textContent = "Total: " + sum;
  cardsEl.textContent = "Cards:" + `${firstCard} and ${secondCard}`;

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
  renderGame();
}
