`use strict`;

const buttonNext = document.querySelector(".arrowNext");

const buttonPrevious = document.querySelector(".arrowPrevious");

const li = document.querySelectorAll("li");

let indexNext = 0;

let indexPrevious = li.length;

function nextImage() {
	
	indexNext++;

	if (indexNext == li.length) {
		indexNext = 0;
	}

	for (let i = 0; i < li.length; i++) {
		
		li[i].classList.remove("active");

	}

	li[indexNext].classList.add("active");
}

function nextImageWithArrowKeyboard(event) {

	if (event.keyCode === 39) {
		nextImage();	
	}
}

function previousImage() {

	indexPrevious--;

	if (indexPrevious < 0) {
		indexPrevious = li.length-1;
	}

	for (let i = li.length-1; i >= 0 ;i--) {
		li[i].classList.remove("active");
	}

	li[indexPrevious].classList.add("active");
}

function previousImageWithArrowKeyboard(event) {
	
	if (event.keyCode === 37) {
		previousImage();
	}
}

buttonNext.addEventListener("click", nextImage);

buttonPrevious.addEventListener("click", previousImage);

document.addEventListener("keyup", nextImageWithArrowKeyboard);

document.addEventListener("keyup", previousImageWithArrowKeyboard);
