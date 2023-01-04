// An Array of emojis that will be used for the slot machine game
const items = ["🍭", "😻", "💵"];

const play = document.getElementById("start");

const init = document.getElementById("init");

const boxesEls = {
  box1: document.querySelector("#box1"),
  box2: document.querySelector("#box2"),
  box3: document.querySelector("#box3"),
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
  box.box1 = getRandomItems();
  box.box2 = getRandomItems();
  box.box3 = getRandomItems();

  if (box.box1 === box.box2 && box.box3 === box.box1 && box.box2 === box.box3) {
    render();
  }
  //init function should be called when the page loads
  // or when we want to reset the game

  init(); // this will set the initial when the page loads
  function init() {
    box = {
      box1: "❓",
      box2: "❓",
      box3: "❓",
    };

    render();
  }
}
