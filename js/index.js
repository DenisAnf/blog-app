//определение полей ввода поста
const postTitleNode = document.querySelector('#inputTitle');
const postDiscriptionNode = document.querySelector('#inputDiscription');

//определение кнопок
const submitButton = document.querySelector('#buttonSubmit');
const resetButton = document.querySelector('#buttonReset');

//определение места вывода постов
const postsFeedPlace = document.querySelector('#feed');

//определение места вывода счетчиков символов и предупреждений "напиши..."
const postTitleError = document.querySelector('#inputTitleError');
const postDiscriptionError = document.querySelector('#inputDiscriptionError');
const postTitleLengthCounter = document.querySelector('#inputTitleLengthCounter');
const postDiscriptionLengthCounter = document.querySelector('#inputDiscriptionLengthCounter');

//определение места вывода собщения о превышении лимита символов
const postLengthError = document.querySelector('#error');

//указание лимитов на количество символов в посте
const TITLE_LENGTH_MAX_VALUE = 50;
const DISCRIPRION_LENGTH_MAX_VALUE = 200;

//указание текстов предупреждений
const TITLE_ERROR_TEXT = 'Напиши заголовок';
const DISCRIPRION_ERROR_TEXT = 'Напиши текст поста';

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
	return feedPosts;
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

//функция очистки полей
function clearPost() {
	postTitleNode.value = null;
	postDiscriptionNode.value = null;
	postTitleLengthCounter.innerText = null;
	postDiscriptionLengthCounter.innerText = null;
	postLengthError.innerText = null;
	disabledSubmitButton();
	postTitleError.innerText = '';
	postDiscriptionError.innerText = '';
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

//функции вывода счетчиков символов
function showPostTitleLengthCounter() {
	postTitleLengthCounter.innerText = `${postTitleNode.value.length} / ${TITLE_LENGTH_MAX_VALUE}`;
}

function showPostDiscriptionLengthCounter() {
	postDiscriptionLengthCounter.innerText = `${postDiscriptionNode.value.length} / ${DISCRIPRION_LENGTH_MAX_VALUE}`;
}

//функция проверки пустого поста (сразу вызывается, чтобы по умолчанию заблокировать кнопку)
function checkLengthNull() {
	const titleLength = postTitleNode.value.length;
	const discriptionLength = postDiscriptionNode.value.length;

	if (titleLength === 0 || discriptionLength === 0) {
		disabledSubmitButton();
		postTitleNode.focus(); //фокус на поле заголовка при старте
		return;
	}
	unDisabledSubmitButton();
};
checkLengthNull();

//функция проверки количества символов на превышение лимита
function validation() {
	const titleLength = postTitleNode.value.length;
	const discriptionLength = postDiscriptionNode.value.length;

	//константы для проверки на использование только пробелов
	const titleWithoutSpace = postTitleNode.value.replace(/\s/g, '');
	const titleLengthWithoutSpace = titleWithoutSpace.length;
	const discriptionWithoutSpace = postDiscriptionNode.value.replace(/\s/g, '');
	const discriptionLengthWithoutSpace = discriptionWithoutSpace.length;

	//часть проверки на превышение лимита заголовка поста
	if (titleLength > TITLE_LENGTH_MAX_VALUE) {
		disabledSubmitButton();
		////postTitleLengthCounter.classList.add('input__title-length_error');
		postLengthError.innerText = `Длина заголовка не должна превышать ${TITLE_LENGTH_MAX_VALUE} символов`;
		return;
	};

	//часть проверки на превышение лимита текста поста
	if (discriptionLength > DISCRIPRION_LENGTH_MAX_VALUE) {
		disabledSubmitButton();
		////postDiscriptionLengthCounter.classList.add('input__discription-length_error');
		postLengthError.innerText = `Длина поста не должна превышать ${DISCRIPRION_LENGTH_MAX_VALUE} символов`;
		return;
	};

	postLengthError.innerText = null;

	if (titleLength === 0 || titleLengthWithoutSpace === 0) {
		postTitleError.innerText = TITLE_ERROR_TEXT;
		disabledSubmitButton();
		return;
	}
	
	postTitleError.innerText = '';

	if (discriptionLength === 0 || discriptionLengthWithoutSpace === 0) {
		postDiscriptionError.innerText = DISCRIPRION_ERROR_TEXT;
		disabledSubmitButton();
		return;
	}
	
	postDiscriptionError.innerText = '';

	//включение кнопки если все условия пройдены
	unDisabledSubmitButton();
	////postTitleLengthCounter.classList.remove('input__title-length_error');
	////postDiscriptionLengthCounter.classList.remove('input__discription-length_error');
}

//итоговая функция добавления поста
function getPost() {
	//основное тело функции добавления поста
	const postFromUser = getPostFromUser();

	addPost(postFromUser)
	renderPosts();
	clearPost();

	//отключение кнопки после добавления поста
	disabledSubmitButton();
};

//функция смены фокуса по Enter
function transitionFocusByEnter(event) {
	if (event.keyCode === 13) {
		event.preventDefault();

		const inputs = document.querySelectorAll("input, textarea, button");

		let inputsElement = Array.from(inputs).filter(function(element) {
			return element.getAttribute("tabindex") !== null;
		});
		let currentInput = event.target;
		let currentIndex = inputsElement.findIndex(function(element) {
			return element === currentInput;
		});

		let nextIndex = ++currentIndex;
		if (nextIndex < inputsElement.length) {
			inputsElement[nextIndex].focus();
		}
  }
};

//функция отправки по Enter (обходит валидацию)
/*function renderByEnter(event) {
	if (event.keyCode === 13) {
		event.preventDefault();

		getPost();
  }
};*/



//! ОБРАБОТЧИКИ ---------------------------------------------------

//Обработка кнопки добавления поста
submitButton.addEventListener('click', getPost);

//Обработка кнопки очистки полей поста
resetButton.addEventListener('click', clearPost);

//Вывод счетчиков сиволов
postTitleNode.addEventListener('input', showPostTitleLengthCounter);
postDiscriptionNode.addEventListener('input', showPostDiscriptionLengthCounter);

//Вывод предупреждения о длине поста + запрет на отправку слишком длинного и пустого поста
postTitleNode.addEventListener('input', validation);
postDiscriptionNode.addEventListener('input', validation);

//Переход по Enter с заголовка на поле теста поста
postTitleNode.addEventListener("keydown", transitionFocusByEnter);
////postDiscriptionNode.addEventListener("keydown", renderByEnter);