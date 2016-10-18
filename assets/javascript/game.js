var pacman = "PACMAN";
var digdug = ['D','I','G','D','U','G'];
var mario = ['M','A','R','I','O'];
var tetris = ['T','E','T','R','I','S'];
var centipede = "CENTIPEDE";
var wins = 0;
var tries = 10;
var spentLetters = [];


		function check(arr) {

		document.onkeyup = function(event) {

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
		


check(tetris);
