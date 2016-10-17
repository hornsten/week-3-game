		
var pacman = ['P','A','C','M','A','N'];
var digdug = ['D','I','G','D','U','G'];
var mario = ['M','A','R','I','O'];
var wins = 0;
var spentLetters = [];

document.onkeyup = function(event) {


		var userGuess = String.fromCharCode(event.keyCode).toUpperCase();

		function check(arr) {

			for(var i = 0; i < arr.length; i++) {

				if(userGuess === arr[i]) {
					console.log(userGuess);
					arr.splice(arr.indexOf(userGuess),1);
					console.log(arr);
					if(arr.length === 0) {
						console.log("done");
						wins++;
						
					 
					}

				}

			}
		}
	check(mario);
	
		if(mario.length === 0) {
		check(pacman);
	}
	console.log(wins);
}

	


			// if(spentLetters.indexOf(userGuess) === -1 && tries > 0) {
			// spentLetters.push(userGuess);
			// console.log(spentLetters.toString());
				// tries--;
			// console.log(tries);
			// }

