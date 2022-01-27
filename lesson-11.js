const player = {
  name: "Alex",
  chips: 100,
};

let messageEl = document.querySelector(".message-el");
let sumEl = document.querySelector(".sum-el");
let cardsEl = document.querySelector(".cards-el");
let playerEl = document.querySelector(".player-el");

let cards = [];
let sum;
let hasBlackJack = false;
let isAlive = false;
let message = "";

// render the player name and chips
playerEl.textContent = player.name + ": $" + player.chips;

// fn declaration is hoisted - arrow fn not hoisted = fn expression - have to move variables below - check 36
const getRandomCard = () => {
  let randomCard = Math.floor(Math.random() * 11) + 1;
  if (randomCard === 1) {
    return 11;
  }
  return randomCard;
};

const startGame = () => {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
};
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
  if (isAlive && !hasBlackJack) {
    // console.log("Drawing a new card from the deck!");
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    console.log(cards);
    renderGame();
  }
}

// lesson 46
