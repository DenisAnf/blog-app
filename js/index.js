//определение поста
const postTitleNode = document.querySelector('#inputTitle');
const postDiscriptionNode = document.querySelector('#inputDiscription');

//определение кнопок
const submitButton = document.querySelector('#buttonSubmit');
const resetButton = document.querySelector('#buttonReset');

//определение места вывода постов
const postsFeed = document.querySelector('#feed');

//определение места вывода счетчиков символов
const postTitleLengthCounter = document.querySelector('#inputTitleLengthCounter');
const postDiscriptionLengthCounter = document.querySelector('#inputDiscriptionLengthCounter');

//определение места вывода собщения о превышении лимита символов
const postLengthError = document.querySelector('#error');

//указание лимитов на количество символов в посте
const TITLE_MAX_LENGTH_VALUE = 10;
const DISCRIPRION_MAX_LENGTH_VALUE = 10;

//указание пустого массива для ленты постов
let feed = [];

submitButton.addEventListener('click', function () {
	postsFeed.innerText = `${postTitleNode.value} ${postDiscriptionNode.value}`;
});
