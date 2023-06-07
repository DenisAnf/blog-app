//определение полей ввода поста
const postTitleNode = document.querySelector('#inputTitle');
const postDiscriptionNode = document.querySelector('#inputDiscription');

//определение кнопок
const submitButton = document.querySelector('#buttonSubmit');
const resetButton = document.querySelector('#buttonReset');

//определение места вывода постов
const postsFeedPlace = document.querySelector('#feed');

//определение места вывода счетчиков символов
const postTitleLengthCounter = document.querySelector('#inputTitleLengthCounter');
const postDiscriptionLengthCounter = document.querySelector('#inputDiscriptionLengthCounter');

//определение места вывода собщения о превышении лимита символов
const postLengthError = document.querySelector('#error');

//указание лимитов на количество символов в посте
const TITLE_LENGTH_MAX_VALUE = 10;
const DISCRIPRION_LENGTH_MAX_VALUE = 20;

//указание пустого массива для ленты постов
let feedPosts = [];

//! ФУНКЦИИ -------------------------------------------------------

//функция-конструктор поста
function Post(title, discription) {
	this.title = title;
	this.discription = discription;
}

//функция получения поста
function getPostFromUser() {
	const titlePost = postTitleNode.value;
	const discriptionPost = postDiscriptionNode.value;

	const post = new Post(titlePost, discriptionPost);

	return post;
}

//функция добавления поста в массив
function addPost(post) {
	feedPosts.push(post);
}

//функция получения массива постов
function getPostsFeed() {
	return feedPosts.reverse();
}

//функция получения текущей даты и времени
function getCurrentDate() {
	const date = new Date();
	
	return date.toLocaleString('ru-RU', {
		year: 'numeric',
		month: 'numeric',
		day: 'numeric',
		}) + ' ' +
		date.toLocaleString('ru-RU', {
			hour: 'numeric',
			minute: 'numeric',
		});
}

//функция показа ленты постов из массива
function renderPosts() {
	const showPostsFeed = getPostsFeed();

	let showPostsHTML = '';

	for (let i = 0; i < showPostsFeed.length; i++) {
		showPostsHTML += `
		<div class="post">
			<p class="post__date">${getCurrentDate()}</p> 
			<h3 class="post__title">${showPostsFeed[i].title}</h3>
			<p class="post__discription">${showPostsFeed[i].discription}</p>
		</div>
		`;
	}

	postsFeedPlace.innerHTML = showPostsHTML;
}

//функция очистки полей после добавления поста
function clearPostPlace() {
	postTitleNode.value = null;
	postDiscriptionNode.value = null;
}

//функции вывода счетчиков символов
function showPostTitleLengthCounter() {
	postTitleLengthCounter.innerText = `Использовано ${postTitleNode.value.length} символов из ${TITLE_LENGTH_MAX_VALUE}`
}

function showPostDiscriptionLengthCounter() {
	postDiscriptionLengthCounter.innerText = `Использовано ${postDiscriptionNode.value.length} символов из ${DISCRIPRION_LENGTH_MAX_VALUE}`
}

//функция очистки счетчика после добавления поста
function clearPostLengthCounter() {
	postTitleLengthCounter.innerText = null;
	postDiscriptionLengthCounter.innerText = null;
}



//! ОБРАБОТЧИКИ ---------------------------------------------------

//Обработка кнопки добавления поста
submitButton.addEventListener('click', function () {
	const postFromUser = getPostFromUser();

	addPost(postFromUser)
	renderPosts();
	clearPostPlace();
	clearPostLengthCounter();

});

//Вывод счетчиков сиволов
postTitleNode.addEventListener('input', showPostTitleLengthCounter);
postDiscriptionNode.addEventListener('input', showPostDiscriptionLengthCounter);