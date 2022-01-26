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
