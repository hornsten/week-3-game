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

// When document is loaded, click button to start.  startButton chooses a random 
// arcade game for the player to guess.  Everything but wins will be refreshed each
//time the game is played.

$(document).ready(function(){

var startButton = $("#start").on("click", function(){
        var word = words[Math.floor(Math.random() * words.length)];
	 	var clue = word.text;
	 	var coin = new Audio('assets/audio/coin.wav');
		coin.play();
	 	var audio = new Audio(word.sound);
	 	audio.pause();
	 	spentLetters = [];
	 	correctGuess = 0;
	 	tries = 10;
	 	document.getElementById("solved").innerHTML = "1 UP";
		document.getElementById("solved").className = "";
		document.getElementById("solved").style.color = "purple";
	 	document.getElementById("tries").innerHTML = "LIVES: " + tries;
	 	document.getElementById("wins").innerHTML = "WINS: " + wins;
	 	document.getElementById("used").innerHTML = "WRONG GUESSES: " + spentLetters.toString().toUpperCase();
	 	document.getElementById("word").style.color = "green";
	 	document.getElementById("myImg").src = "assets/images/arcade.jpeg";


//This for loop creates a <span> element for each letter of the chosen word and paints the blanks onto the DOM.
	var htmlElements = "";
	for (var i = 0; i < clue.length; i++) {
   	htmlElements += '<span>_</span>';
	}
	var blanks = document.getElementById("word");
	blanks.innerHTML = htmlElements;

/*After the user presses a key, this function loops through the chosen word (var clue) to find out
	whether that letter is in the word.  If so, it puts the letter into the corresponding <span> element.
	Then, it applies the class "filled" to that <span>.*/

document.onkeyup = function(event) { 

var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
				
				for(var i = 0; i < clue.length; i++) {

				if(userGuess === clue[i]) {
					document.getElementsByTagName("SPAN")[i].innerHTML = userGuess.toUpperCase();	
					var applyClass = document.getElementById("word");
					applyClass.getElementsByTagName("SPAN")[i].className = "filled";
					
				}
  	}	


/* Determines when the user has won the game by comparing the number of "filled" <spans> with the
	number of letters in the word.  If the user has won, a song and image representing the clue pop up.
	Wins increase by 1, and the game restarts automatically after 5 seconds.*/

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
 		setTimeout(function(){
 			startButton.click();
 			audio.pause();
			},5000); 
}

/*If the player guesses incorrectly, the used letters are pushed into an array called spentLetters.
	I also make sure that the letter is not already in the array, so that the player can only use
	each letter once.*/

		if(spentLetters.indexOf(userGuess) === -1 && clue.indexOf(userGuess) === -1){
					spentLetters.push(userGuess);
					document.getElementById("used").innerHTML = "WRONG GUESSES: " + spentLetters.toString().toUpperCase();
					tries--;
					document.getElementById("tries").innerHTML = "LIVES: " + tries;
					}
					
/*If there are no more tries left, the player loses.  The clue is displayed in red, GAME OVER flashes,
and a losing sound plays.  The game restarts automatically after 2 seconds.*/

		if (tries === 0) {
			document.getElementById("solved").style.color = "red";
			document.getElementById("solved").innerHTML = "GAME OVER";
			document.getElementById("word").style.color = "red";
			document.getElementById("solved").className = "blink_me";
			document.getElementById("word").innerHTML = clue.toUpperCase();
			document.onkeyup = null;
			var gameOver = new Audio('assets/audio/pacman_death.wav');
			gameOver.play();
			setTimeout(function(){
 				startButton.click();
 				audio.pause();
				},2000); 
			}
		}
 	})	
})
