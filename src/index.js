import { searchWord, chooseWord } from "./helpers/FindWord.js";
import { animateKeyDown , animateBackspace , colorSquarePosition } from "./helpers/Animations.js"

const alphabetCheckRegex = /^[a-zA-Z]+$/;

let currentWord = "";
let currentSquare = 0;
let currentRow = 0;
let letterCount = 0;

//CHAR ARRAY
let secretWord = chooseWord();
console.log(secretWord);

window.addEventListener("keydown", handleKeyPress);


//TO-DO FOR CLEAN UP
function handleKeyPress(event) {
  const keyPress = event.key;

  if (isAlphabet(keyPress) && letterCount < 5 && gameRunning()) {
    animateKeyDown(currentSquare);
    addLetterToGrid(currentSquare, keyPress);
    addLetterToWord(keyPress);
    
  }
  if (keyPress == "Backspace") {
    if (currentSquare > 0 && letterCount > 0 && gameRunning()) {
      animateBackspace(currentSquare);
      removeLetterFromWord();
    }
  }
  if (keyPress == "Enter") {
    enterKeyHandler();
  }
}

//ADDS LETTER TO CURRENT WORD AND DISPLAYS IT AT THE CURRENT GRID SQUARE
function addLetterToWord(letter) {
  currentWord = currentWord.concat(letter.toUpperCase());
  letterCount++;
  console.log(currentWord);
}

//DELETES LETTER
function removeLetterFromWord() {
  currentSquare--;
  document.getElementById(currentSquare.toString()).innerHTML = " ";
  currentWord = currentWord.substring(0, currentWord.length - 1);
  letterCount--;
  console.log(currentWord);
}

//MOVES GAME TO THE NEXT ROW
function moveToNextRow() {
  currentWord = "";
  letterCount = 0;
  currentRow++;
}

/*CHECKS USER INPUT AGAINST THE SECRETWORD -> RETUNRNS ARRAY 
0 - NOT A LETTER IN THE WORD
1 - LETTER IN THE WORD , NOT IN CORRECT POSITION  
2 - LETTER IN CORRECT POSITION 
*/
function checkMatchingLetters(currentWord) {
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

  return userAnswerMatch;
}

function isAlphabet(press) {
  return alphabetCheckRegex.test(press) && press.length === 1;
}

function addLetterToGrid(gridNumber, letter) {
  document.getElementById(gridNumber).innerHTML = letter.toUpperCase();
  currentSquare++;
}

//IF ENTER HAS NOT BEEN HIT ON THE FINAL ROW -> TRUE
function gameRunning() {
  return currentRow < 6;
}

function endGame() {
  currentRow = 7;
}

function enterKeyHandler() {
  if (letterCount === 5 && currentRow <= 5 && gameRunning()) {
    console.log("Searching Word");
    searchWord(currentWord).then((wordExists) => {
      if (wordExists) {
        if (checkMatchingLetters(currentWord).includes(0, 1)) {
          colorSquarePosition(checkMatchingLetters(currentWord) , currentRow)
          console.log(checkMatchingLetters(currentWord));
          moveToNextRow();
        } else {
          colorSquarePosition(checkMatchingLetters(currentWord) , currentRow)
          console.log("CORRECT GUESS!!!!");
          endGame();
        }
      }
    });
  }
}

