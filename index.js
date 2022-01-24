// let firstCard = 2;
// let secondCard = 11;
// let sum = firstCard + secondCard;
// console.log(sum);

// https://www.youtube.com/watch?v=EumXak7TyQ0&t=330s

// if (sum < 21) return console.log("Draw again? 😁");
// if (sum === 21) return console.log("WooHoo! Blackjack 🎉");
// if (sum > 21) return console.log("Bad luck 😣");

let firstCard = 11;
let secondCard = 7;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;

// Write the conditional according to these rules:

// if less than or equal to 20 -> "Do you want to draw a new card? 🙂"
// else if exactly 21 -> "Wohoo! You've got Blackjack! 🥳"
// else -> "You're out of the game! 😭"

if (sum <= 20) {
  console.log("Do you want to draw a new card? 🙂");
  console.log(hasBlackJack);
}
if (sum === 21) {
  console.log("Wohoo! You've got Blackjack! 🥳");
  hasBlackJack = true;
} else {
  console.log("You're out of the game! 😭");
  isAlive = false;
}

console.log("Still in the game:", isAlive);

/**
 * let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard + 4
let hasBlackJack = false
// 1. Create a variable called isAlive and assign it to true
let isAlive = true

// 2. Flip its value to false in the appropriate code block 
if (sum <= 20) {
    console.log("Do you want to draw a new card? 🙂")
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack! 🥳")
    hasBlackJack = true
} else {
    console.log("You're out of the game! 😭")
    isAlive = false
}

// 3. Log it out to check that you're doing it right
console.log(isAlive)
 */
