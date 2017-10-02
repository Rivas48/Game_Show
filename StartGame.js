var qwerty = document.getElementById('qwerty');
var missed = 0;
var startGame = document.querySelector('.btn__reset');
const Phrases = ["a dime a dozen", "keep on truckin", "photo finish", "all greek to me", "break a leg"];
var button = document.getElementsByTagName('button');
var keyboard = document.getElementsByClassName('keyrow');
const tries = document.getElementsByClassName('tries')
var letter = document.getElementsByClassName('letter');	 	
var start = document.getElementById('overlay');


startGame.addEventListener("click", (e) => {
var start = document.getElementById('overlay');
var title = document.querySelector('title');
start.style.display = 'none';

});

function getRandomPhraseAsArray(arr){
var phrases = arr[Math.floor(Math.random()*(arr.length))];
var phrases = phrases.split('');
	return phrases;
	getRandomPhraseAsArray(Phrases);
}

const phraseArray = getRandomPhraseAsArray(Phrases);
addPhraseToDisplay(phraseArray);

function addPhraseToDisplay(arr){
	for (i=0 ; i < arr.length  ; i++) {
		var list = document.getElementById('phrase');
		var createListItem = document.createElement('li');
		var value = document.createTextNode(phraseArray[i])
		var create = list.appendChild(createListItem);
		var words = create.appendChild(value);
		var liContent =list.getElementsByTagName('li')[i]
		var liNoContent =list.getElementsByTagName('li')[i].innerHTML
		if (liNoContent !== " "){
			liContent.className = "letter";
		}
			if (liNoContent === " "){
				liContent.className = "space";
			}
		

	}
}




function checkLetter(arr) {
	 	for (var i = 0 ; i < letter.length;i++ ) {
 		var BUTTONS = arr ;
 		var letterListItem = letter[i]
 		var displayLetter = letterListItem.innerHTML;
 		var buttonLetter = BUTTONS.innerHTML;
 		arr.setAttribute("disabled", "true");

	 	if ( buttonLetter === displayLetter ){
	 		letter[i].classList.add("show");
	 		BUTTONS.classList.add("chosen");
	 		var letterFound = buttonLetter;

	 	}else{
	 		BUTTONS.classList.add("chosen");	 
	 			 }
			}
	if (letterFound) {
    return letterFound;
	} else {
    console.log("THIS IS INCREDIBLY SAD");
    return null;
	}
	checkWin();
};
	

function checkWin() {
  let letters = document.getElementsByClassName('letter').length;
  let matches = document.getElementsByClassName('show').length;
  if (matches === letters) {
  	start.style.display = "flex";
   start.className = "win a";
   startGame.addEventListener("click", (e) => {
	window.location.reload();
});
  } else if (missed === 5) {
  	start.style.display = "flex";
   start.className = "lose a";
   startGame.addEventListener("click", (e) => {
	window.location.reload();
});
  }


}

qwerty.addEventListener('click', (event) => {
  if (event.target.tagName == "BUTTON") {
    let button = event.target;
    console.log("Button " + button.textContent + " Clicked")
    button.classList.add("chosen");
    let letterFound = checkLetter(button);
    checkWin();
    
    // Scoring
    if (letterFound == null) {
      tries[missed].innerHTML = '<img src="lostHeart.png" />';

      missed++; 
      checkWin();
      console.log("You've now missed " + missed);
    }
    
  }
});


	

