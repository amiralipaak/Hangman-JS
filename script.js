const secretPhrases = ["never", "you", "that", "bullet", "break"];
const alphabetLetters = document.getElementById("letters");
let randomItem = "";
let clicked = [];
let result = "";
let mistakes = 0;
function selectRandomItem() {
  randomItem = secretPhrases[Math.floor(Math.random() * secretPhrases.length)];
  alphabetLetters.addEventListener("click", buttonHandler);
  window.addEventListener("keydown", keyHandler);
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
function checkIfLost() {
  if (mistakes === 6) {
    document.getElementById("gameover").querySelector("p").style.display =
      "block";
    document.getElementById(
      "clue"
    ).innerHTML = `<p> The Word was : ${randomItem}</p>`;
  }
}
function updateHangmanPicture() {
  const image = document.getElementById("image").querySelector("img");
  image.src = `assets/hangman${mistakes}.png`;
  image.alt = "Stop Trying, Its Over";
}
function letterHandler(letter) {
  letter = letter.toLowerCase();
  clicked.indexOf(letter) === -1 ? clicked.push(letter) : null;
  document.getElementById(letter.toUpperCase()).className = "used";
  if (randomItem.indexOf(letter) >= 0) {
    setUnderScores();
    checkIfWon();
  } else if (randomItem.indexOf(letter) === -1) {
    mistakes++;
    checkIfLost();
    updateHangmanPicture();
  }
}

function buttonHandler(event) {
  letterHandler(event.target.id);
}

function keyHandler(event) {
  letterHandler(event.key);
}

selectRandomItem();
setUnderScores();
