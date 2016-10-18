window.onload = function() {
var pacman = "pacman";
var centipede = "centipede";
var frogger = "frogger";

	// Hangman Project
//RETURN A 'HIDDEN' VERSION OF THE SUPPLIED SECRET WORD

function getDisplay(word)
{   
    // Given a string, "word", return a hidden version of it consisting
    // of dashes for the display.
    // REPLACE THIS CODE WITH YOUR getDisplay() METHOD

    var disp="";
    for (var i=0; i < word.length; i++ ){
        disp = disp +'-';
    }
    return disp;
}

document.getElementById("disp").innerHTML = getDisplay(pacman);

//FIND IF THE LETTER IS IN THE WORD
function isLetterInWord(word,letter){
    // Given the word "word", check if it contains the letter "letter".
    // REPLACE THIS CODE WITH YOUR isLetterInWord() METHOD

    if(word.search(letter) != -1) {
        return true;
    } else {
        return false;
    }

}
}