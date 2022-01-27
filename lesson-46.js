// 1. let hasCompletedCourse = true;
// let givesCertificate = true;

// function generateCertificate() {
//   console.log("Generating certificate....");
// }

// 2. let hasCompletedCourse = false;
// let givesCertificate = true;

// if (hasCompletedCourse === true && givesCertificate === true) {
//   // if (givesCertificate === true) {
//   generateCertificate();
//   // }
// }

// function generateCertificate() {
//   console.log("Generating certificate....");
// }

// 3.
let hasCompletedCourse = true;
let givesCertificate = true;

if (hasCompletedCourse && givesCertificate) {
  generateCertificate();
}

function generateCertificate() {
  console.log("Generating certificate....");
}

//========================================================================================

let hasSolvedChallenge = false;
let hasHintsLeft = false;

// Create an if statement that checks that both variables are false.
// If so, run the showSolution() function
if (!hasSolvedChallenge && !hasHintsLeft) {
  showSolution();
}

function showSolution() {
  console.log("Showing the solution....");
}

//=========================================================================================

// Create two boolean variables, likesDocumentaries and likesStartups
// Use an OR statement (||) to call recommendMovie() if either of those variables are true

let likesDocumentaries = true;
let likesStartups = false;

if (likesDocumentaries || likesStartups) {
  recommendMovie();
}

function recommendMovie() {
  console.log("Hey, check out this new film we think you will like!");
}
