function animateKeyDown(squareNumber) {
  const currentSquare = document.getElementById(squareNumber);

  currentSquare.classList.add("animate");
}

function animateBackspace(squareNumber) {
  const currentSquare = document.getElementById(squareNumber - 1);
  currentSquare.classList.remove("animate");
}

function colorSquarePosition(matchingLetterArray, currentRow) {
  const x = [0, 5, 10, 15, 20, 25, 30];

  for (let i = 0; i < 5; i++) {
    const currentSquare = document.getElementById(i + x[currentRow]);
    if (matchingLetterArray[i] == 1) {
      currentSquare.classList.add("colorYellow");
    }
    else if (matchingLetterArray[i] == 2) {
      currentSquare.classList.add("colorGreen");
    }
    else {
      currentSquare.classList.add("colorGrey");
    }

  }
}


export { animateKeyDown, animateBackspace, colorSquarePosition };


