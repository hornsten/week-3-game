var words = [
  {text: 'pacman', url: 'assets/images/pacman.gif', sound: 'assets/audio/pacman_beginning.wav'},
  {text: 'digdug', url: 'assets/images/digdug.gif', sound: 'assets/audio/digdug.mp3'},
  {text: 'tetris', url: 'assets/images/tetris.gif', sound:'assets/audio/tetris.mp3'},
  {text: 'mariobros', url:'assets/images/mario.gif', sound: 'assets/audio/mario.mp3'},
  {text: 'frogger', url:'assets/images/frogger.gif', sound: 'assets/audio/frogger.mp3'},
  {text: 'spaceinvaders', url:'assets/images/space_invaders.gif', sound: 'assets/audio/spaceinvaders.wav'},
  {text: 'galaga', url:'assets/images/galaga.jpeg', sound: 'assets/audio/galaga.mp3'},
  {text: 'congobongo', url:'assets/images/congobongo.gif', sound: 'assets/audio/congobongo.mp3'},
  {text: 'donkeykong', url:'assets/images/donkeykong.gif', sound: 'assets/audio/donkeykong.mp3'},
  {text: 'pong', url:'assets/images/pong.gif', sound: 'assets/audio/pong.wav'},
  {text: 'tron', url:'assets/images/tron.jpeg', sound: 'assets/audio/tron.mp3'},
  {text: 'burgertime', url:'assets/images/burgertime.gif', sound: 'assets/audio/burgertime.mp3'},
  {text: 'berzerk', url:'assets/images/berzerk.png', sound: 'assets/audio/berzerk.wav'},
  {text: 'qbert', url:'assets/images/qbert.png', sound: 'assets/audio/qbert.wav'}
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
	 	var clue = word.text;
	 	var coin = new Audio('assets/audio/coin.wav');
		coin.play();
	 	var audio = new Audio(word.sound);
	 	audio.pause();
	 	console.log(clue);
	 	spentLetters = [];
	 	correctGuess = 0;
	 	tries = 10;
	 	document.getElementById("solved").innerHTML = "PLAY";
		document.getElementById("solved").className = "";
		document.getElementById("solved").style.color = "white";
	 	document.getElementById("tries").innerHTML = "LIVES: " + tries;
	 	document.getElementById("wins").innerHTML = "WINS: " + wins;
	 	document.getElementById("used").innerHTML = "WRONG GUESSES: " + spentLetters.toString().toUpperCase();
	 	document.getElementById("word").style.color = "green";
	 	document.getElementById("myImg").src = "assets/images/arcade.jpeg";


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
					document.getElementsByTagName("SPAN")[i].innerHTML = userGuess.toUpperCase();	
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
  	audio.play();
  	document.getElementById("solved").style.color = "green";
  	document.getElementById("solved").className = "blink_me";
  	document.getElementById("solved").innerHTML = "YOU WIN!";
  	wins++;
  	document.getElementById("wins").innerHTML = "WINS: " + wins;
 	document.getElementById("myImg").src = word.url;
  	

}

// Handles the incorrect guesses
		if(spentLetters.indexOf(userGuess) === -1 && clue.indexOf(userGuess) === -1){
					spentLetters.push(userGuess);
					document.getElementById("used").innerHTML = "WRONG GUESSES: " + spentLetters.toString().toUpperCase();
					tries--;
					document.getElementById("tries").innerHTML = "LIVES: " + tries;
					}
					
//if you use up all your tries, you lose.					
		if (tries === 0) {
			document.getElementById("solved").style.color = "red";
			document.getElementById("solved").innerHTML = "GAME OVER";
			document.getElementById("word").style.color = "red";
			document.getElementById("solved").className = "blink_me";
			document.getElementById("word").innerHTML = clue.toUpperCase();
			document.onkeyup = null;
			var gameOver = new Audio('assets/audio/pacman_death.wav');
			gameOver.play();

			}
}

	
 })	
})