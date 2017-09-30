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
