const cardArray = [
  {
    name: "feather",
    img: "./img/feather.png",
  },
  {
    name: "coins",
    img: "./img/coins.png",
  },
  {
    name: "orb",
    img: "./img/orb.png",
  },
  {
    name: "letter",
    img: "./img/letter.png",
  },
  {
    name: "wrench",
    img: "./img/wrench.png",
  },
  {
    name: "helmet",
    img: "./img/helmet.png",
  },
  {
    name: "feather",
    img: "./img/feather.png",
  },
  {
    name: "coins",
    img: "./img/coins.png",
  },
  {
    name: "orb",
    img: "./img/orb.png",
  },
  {
    name: "letter",
    img: "./img/letter.png",
  },
  {
    name: "wrench",
    img: "./img/wrench.png",
  },
  {
    name: "helmet",
    img: "./img/helmet.png",
  },
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "./img/blank.png");
    card.setAttribute("data-id", i);
    card.setAttribute("draggable", false);
    card.style.cursor = "pointer";
    card.addEventListener("click", flipCard);
    gridDisplay.append(card);
  }
}

createBoard();

function checkMatch() {
  const cards = document.querySelectorAll("#grid img");
  const optionOneId = cardsChosenIds[0];
  const optionTwoId = cardsChosenIds[1];
  console.log("check for match");
  if (optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute("src", "./img/blank.png");
    cards[optionTwoId].setAttribute("src", "./img/blank.png");
  }
  if (cardsChosen[0] == cardsChosen[1]) {
    cards[optionOneId].setAttribute("src", "./img/white.png");
    cards[optionTwoId].setAttribute("src", "./img/white.png");
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);
    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneId].setAttribute("src", "./img/blank.png");
    cards[optionTwoId].setAttribute("src", "./img/blank.png");
  }

  resultDisplay.innerHTML = cardsWon.length;

  cardsChosen = [];
  cardsChosenIds = [];

  if (cardsWon.length == cardArray.length / 2) {
    resultDisplay.innerHTML = "You win!";
  }
}

function flipCard() {
  let cardID = this.getAttribute("data-id");
  cardsChosen.push(cardArray[cardID].name);
  cardsChosenIds.push(cardID);
  console.log(cardsChosen);
  console.log(cardsChosenIds);
  this.setAttribute("src", cardArray[cardID].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
