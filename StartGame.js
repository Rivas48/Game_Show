var qwerty = document.getElementById('qwerty'),
missed = 0,
startGame = document.querySelector('.btn__reset'),
button = document.getElementsByTagName('button'),
keyboard = document.getElementsByClassName('keyrow'),
letter = document.getElementsByClassName('letter'),	 	
start = document.getElementById('overlay'),
start = document.getElementById('overlay'),
title = document.querySelector('title');
const Phrases = ["a dime a dozen", "keep on truckin", "photo finish", "all greek to me", "break a leg"],
tries = document.getElementsByClassName('tries');


startGame.addEventListener("click", (e) => {
start.style.display = 'none';
});

function getRandomPhraseAsArray(arr){
var phrases = arr[Math.floor(Math.random()*(arr.length))];
var phrases = phrases.split('');
	return phrases;
	getRandomPhraseAsArray(Phrases);
}

function createListItem(arr,index){
	var list = document.getElementById('phrase');
	var createListItem = document.createElement('li');
	var value = document.createTextNode(arr)
	var create = list.appendChild(createListItem);
	var words = create.appendChild(value);
	var liContent =list.getElementsByTagName('li')[index];
	var liNoContent =list.getElementsByTagName('li')[index].innerHTML
	return [liContent,liNoContent];
}

const phraseArray = getRandomPhraseAsArray(Phrases);
addPhraseToDisplay(phraseArray);

function addPhraseToDisplay(arr){
	console.log(arr)
	arr.map(function(arr,index){
		var content = createListItem(arr,index);

		if (content[1] !== " "){
			content[0].className = "letter";
		}
		if (content[1] === " "){
			content[0].className = "space";
		}
	})
}

function checkLetter(arr) {
		var hello = Array.from(document.querySelectorAll('.letter')),
		ButtonsPressed = arr,
		letterFound,
	 	buttonLetterPressed = RegExp(ButtonsPressed.innerHTML,'g');
	 	ButtonsPressed.setAttribute("disabled", "true");
	 	if(buttonLetterPressed.test(phraseArray.join(''))){
 		hello.map(function(letter){
 			if(letter.innerHTML === ButtonsPressed.innerHTML){
 				letter.classList.add("show")
 				ButtonsPressed.classList.add("chosen");
 				var letterFound = true;
 				return letterFound;
 			}else{
 				ButtonsPressed.classList.add("chosen");
 				var letterNotFound = false;
 				return letterFound;
 			}
 		})
 		}else{
 			var letterNotFound = false;
 			tries[missed].innerHTML = '<img src="lostHeart.png" />';
     		missed++; 
 			checkWin();
 		};
 	}

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
  }
});

