// ВТОРОЙ ЧЕК

/* Задание 1
Напишите функцию multiple(a, b), которая перемножает два числа между собой. Функция возвращает результат умножения.*/

function multiple(a, b) {
	return a * b;
}
console.log(multiple(10, 20));


/* Задание 2
Напишите функцию buildDate(day, month, year), которая принимает на вход числами день недели, месяц и год. Функция возвращает дату строкой в формате dd/mm/yyyy. */

function buildDate(day, month, year) {
	if (day < 10) {
		day = `0${day}`;
	}
	if (month < 10) {
		month = `0${month}`;
	}
	return `${day}/${month}/${year}`;
}
console.log(buildDate(23, 5, 2023));


/* Задание 3
Напишите функцию isAdult(age), которая принимает на вход возраст. Если возраст больше или равен 18, функция возвращает true. Иначе - false. */

const userAge = 35;
const userAdult = isAdult(userAge);
console.log(userAdult);

function isAdult(age) {
	return age > 18;
}


/* Задание 4
Напишите функцию getMonthByNumber(monthNumber), которая на вход принимает порядковый номер месяца от 1 до 12. Функция возвращает строкой название месяца (например, 'март'). Для решения задачи можно применить конструкцию switch-case (just google it). */


// 1 вариант
const monthNumberInSequence = 2;
const monthName = getMonthByNumber(monthNumberInSequence);
console.log(monthName);

function getMonthByNumber(monthNumber) {
	switch (monthNumber) {
		case 1: return 'Январь';
		case 2: return 'Февраль';
		case 3: return 'Март';
		case 4: return 'Апрель';
		case 5: return 'Май';
		case 6: return 'Июнь';
		case 7: return 'Июль';
		case 8: return 'Август';
		case 9: return 'Сентябрь';
		case 10: return 'Октябрь';
		case 11: return 'Ноябрь';
		case 12: return 'Декабрь';
		default: return 'Данное число не соответствует месяцам';
	}
}


// 2 вариант
const monthNumberInSequenceOther = 12;
const monthNameOther = getMonthByNumberOther(monthNumberInSequenceOther);

console.log(monthNameOther);

function getMonthByNumberOther(monthNumberOther) {
	if (monthNumberOther > 12 || monthNumberOther < 1) {
		return 'Данное число не соответствует месяцам';
	}
	else {
		const date = new Date();
		date.setMonth(monthNumberOther - 1);

		return date.toLocaleString('ru-RU', {
			month: 'long',
		});
	}
}


/* Задание 5
Напишите функцию convertRub(valueRub, currency), которая конвертирует рубли в другие валюты. Функция принимает число в рублях и валюту для перевода строкой ('USD', 'EUR', 'KZT', 'AED'). Функция возвращает результат конвертации. Для решения задачи можно применить конструкцию switch-case (just google it). */

const RUB = 5000;
const convertRates = 'AED'

const RUB_USD_EXCHANGE_RATE = 0.01251;
const RUB_EUR_EXCHANGE_RATE = 0.011561;
const RUB_KZT_EXCHANGE_RATE = 5.61;
const RUB_AED_EXCHANGE_RATE = 0.045926;


let convertValue = convertRub(RUB, convertRates);
console.log(`${RUB} RUB = ${convertValue} ${convertRates}`);

/* function convertRub(valueRub, currency) {
	const RATES = {
		USD: 0.01251,
		EUR: 0.011561,
		KZT: 5.61,
		AED: 0.045926,
	};

	if (currency in RATES) {
		let result = valueRub * RATES[currency];
		return Math.round(result*100)/100;
	} else {
		return 'Неверно указано обозначение валюты, вместо ${convertRates} используйте USD, EUR, KZT или AED';
	}
}*/


// 2 вариант

