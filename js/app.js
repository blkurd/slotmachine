let boxes;
let wins;
let loses;
// Cashed Elements which I am going to update repeatedly when the state changes.

const buttonOne = document.querySelector("#start");
buttonOne.addEventListener("click", playSlot);

function playSlot(eo) {
  // console.log("Here I am clicking");

  boxes.boxOne = getRandomEmojis();
  boxes.boxTwo = getRandomEmojis();
  boxes.boxThree = getRandomEmojis();

  if (
    boxes.boxOne === boxes.boxTwo &&
    boxes.boxThree === boxes.boxOne &&
    boxes.boxTwo === boxes.boxThree
  ) {
    wins.win += 1200;
  } else {
    loses.lose -= 50;
  }

  // In this function I want to randomly generate a result of emojis. I will write
  // a function below to help me do this.

  render();
}

// This function's task is to randomly return the emojis
// in the following array = ["🍭", "😻", "💵"]

function getRandomEmojis() {
  const emojis = ["🍭", "😻", "💵"];
  const randomIndex = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
  return emojis[randomIndex];
}

const buttonTwo = document.querySelector("#restart");
buttonTwo.addEventListener("click", restart);

function restart(e) {
  // console.log("Here I am clickin too");

  boxes.boxOne = init();
  boxes.boxTwo = init();
  boxes.boxThree = init();
  wins.win = init();
  loses.lose = init();

  render();
}

const boxEls = {
  boxOne: document.querySelector("#box1"),
  boxTwo: document.querySelector("#box2"),
  boxThree: document.querySelector("#box3"),
};

const h2El = {
  wins: document.querySelector("#win"),
};

const h3El = {
  loses: document.querySelector("#lose"),
};

// This is the function that will be called when a user reloads the page or restats the game.

// One way to define variables

// let boxOne = "❓";
// let boxTwo = "❓";
// let boxThree = "❓";

// The other way of how we could do that is by writing an object:

// let boxes = {
//   boxOne: "?",
//   boxTwo: "?",
//   boxThree: "?",
// };

// I am using the object way of writing it and stating the values inside the function.

function init() {
  boxes = {
    boxOne: "❓",
    boxTwo: "❓",
    boxThree: "❓",
  };

  wins = {
    win: 0,
  };

  loses = {
    lose: 0,
  };

  render();

  // Render is the function that will show the emojis and numbers changing on the screen.
  // It's job is to update the dom to visually represent the state variables like wins and boxes.
}

// calling the function here
init();

// This function should be called in every controller function like init. and this function will make
// the wininig result and the boxes empty.

function render() {
  // This is one way to write it.

  // boxEls.boxOne.innerText = boxes.boxOne;
  // boxEls.boxTwo.innerText = boxes.boxTwo;
  // boxEls.boxThree.innerText = boxes.boxThree;

  // Since that I am using the same naming of the boxEls varialbles and boxes variables,
  // This is another way to make code DRY is to use the [for ... in loop] to loop over an object.

  for (let key in boxes) {
    boxEls[key].innerText = boxes[key];
  }

  // This is th h2 element's written alone because it has a different naming.

  h2El.wins.innerText = wins.win;
  h3El.loses.innerText = loses.lose;
}
