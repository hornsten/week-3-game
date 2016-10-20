var words = [
  {text: 'pacman', url: 'assets/images/pacman.gif', sound: 'assets/audio/pacman_beginning.wav'},
  {text: 'digdug', url: 'assets/images/digdug.gif', sound: '#'},
  {text: 'tetris', url: 'assets/images/tetris.jpeg', sound:'#' },
  {text: 'supermariobros', url:'assets/images/mario.gif', sound: '#'},
  {text: 'centipede', url:'assets/images/centipede.jpeg', sound: '#'},
  {text: 'spaceinvaders', url:'assets/images/space_invaders.gif', sound: '#'},
  {text: 'galaga', url:'assets/images/galaga.jpeg', sound: '#'},
  {text: 'asteroids', url:'assets/images/asteroids.gif', sound: '#'},
  {text: 'donkeykong', url:'assets/images/donkeykong.gif', sound: '#'},
  {text: 'pong', url:'assets/images/pong.gif', sound: '#'},
  {text: 'tron', url:'assets/images/tron.jpeg', sound: '#'},
  {text: 'burgertime', url:'assets/images/burgertime.gif', sound: '#'},
  {text: 'berzerk', url:'assets/images/berzerk.png', sound: '#'},
  {text: 'qbert', url:'assets/images/qbert.png', sound: '#'}
];

var wins = 0;
var tries = 10;
var spentLetters = [];
var usedCorrect = [];
var correctGuess = 0;
var gameStarted = false;


// Creates span elements in the DOM equal to the word's length

$(document).ready(function(){

$("#start").on("click", function(){
        var word = words[Math.floor(Math.random() * words.length)];
	 	clue = word.text;
	 	console.log(clue);
	 	spentLetters = [];
	 	correctGuess = 0;
	 	tries = 10;
	 	document.getElementById("solved").innerHTML = "     ";
	 	document.getElementById("tries").innerHTML = "Lives: " + tries;
	 	document.getElementById("wins").innerHTML = "Wins: " + wins;
	 	document.getElementById("used").innerHTML = "Incorrect Guesses: " + spentLetters.toString();
	 	document.getElementById("word").style.color = "green";


	var htmlElements = "";
	for (var i = 0; i < clue.length; i++) {
   	htmlElements += '<span>_</span>';
	}
	var blanks = document.getElementById("word");
	blanks.innerHTML = htmlElements;


document.onkeyup = function(event) { 

// adds correct letters to span elements in the DOM
var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
				
				for(var i = 0; i < clue.length; i++) {

				if(userGuess === clue[i]) {
					document.getElementsByTagName("SPAN")[i].innerHTML = userGuess;	
					var x = document.getElementById("word");
					x.getElementsByTagName("SPAN")[i].className = "filled";
					correctGuess++;
					console.log(correctGuess);
				}
  	}	


// Determines when you have won
var filledSpans = document.getElementsByClassName("filled");

if(filledSpans.length === clue.length) {
  	document.onkeyup = null;
  	document.getElementById("solved").style.color = "green";
  	document.getElementById("solved").innerHTML = "You Win!";
  	wins++;
  	document.getElementById("wins").innerHTML = "Wins: " + wins;
 	document.getElementById("myImg").src = word.url;
  
}

// Handles the incorrect guesses
		if(spentLetters.indexOf(userGuess) === -1 && clue.indexOf(userGuess) === -1){
					spentLetters.push(userGuess);
					document.getElementById("used").innerHTML = "Incorrect Guesses: " + spentLetters.toString();
					tries--;
					document.getElementById("tries").innerHTML = "Tries: " + tries;
					}
//if you use up all your tries, you lose.					
		if (tries === 0) {
			document.getElementById("solved").style.color = "red";
			document.getElementById("solved").innerHTML = "you lose";
			document.getElementById("word").style.color = "red";
			document.getElementById("word").innerHTML = clue;
			document.onkeyup = null;

			}
}

	
 })	
})