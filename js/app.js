// An Array of emojis that will be used for the slot machine game
const items = ["🍭", "😻", "💵"];

let emojis;
let potOfGold;

// Cache Elements, gotPotsEls is my object and potOfGold1/2/3 are my keys
// These are the elements that will update on my HTML
const goldPotsEls = {
  potOfGold1: document.querySelector("#potOfGold1"),
  potOfGold2: document.querySelector("#potOfGold2"),
  potOfGold3: document.querySelector("#potOfGold3"),
};

//    This the function that will randomly choose 3 items from the items array to
// display on my html

function getRandomItems() {
  const randomItems = [Math.floor(Math.random() * 3)];
  return items[randomItems];
}

// I will use this to select my buttons from html and allow the buttons to click

const button = document.querySelector("#start");
button.addEventListener("click", play);

const restartButton = document.querySelector("#restart");
restartButton.addEventListener("click", init);

// function that will allow the game to play and decide what message
// will show if someone wins/loses

function playSlot(e) {
  potOfGold.potOfGold1 = getRandomItems();
  potOfGold.potOfGold2 = getRandomItems();
  potOfGold.potOfGold3 = getRandomItems();

  if (
    potOfGold.potOfGold1 === potOfGold.potOfGold2 &&
    potOfGold.potOfGold3 === potOfGold.potOfGold1 &&
    potOfGold.potOfGold2 === potOfGold.potOfGold3

  ) { 

      
  render();
}
//init function should be called when the page loads
// or when we want to reset the game

init(); // this will set the initial when the page loads
function init() {


  potOfGold = {
    potOfGold1: "❓",
    potOfGold2: "❓",
    potOfGold3: "❓",
  };

  render();
}}
