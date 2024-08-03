import { searchWord, chooseWord } from "./helpers/FindWord.js";

const alphabetCheckRegex = /^[a-zA-Z]+$/;

let currentWord = "";
let currentSquare = 0;
let letterCount = 0;

//CHAR ARRAY
let secretWord = chooseWord();

window.addEventListener("keydown", (event) => {
  const pressedKey = event.key;

  if (letterCount < 5) {
    if (alphabetCheckRegex.test(pressedKey) && pressedKey.length === 1) {
      document.getElementById(currentSquare.toString()).innerHTML =
        pressedKey.toUpperCase();

      appendLetterToWord(pressedKey.toUpperCase());
    }
  }
  if (pressedKey == "Backspace" && currentSquare > 0) {
    removeLetterFromWord();
  }
  if (pressedKey == "Enter" && letterCount === 5) {
    console.log("Searching Word");
    checkMatchingLetters(currentWord);
    moveToNextRow();
  }
});

console.log(secretWord);



function appendLetterToWord(letter) {
  currentWord = currentWord.concat(letter);
  currentSquare++;
  letterCount++;
  console.log(currentWord);
}

function removeLetterFromWord() {
  currentSquare--;
  document.getElementById(currentSquare.toString()).innerHTML = " ";
  currentWord = currentWord.substring(0, currentWord.length - 1);
  letterCount--;
  console.log(currentWord);
}

function moveToNextRow() {
  currentWord = "";
  letterCount = 0;
}

//CHECKS USER INPUT AGAINST THE SECRETWORD -> {MATCHED LETTERS AND INDEX}
function checkMatchingLetters(currentWord) {
  let x = 0;
  let y = 0;
  let userAnswerMatch = [];

  const wordMap = secretWord.map((l, index) => {
    return {
      letter: l,
      postion: index,
    };
  });

  const userChosenWordArray = currentWord.split("");

  let wordMapDistinct = [...new Set(secretWord)];

  for (let i = 0; i < wordMap.length; i++) {
    if (
      wordMapDistinct.includes(userChosenWordArray[i]) &&
      wordMap[i].letter == userChosenWordArray[i] &&
      wordMap[i].postion == i
    ) {
      userAnswerMatch.push(2);
    } else if (wordMapDistinct.includes(userChosenWordArray[i])) {
      userAnswerMatch.push(1);
    } else {
      userAnswerMatch.push(0);
    }
  }


  console.log(userAnswerMatch);
  

}
