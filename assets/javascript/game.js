var words = ['pacman','digdug','supermariobros','tetris','centipede','spaceinvaders','galaga','asteroids','donkeykong','pong','tron','burgertime','berzerk','qbert'];

var wins = 0;
var tries = 10;
var spentLetters = [];
var usedCorrect = [];
var correctGuess = 0;
var gameStarted = false;
// if the game hasn't started, load the big function with pressing key.  if it HAS started, load the blanks.


// Creates span elements in the DOM equal to the word's length

$(document).ready(function(){

$("#start").on("click", function(){
        var word = words[Math.floor(Math.random() * words.length)];
	 	console.log(word);
	 	spentLetters = [];
	 	correctGuess = 0;
	 	tries = 10;
	 	document.getElementById("solved").innerHTML = "     ";
	 	document.getElementById("tries").innerHTML = "Tries: " + tries;
	 	document.getElementById("wins").innerHTML = "Wins: " + wins;
	 	document.getElementById("used").innerHTML = "Incorrect Guesses: " + spentLetters.toString();



	var htmlElements = "";
	for (var i = 0; i < word.length; i++) {
   	htmlElements += '<span>_</span>';
	}
	var blanks = document.getElementById("word");
	blanks.innerHTML = htmlElements;


document.onkeyup = function(event) { 

// adds correct letters to span elements in the DOM
var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
				
				for(var i = 0; i < word.length; i++) {

				if(userGuess === word[i]) {
					document.getElementsByTagName("SPAN")[i].innerHTML = userGuess;

					var x = document.getElementById("word");
					x.getElementsByTagName("SPAN")[i].className = "filled";
					correctGuess++;
					console.log(correctGuess);
				}
  	}	


// Determines when you have won
var filledSpans = document.getElementsByClassName("filled");

if(filledSpans.length === word.length) {
  	document.onkeyup = null;
  	document.getElementById("solved").style.color = "green";
  	document.getElementById("solved").innerHTML = "You Win!";
  	wins++;
  	document.getElementById("wins").innerHTML = "Wins: " + wins;
 
  
}

// Handles the incorrect guesses
		if(spentLetters.indexOf(userGuess) === -1 && word.indexOf(userGuess) === -1){
					spentLetters.push(userGuess);
					document.getElementById("used").innerHTML = "Incorrect Guesses: " + spentLetters.toString();
					tries--;
					document.getElementById("tries").innerHTML = "Tries: " + tries;
					}
//if you use up all your tries, you lose.					
		if (tries === 0) {
			document.getElementById("solved").style.color = "red";
			document.getElementById("solved").innerHTML = "you lose";
			document.onkeyup = null;

			}
}

	
 })	
})