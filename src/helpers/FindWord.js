import { words } from "./Words.js";

const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

//SEARCHES FOR WORD IF WORD EXISTS RETURNS 200 IF NOT 404 WITH EMPTY ARRAY
async function searchWord(word) {
  try {
    const response = await fetch(url + word);

    if (!response.ok) {
      return false;
    } else {
      const json = await response.json();
      return true;
    }
  } catch (err) {
    console.error(err.message);
  }
}

//FETCHES WORD FROM LIST -> CHAR ARRAY OF WORD
function chooseWord() {
  let word = words[Math.floor(Math.random() * words.length)].toUpperCase();

  return word.split("");
}

async function getDefinition(word) {
  try {
    const response = await fetch(url + word);

    if (!response.ok) {
      return false;
    } else {
      const json = await response.json();
      console.log(json[0].meanings[0].definitions[0].definition);
    }
  } catch (err) {
    console.error(err.message);
  }
}

export { searchWord, chooseWord, getDefinition };
