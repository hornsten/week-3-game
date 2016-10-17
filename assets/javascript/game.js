var pacman = ['P','A','C','M','A','N'];
var digdug = ['D','I','G','D','U','G'];
var mario = ['M','A','R','I','O'];
var tetris = ['T','E','T','R','I','S'];
var wins = 0;
var tries = 10;
var spentLetters = [];

// ******* My Function ***********************************
		
		function check(arr) {
		document.onkeyup = function(event) {
		var userGuess = String.fromCharCode(event.keyCode).toUpperCase();
				
				for(var i = 0; i < arr.length; i++) {

				if(userGuess === arr[i]) {
					arr.splice(arr.indexOf(userGuess),1);
					console.log(arr);
					} 
				
		}//for loop

		if(spentLetters.indexOf(userGuess) === -1 && arr.indexOf(userGuess) === -1){
					spentLetters.push(userGuess);
					document.getElementById("used").innerHTML = spentLetters.toString();
					tries--;
					document.getElementById("tries").innerHTML = tries;
					}
		if(arr.length === 0 && tries > 0) {
			wins++;
			document.getElementById("wins").innerHTML = wins;
			document.getElementById("solved").style.color="green";
			document.getElementById("solved").innerHTML = "you win!";
			} 

			if (arr.length > 0 && tries === 0) {
			document.getElementById("solved").innerHTML = "you lose";
			}

		}
		
	} // my function

check(mario);
