		
var pacman = ['P','A','C','M','A','N'];
var digdug = ['D','I','G','D','U','G'];
var mario = ['M','A','R','I','O'];
var tetris = ['T','E','T','R','I','S'];
var wins = 0;
var tries = 10;
var spentLetters = [];

document.onkeyup = function(event) {


		var userGuess = String.fromCharCode(event.keyCode).toUpperCase();
// ******* My Phat Phunction ***********************************
		function check(arr) {
			if(arr.length === 0) {
			console.log('you win');

			} else {

				for(var i = 0; i < arr.length; i++) {

				if(userGuess === arr[i]) {
					console.log(userGuess);
					arr.splice(arr.indexOf(userGuess),1);
					console.log(arr);
					} else {
						if(spentLetters.indexOf(userGuess) === -1) {
						spentLetters.push(userGuess);
						console.log(spentLetters.toString())
						tries--;
					}
				}//nested if
			}//else
		}//for loop
	} // my function
if(tries === 0) {

		console.log("game over");

	}

	check(tetris); 


 } // keycode event
