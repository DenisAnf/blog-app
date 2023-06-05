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
const DISCRIPRION_MAX_LENGTH_VALUE = 20;

//указание пустого массива для ленты постов
let feed = [];


//функции вывода счетчиков символов
function showPostTitleLengthCounter() {
	postTitleLengthCounter.innerHTML = `Использовано ${postTitleNode.value.length} символов из ${TITLE_MAX_LENGTH_VALUE} доступных`
}
showPostTitleLengthCounter();
postTitleNode.addEventListener('input', showPostTitleLengthCounter);

function showPostDiscriptionLengthCounter() {
	postDiscriptionLengthCounter.innerHTML = `Использовано ${postDiscriptionNode.value.length} символов из ${DISCRIPRION_MAX_LENGTH_VALUE} доступных`
}
showPostDiscriptionLengthCounter();
postDiscriptionNode.addEventListener('input', showPostDiscriptionLengthCounter);








submitButton.addEventListener('click', function () {
	postsFeed.innerText = `${postTitleNode.value} ${postDiscriptionNode.value}`;
});
