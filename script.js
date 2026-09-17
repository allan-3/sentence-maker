const form = document.getElementById("storyForm");
const output = document.getElementById("output");
const fillExampleBtn = document.getElementById("fillExample");
const clearFormBtn = document.getElementById("clearForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const adjective = document.getElementById("adjective").value;
  const place = document.getElementById("place").value;
  const animal = document.getElementById("animal").value;
  const emotion = document.getElementById("emotion").value;
  const item = document.getElementById("item").value;
  const verb = document.getElementById("verb").value;
  const treasure = document.getElementById("treasure").value;

  const story = name + " was a " + adjective + " explorer venturing deep into the " +
    place + ". Without warning, a wild " + animal + " leaped out from the shadows! " +
    "Heart pounding with " + emotion + ", " + name + " gripped the trusty " + item +
    " tightly and decided to " + verb + ". After a thrilling struggle, " + name +
    " uncovered a legendary " + treasure + " and returned home a hero.";

  output.textContent = story;
});

fillExampleBtn.addEventListener("click", function () {
  document.getElementById("name").value = "Zara";
  document.getElementById("adjective").value = "fearless";
  document.getElementById("place").value = "jungle";
  document.getElementById("animal").value = "tiger";
  document.getElementById("emotion").value = "excitement";
  document.getElementById("item").value = "sword";
  document.getElementById("verb").value = "fight";
  document.getElementById("treasure").value = "golden idol";
});

clearFormBtn.addEventListener("click", function () {
  form.reset();
  output.textContent = "";
});