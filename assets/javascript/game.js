var words = ['PACMAN','DIGDUG','SUPERMARIOBROS','TETRIS','CENTIPEDE','SPACEINVADERS','GALAGA','ASTEROIDS','DONKEYKONG','PONG','TRON','BURGERTIME','BERZERK','QBERT'];

var wins = 0;
var tries = 10;
var spentLetters = [];
var correctGuess = 0;
var gameStarted = false;
// if the game hasn't started, load the big function with pressing key.  if it HAS started, load the blanks.


// Creates span elements in the DOM equal to the word's length

$(document).ready(function(){

$("#start").on("click", function(){
        var word = words[Math.floor(Math.random() * words.length)];
	 	getBlanks(word);
	 	spentLetters = [];
	 	correctGuess = 0;
	 	tries = 10;
	 	document.getElementById("solved").innerHTML = "    ";
	 	document.getElementById("tries").innerHTML = "Tries: " + tries;
	 	document.getElementById("used").innerHTML = "Incorrect Guesses: " + spentLetters.toString();

    })	


 function getBlanks(arr) {

	var htmlElements = "";
	for (var i = 0; i < arr.length; i++) {
   	htmlElements += '<span>_</span>';
	}
	var blanks = document.getElementById("word");
	blanks.innerHTML = htmlElements;

document.onkeyup = function(event) { 

// adds correct letters to span elements in the DOM
var userGuess = String.fromCharCode(event.keyCode).toUpperCase();
				
				for(var i = 0; i < arr.length; i++) {

				if(userGuess === arr[i]) {
					

					document.getElementsByTagName("SPAN")[i].innerHTML = userGuess;
					correctGuess++;
					console.log(correctGuess);
				}
  	}	
// Determines when you have won
if(correctGuess === arr.length) {
  	wins++;
  	document.getElementById("solved").style.color = "green";
  	document.getElementById("solved").innerHTML = "You Win!";
  	document.getElementById("wins").innerHTML = "Wins: " + wins;
}



// Handles the incorrect guesses
		if(spentLetters.indexOf(userGuess) === -1 && arr.indexOf(userGuess) === -1){
					spentLetters.push(userGuess);
					document.getElementById("used").innerHTML = "Incorrect Guesses: " + spentLetters.toString();
					tries--;
					document.getElementById("tries").innerHTML = "Tries: " + tries;
					}
//if you use up all your tries, you lose.					
		if (tries === 0) {
			document.getElementById("solved").style.color = "red";
			document.getElementById("solved").innerHTML = "you lose";
		
			}
}
}
		
})
