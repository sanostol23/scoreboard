let hScore = document.getElementById("homeScore")
let gScore = document.getElementById("guestScore")
let homescore = 0
let guestscore = 0






function box1() {
   homescore += 1
   hScore.innerText = homescore
   color()
}
function box2() {
   homescore += 2
   hScore.innerText = homescore
   color()
}
function box3() {
   homescore += 3
   hScore.innerText = homescore
   color()
}
function box4() {
   guestscore += 1
   gScore.innerText = guestscore
   color()
}
function box5() {
   guestscore += 2
   gScore.innerText = guestscore
   color()
}
function box6() {
   guestscore += 3
   gScore.innerText = guestscore
   color()
}

function color() {
 	if (homescore > guestscore) {
		hScore.style.borderColor = "goldenrod";
		gScore.style.borderColor = "black"; 
		}
	else {
		if (homescore == guestscore) {
			hScore.style.borderColor = "black";
			gScore.style.borderColor = "black";
			}
			 else {
		hScore.style.borderColor = "black";
		gScore.style.borderColor = "goldenrod";
		} 
	}
} 
function newGame() {
	homescore = 0
	guestscore = 0
	hScore.innerText = homescore
	gScore.innerText = guestscore
	hScore.style.borderColor = "black";
	gScore.style.borderColor = "black";
}