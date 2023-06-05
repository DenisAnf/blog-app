const titleValue = document.querySelector('#inputTitle');
console.log(titleValue)
const buttonSubmit = document.querySelector('#buttonSubmit');

const feed = document.querySelector('#feed');

const TITLE_MAX_VALUE = 10;

buttonSubmit.addEventListener('click', function () {
	feed.innerText = titleValue;
});
