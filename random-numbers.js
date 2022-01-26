let player1Time = 102;
let player2Time = 107;

function getFastestRaceTime() {
  if (player1Time < player2Time) return player1Time;
  if (player1Time > player2Time) return player2Time;
  if (player1Time === player2Time) return player2Time;
}

// the var fastestRace will be set as the result of the fn above
// storing the result is good as it can be used again elsewhere
let fastestRace = getFastestRaceTime();

console.log(fastestRace);

// Write a function that returns the total race time
// Call/invoke the function and store the returned value in a new variable
// Finally, log the variable out

const totalTime = () => {
  return player1Time + player2Time;
};

const totalRaceTime = totalTime();

console.log(totalRaceTime);

// ================================================================================

// let randomNumber = Math.random(); // returns a random number between 0 - 0.99999999......
// let randomNumber = Math.random() * 6; // between 0 -5.9999....
let randomNumber = Math.random() * 22; // between 0 -21.9999....

console.log(randomNumber);

let flooredNumber = Math.floor(3.45632); // rounds down to nearest whole num / removes the decimals

console.log(flooredNumber);

// let wholeRandomNumber = Math.floor(Math.random() * 6); // 0 - 5
let wholeRandomNumber = Math.floor(Math.random() * 6) + 1; // 1 - 6

console.log(wholeRandomNumber);

function rollDice() {
  let wholeRandomNumber = Math.floor(Math.random() * 6) + 1;
  return wholeRandomNumber;
}

// =====================================================================

// 1.// Make this function return a random number between 1 and 13
// function getRandomCard() {
//   return Math.random()*13 // 0.000 - 12.999
// }

// 2.// Make this function return a random number between 1 and 13
// function getRandomCard() {
//   return Math.floor( Math.random()*13 ) // 0 - 12
// }
