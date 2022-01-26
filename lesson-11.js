let messageEl = document.querySelector(".message-el");
let sumEl = document.querySelector(".sum-el");
let cardsEl = document.querySelector(".cards-el");
console.log(messageEl);

let hasBlackJack = false;
let isAlive = true;
let message = "";

// arrow fn not hoisted fn expression - have to move variables below - check 36
const getRandomCard = () => {
  // Math.floor(Math.random());
  return 5;
};

let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;

const startGame = () => renderGame();

function renderGame() {
  // render out cards
  cardsEl.textContent = `Your cards are: `;

  for (i = 0; i < cards.length; i++) {
    // set the textContent of cardsEl to be each iteration of the for loop + card being adding - new card button calls this function - card is added to the array and the loop runs again.
    cardsEl.textContent += cards[i] + " ";
  }

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
  let card = getRandomCard();
  sum += card;
  cards.push(card);
  console.log(cards);
  renderGame();
}
