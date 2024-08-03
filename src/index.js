import { searchWord, chooseWord } from "./helpers/FindWord.js";

const alphabetCheckRegex = /^[a-zA-Z]+$/;

let currentWord = "";
let currentSquare = 0;
let currentRow = 0;
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
  if (pressedKey == "Enter" && letterCount === 5 && currentRow < 5) {
    console.log("Searching Word");
    console.log(checkWordExists(currentWord));
    checkMatchingLetters(currentWord);
    if (checkMatchingLetters(currentWord).includes(0, 1)) {
      moveToNextRow();
    }
    else {
      console.log('CORRECT GUESS!!!!')
    }
    
  }
});


//ADDS LETTER TO CURRENT WORD AND DISPLAYS IT AT THE CURRENT GRID SQUARE
function appendLetterToWord(letter) {
  currentWord = currentWord.concat(letter);
  currentSquare++;
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

