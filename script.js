const secretPhrases = ["never", "you", "that", "bullet", "break"];
const alphabetLetters = document.getElementById("letters");
let randomItem = "";
let clicked = [];
let result = "";

function selectRandomItem() {
  randomItem = secretPhrases[Math.floor(Math.random() * secretPhrases.length)];
  alphabetLetters.addEventListener("click", buttonHandler);
  console.log(randomItem);
}

function setUnderScores() {
  let splittedWord = randomItem.split("");
  let mappedWord = splittedWord.map((letter) =>
    clicked.indexOf(letter) >= 0 ? letter : "-"
  );
  result = mappedWord.join("");
  document.getElementById("clue").innerHTML = `<p>${result}</p>`;
}

function checkIfWon() {
  if (randomItem === result) {
    document.getElementById("gameover").querySelector("p").style.display =
      "block";
    document.getElementById("image").querySelector("img").src =
      "assets/winner.png";
  }
}

function letterHandler(letter) {
  letter = letter.toLowerCase();
  clicked.indexOf(letter) === -1 ? clicked.push(letter) : null;
  document.getElementById(letter.toUpperCase()).className = "used";
  if (randomItem.indexOf(letter) >= 0) {
    setUnderScores();
    checkIfWon();
  } else if (randomItem.indexOf(letter) === -1) {
  }
}

function buttonHandler(event) {
  letterHandler(event.target.id);
}
selectRandomItem();
setUnderScores();
