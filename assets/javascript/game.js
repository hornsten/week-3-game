var words = ['PACMAN','DIGDUG','SUPERMARIOBROS','TETRIS','CENTIPEDE','SPACEINVADERS','GALAGA',
			'ASTEROIDS','DONKEYKONG','PONG','TRON','BURGERTIME','BERZERK','QBERT'];
var word = words[Math.floor(Math.random() * words.length)];
var wins = 0;
var tries = 10;
var spentLetters = [];
var correctGuess = 0;

function getBlanks(arr) {

var htmlElements = "";
for (var i = 0; i < word.length; i++) {
   htmlElements += '<span>_</span>';
}
var blanks = document.getElementById("word");
blanks.innerHTML = htmlElements;

}


window.addEventListener("keypress", checkKeyPressed, false);
 
function checkKeyPressed(e) {
    if (e.charCode == "32") {
   	getBlanks(word);

    }
}

document.onkeyup = function(event) {

check(word);		

function check(arr) {

// adds correct letters to span elements in the DOM
		var userGuess = String.fromCharCode(event.keyCode).toUpperCase();
				
				for(var i = 0; i < arr.length; i++) {

				if(userGuess === arr[i]) {
					
					document.getElementsByTagName("SPAN")[i].innerHTML = userGuess;
					correctGuess++;
					console.log(correctGuess);
				} 

// Determines when you have won


  	}	

if(correctGuess === arr.length) {
  	wins++;
  	document.getElementById("solved").style.color = "green";
  	document.getElementById("solved").innerHTML = "You Win!";
  	document.getElementById("wins").innerHTML = wins;
}



// Handles the incorrect guesses
		if(spentLetters.indexOf(userGuess) === -1 && word.indexOf(userGuess) === -1){
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


