import { words } from './Words.js';

const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

async function searchWord(word) {
    
    try {
        const response = await fetch(url + word); 
        
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        return json
    
    }
    catch (err) {
        console.error(err.message);
    }
}

//FETCHES WORD FROM LIST -> CHAR ARRAY OF WORD
function chooseWord() {
    let word = words[Math.floor(Math.random() * (11513))].toUpperCase();

    return word.split("");
    
}


export { searchWord , chooseWord }

