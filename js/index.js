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

//функция-конструктор поста
function Post(time, title, discription) {
	this.time = time;
	this.title = title;
	this.discription = discription;
}

//функция получения поста
function getPostFromUser() {
	const timePost = getCurrentDate();
	const titlePost = postTitleNode.value;
	const discriptionPost = postDiscriptionNode.value;

	const post = new Post(timePost, titlePost, discriptionPost);

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

//функция показа ленты постов из массива
function renderPosts() {
	const showPostsFeed = getPostsFeed();

	let showPostsHTML = '';

	for (let i = 0; i < showPostsFeed.length; i++) {
		showPostsHTML += `
		<div class="post">
			<p class="post__date">${showPostsFeed[i].time}</p> 
			<h3 class="post__title">${showPostsFeed[i].title}</h3>
			<p class="post__discription">${showPostsFeed[i].discription}</p>
		</div>
		`;
	}

	postsFeedPlace.innerHTML = showPostsHTML;
}

//функции вывода счетчиков символов
function showPostTitleLengthCounter() {
	postTitleLengthCounter.innerText = `Использовано ${postTitleNode.value.length} символов из ${TITLE_LENGTH_MAX_VALUE}`;
}

function showPostDiscriptionLengthCounter() {
	postDiscriptionLengthCounter.innerText = `Использовано ${postDiscriptionNode.value.length} символов из ${DISCRIPRION_LENGTH_MAX_VALUE}`;
}

//функция очистки счетчика и предупреждения
function clearPostLengthCounter() {
	postTitleLengthCounter.innerText = null;
	postDiscriptionLengthCounter.innerText = null;
}

//функция очистки полей
function clearPostPlace() {
	postTitleNode.value = null;
	postDiscriptionNode.value = null;
}

//функция выключения кнопки отправить
function disabledSubmitButton() {
	submitButton.disabled = true;
	submitButton.classList.add('button__disabled');
}

//функция включения кнопки отправить
function unDisabledSubmitButton() {
	submitButton.disabled = false;
	submitButton.classList.remove('button__disabled');
}

//функция проверки пустого поста (сразу вызывается, чтобы по умолчанию заблокировать кнопку)
function checkLengthNull() {
	const titleLength = postTitleNode.value.length;
	const discriptionLength = postDiscriptionNode.value.length;

	if (titleLength === 0 || discriptionLength === 0) {
		disabledSubmitButton();
		return;
	}
	unDisabledSubmitButton();
}
checkLengthNull();

//функция проверки количества символов на превышение лимита
function checkLengthMax() {
	const titleLength = postTitleNode.value.length;
	const discriptionLength = postDiscriptionNode.value.length;

	////часть проверки на пустые поля
	////if (titleLength === 0 || discriptionLength === 0) {
	////	submitButton.disabled = true;
	////	submitButton.classList.add('button__disabled');
	////	return;
	////};

	if (titleLength > TITLE_LENGTH_MAX_VALUE) {
		disabledSubmitButton();
		////postTitleLengthCounter.classList.add('input__title-length_error');
		postLengthError.innerText = `Длина заголовка не должна превышать ${TITLE_LENGTH_MAX_VALUE} символов`;
		return;
	};

	if (discriptionLength > DISCRIPRION_LENGTH_MAX_VALUE) {
		disabledSubmitButton();
		////postDiscriptionLengthCounter.classList.add('input__discription-length_error');
		postLengthError.innerText = `Длина поста не должна превышать ${DISCRIPRION_LENGTH_MAX_VALUE} символов`;
		return;
	};

	unDisabledSubmitButton();
	////postTitleLengthCounter.classList.remove('input__title-length_error');
	////postDiscriptionLengthCounter.classList.remove('input__discription-length_error');
	postLengthError.innerText = null;
}


//! ОБРАБОТЧИКИ ---------------------------------------------------

//Обработка кнопки добавления поста
submitButton.addEventListener('click', function () {
	//проверка на пустые поля аналогично функции
	const titleLength = postTitleNode.value.length;
	const discriptionLength = postDiscriptionNode.value.length;
	
	if (titleLength === 0 || discriptionLength === 0) {
		disabledSubmitButton();
		return;
	};

	//основное тело функции дбавления поста
	const postFromUser = getPostFromUser();

	addPost(postFromUser)
	renderPosts();
	clearPostPlace();
	clearPostLengthCounter();

	//отключение кнопки после добавления поста
	disabledSubmitButton();
});

//Обработка кнопки очистки полей поста
resetButton.addEventListener('click', function () {
	clearPostPlace();
	clearPostLengthCounter();
	postLengthError.innerText = null;
});

//Вывод счетчиков сиволов
postTitleNode.addEventListener('input', showPostTitleLengthCounter);
postDiscriptionNode.addEventListener('input', showPostDiscriptionLengthCounter);

//Вывод предупреждения о длине поста + запрет на отправку слишком длинного
postTitleNode.addEventListener('input', checkLengthMax);
postDiscriptionNode.addEventListener('input', checkLengthMax);