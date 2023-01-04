// An Array of emojis that will be used for the slot machine game
const items = ["🍭", "😻", "💵"];

const play = document.getElementById("start");

const init = document.getElementById("restart");

const boxesEls = document.querySelectorAll("#boxes");

play.addEventListener("click", (eo) => {
  play.style.backgroundColor = "red";
  play.boxesEls.innerHtml = items
});

init.addEventListener("click", (eo) => {
  init.style.backgroundColor = "lightblue";
});