function convertRub(valueRub, currency) {
	let result;

	switch (currency) {
		case 'USD': result = Math.round((valueRub * RUB_USD_EXCHANGE_RATE) * 100) / 100;
			break;
		case 'EUR': result = Math.round((valueRub * RUB_EUR_EXCHANGE_RATE) * 100) / 100;
			break;
		case 'KZT': result = Math.round((valueRub * RUB_KZT_EXCHANGE_RATE) * 100) / 100;
			break;
		case 'AED': result = Math.round((valueRub * RUB_AED_EXCHANGE_RATE) * 100) / 100;
			break;
		default: result = `Неверно указано обозначение валюты, вместо ${convertRates} используйте USD, EUR, KZT или AED`;
	}

	return result;
}




//___________________________________________________________________________________________________________________________

// ВТОРОЙ ЧЕК

/* Задание 1
Напишите функцию printNumbers, которая выводит в консоль числа от -10 до 10. */

printNumbers();

function printNumbers() {
	for (let i = -10; i <= 10; i++) {
		console.log(i);
	}
}


/* Задание 2

Напишите функцию printNumbersByRange(start, end), которая выводит в консоль числа в диапазоне. Диапазон задается начальным и конечным числом. Например, в результате вызова функции с параметрами -3 и 2 (printNumbersByRange(-3, 2) в консоль выводятся числа: -3, -2, -1, 0, 1, 2. */

printNumbersByRange(-3, 2);

function printNumbersByRange(start, end) {
	for (let i = start; i <= end; i++) {
		console.log(i);
	}
}


/* Задание 3

Напишите функцию calculateNumbersSum(numbers), которая на вход принимает массив чисел и возвращает сумму этих чисел. Например, calculateNumbersSum([0, 1, 2, 4, 8] возвращает 15. */

const numbers = [0, 1, 2, 4, 8];
const numbersSum = calculateNumbersSum(numbers);
console.log(numbersSum);

function calculateNumbersSum(numbers) {
	let sum = 0;
	for (let i = 0; i < numbers.length; i++) {
		sum += numbers[i];
	}
	return sum;
}

/* Задание 4

Напишите функцию includes(numbers, number), которая на вход принимает массив чисел и число. Если число есть в массиве чисел, функция возвращает true, иначе - false. */

const numbersOther = [0, 1, 2, 4, 8];
const number = 7;
const doIncludeNumber = includes(numbersOther, number);
console.log(doIncludeNumber);

function includes(numbers, number) {
	for (let i = 0; i < numbers.length; i++) {
		if (numbers[i] === number) {
			return true;
		}
	}
	return false;
}

/* другой вариант функции

function includes(numbersOther, number) {
  return numbersOther.includes(number);
};*/



/* Задание 5

Напишите функцию createPerson(name, surname, age). Функция принимаем имя человека, фамилию и возраст. Функция возвращает объект с полями name, surname, age. */

const person = createPerson('Денис', 'А', 35);
console.log(person);

function createPerson(name, surname, age) {
	return {
		name: name,
		surname: surname,
		age: age
	};
}


/* Задание 6

Напишите функцию findOldest(people). Функция принимает массив из объектов. Каждый объект создайте через функцию createPerson. Функция возвращает имя самого старшего человека. */


const personOne = createPerson('Денис', 'А', 35);
const personTwo = createPerson('Алексей', 'А', 30);
const personThree = createPerson('Сергей', 'А', 35);
const personFour = createPerson('Полина', 'А', 20);

const peopleAll = [personOne, personTwo, personThree, personFour];

const oldestPeopleName = findOldest(peopleAll);
console.log(oldestPeopleName);

function createPerson(name, surname, age) {
	return {
		name: name,
		surname: surname,
		age: age
	};
}

function findOldest(people) {
	let oldestAge = 0;
	let oldestPeople = [];

	for (let i = 0; i < people.length; i++) { //people.forEach(currentPerson =>
		const currentPerson = people[i]; 
		if (currentPerson.age > oldestAge) {
			oldestAge = currentPerson.age;
			oldestPeople = [currentPerson.name];
		} else if (currentPerson.age === oldestAge) {
			oldestPeople.push(currentPerson.name);
		}
	};

	return oldestPeople;
	}