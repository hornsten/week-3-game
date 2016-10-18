var pacman = "PACMAN";
var digdug = ['D','I','G','D','U','G'];
var mario = ['M','A','R','I','O'];
var tetris = ['T','E','T','R','I','S'];
var centipede = "CENTIPEDE";
var wins = 0;
var tries = 10;
var spentLetters = [];

// window.addEventListener("keydown", startGame, false);


// function startGame(e) {
    // gets called when any key is pressed

// var myNode = document.getElementById("word");
// while (myNode.firstChild) {
//     myNode.removeChild(myNode.firstChild);
// }

// }

function getBlanks(arr) {

var htmlElements = "";
for (var i = 0; i < arr.length; i++) {
   htmlElements += '<span>_</span>';
}
var word = document.getElementById("word");
word.innerHTML = htmlElements;

}

		
		document.onkeyup = function(event) {

getBlanks(centipede);
check(centipede);		

function check(arr) {

// adds correct letters to span elements in the DOM
		var userGuess = String.fromCharCode(event.keyCode).toUpperCase();
				
				for(var i = 0; i < arr.length; i++) {

				if(userGuess === arr[i]) {
					
					document.getElementsByTagName("SPAN")[i].innerHTML = userGuess;

				} 

		}

// Handles the incorrect guesses
		if(spentLetters.indexOf(userGuess) === -1 && arr.indexOf(userGuess) === -1){
					spentLetters.push(userGuess);
					document.getElementById("used").innerHTML = spentLetters.toString();
					tries--;
					document.getElementById("tries").innerHTML = tries;
					}
//if you use up all your tries, you lose.					
		if (tries === 0) {
			document.getElementById("solved").innerHTML = "you lose";
			}
			
		} 

	}


