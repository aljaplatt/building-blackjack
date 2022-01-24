// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases

let age = 99;
console.log(age);

// if less than 21 -> "You can not enter the club!"
// else            -> "Welcome!"

// cannot return outside of a fn
// if (age >= 21) console.log("Get in.");
// if (age < 21) console.log("Jog on mate");

if (age < 100 || age > 100) console.log("Not elegible");
if (age === 100) console.log("Here is your birthday card from the King!");

// if (age < 100) {
//     console.log("Not elegible")
// } else if (age === 100) {
//     console.log("Here is your birthday card from the King!")
// } else {
//     console.log("Not elegible, you have already gotten one")
// }
