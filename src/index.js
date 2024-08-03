import {searchWord} from './helpers/FindWord.js';

const alphabetCheckRegex = /^[a-zA-Z]+$/;

let currentWord = "";
let currentSquare = 0;
let letterCount = 0;


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
    console.log('Searching Word');
    
  }
});


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
