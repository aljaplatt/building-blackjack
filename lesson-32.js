let sentence = ["Hello", "my", "name", "is", "Per"];
let greetingEl = document.getElementById("greeting-el");

// Render the sentence in the greetingEl paragraph using a for loop and .textContent
for (i = 0; i < sentence.length; i++) {
  //  using just an equal below will clear out the previous iteraion text, only last item will show
  greetingEl.textContent += sentence[i] + " ";
}