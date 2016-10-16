
	document.onkeyup = function(event) {

var answer = {	pacman: ["P","A","C","M","A","N"],
				tetris: ["T","E","T","R","I","S"] 
		
	};
		var userGuess = String.fromCharCode(event.keyCode).toUpperCase();
		if(userGuess === answer.pacman[0]) {
		document.getElementById("l0").innerHTML = userGuess;
		}
		if(userGuess === answer.pacman[1]) {
		document.getElementById("l1").innerHTML = userGuess;
		}
		if(userGuess === answer.pacman[2]) {
		document.getElementById("l2").innerHTML = userGuess;
		}
		if(userGuess === answer.pacman[3]) {
		document.getElementById("l3").innerHTML = userGuess;
		}
		if(userGuess === answer.pacman[4]) {
		document.getElementById("l4").innerHTML = userGuess;
		}
		if(userGuess === answer.pacman[5]) {
		document.getElementById("l5").innerHTML = userGuess;
		}
	}
