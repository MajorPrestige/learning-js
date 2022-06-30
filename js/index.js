"use strict";

// function checkForSpam(message) {
// 	let result;
// 	const messageNormilized = message.toLowerCase();
// 	result = messageNormilized.includes("sale" || "spam");
// 	console.log(result);
// 	return result;
// }

// checkForSpam("Amazing SPAM, only tonight!");
// checkForSpam("Amazing SALE, only tonight!");

// let iterator = 0;
// while (iterator <= 50) {
// 	console.log(iterator);
// 	iterator += 1;
// }

// console.log(iterator);

// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
// 	console.log(clientCounter);
// 	clientCounter += 1;
// }

// console.log(clientCounter);

// Запитати в користувача його ім'я, прізвище та вік за допомогою prompt
// Записати всі відповіді на змінні і вивести в консоль:
// User's full name is [name] [lastName]. He is [age] years old.

// const userName = prompt("your name?");
// const patronymic = prompt("yout patronymic?");
// const age = prompt("your age?");

// console.log(`User's full name is ${userName} ${patronymic}. He is ${age} years old.`);

// Написати програму, яка переведе введену оцінку студента у болонський формат
// 89 – 100 це A,  75 – 88 це В, 60 – 74 це С, 45 – 59 це D,  20 – 44 це Е, до 20 це F

// const grade = Number.parseInt(prompt("Enter your grade from 0 to 100"));

// if (grade < 20 && grade >= 0) {
// 	console.log("Your grade is F");
// } else if (grade >= 20 && grade <= 44) {
// 	console.log("Your grade is E");
// } else if (grade >= 45 && grade <= 59) {
// 	console.log("Your grade is D");
// } else if (grade >= 60 && grade <= 74) {
// 	console.log("Your grade is C");
// } else if (grade >= 75 && grade <= 88) {
// 	console.log("Your grade is C");
// } else if (grade >= 89 && grade <= 100) {
// 	console.log("Your grade is A");
// } else {
// 	console.log("You entered an incorrect grade");
// }

// Використовуючи конструкцію if..else, напишіть код, який перевіряє, чи вистачає користувачу грошей на таксі :)
// Якщо так, показати 'Let`s go!', якщо ні 'Not enough'.

// const taxiPrice = 100;
// const cash = Number.parseInt(prompt("Enter your cash"));

// if (cash >= taxiPrice) {
// 	console.log("Let`s go!");
// } else {
// 	console.log("Not enough");
// }

// const message = cash >= taxiPrice ? "Let`s go!" : "Not enough";

// console.log(message);

// Використовуючи конструкцію if..else, напишіть код, який запитуватиме: 'What is your budget for the trip?'.
// Якщо більше або дорівнює 20000, показати: 'Welcome to Turkey',
// якщо більше або 15000, то показати: 'Welcome to Egypt',
// якщо більше або 10000, то показати: 'Welcome to Bulgaria',
// якщо більше або дорівнює 5000, то показати: 'Welcome to Truskavets',
// інакше – відобразити: 'Go to work'

// Напишіть програму, яка буде находити сумму, різницю, множення, частку двох чисел.
// Користувач вводить 2 числа, потім вводить знак операції і отримує результат у форматі
// "Сумма чисел a i b дорівнює result" (шаблон для кожного відповіді)

// const firstNumber = Number.parseFloat(prompt("Enter first number"));
// const secondNumber = Number.parseFloat(prompt("Enter second number"));
// const operation = prompt("Enter your operation");
// let result;

// switch (operation) {
// 	case "+":
// 		result = `Сума чисел ${firstNumber} i ${secondNumber} дорівнює ${firstNumber + secondNumber}`;
// 		alert(result);
// 		break;

// 	case "-":
// 		result = `Різниця чисел ${firstNumber} i ${secondNumber} дорівнює ${firstNumber - secondNumber}`;
// 		alert(result);
// 		break;

// 	case "*":
// 		result = `Добуток чисел ${firstNumber} i ${secondNumber} дорівнює ${firstNumber * secondNumber}`;
// 		alert(result);
// 		break;

// 	case "/":
// 		result = `Частка чисел ${firstNumber} i ${secondNumber} дорівнює ${firstNumber / secondNumber}`;
// 		alert(result);
// 		break;

// 	default:
// 		alert("Ми не можемо зробити цю операцію");
// }

// const clients = ["Mango", "Poly", "Ajax"];

// clients[0] = "Bar";
// const lastElementIndex = clients.length - 1;
// console.log(lastElementIndex);
// console.log(clients[lastElementIndex]);
// console.log(clients[clients.length - 1]);

// for (let i = 0; i < clients.length; i += 1) {
// 	console.log(clients[i]);
// }

// for (const client of clients) {
// 	console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
// 	console.log(character);
// }

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// for (let i = 0; i < numbers.length; i += 1) {
// 	if (numbers[i] < threshold) {
// 		continue;
// 	}

// 	console.log(`Число більше за ${threshold}: ${numbers[i]}`);
// }

// const name = "Mango";
// console.log(name.split(" ")); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript это интересно";
// console.log(message.split(" ")); // ["JavaScript", "это", "интересно"]

// const numbers = [1, 2, 3, 4, 5];

// numbers.pop(); //  5
// console.log(numbers); // [1, 2, 3, 4]

// const clients = ["Mango", "Ajax", "Poly", "Kiwi", "Bar"];
// console.log(clients.slice(2, 4));
// console.log(clients.splice(0, 3));
// console.log(clients);

// const totalMinutes = Number.parseInt(prompt("Введіть кількість хвилин."));
// const restMinutes = totalMinutes % 60;
// const hours = Number.parseInt(totalMinutes / 60);

// if (restMinutes === 0) {
// 	console.log(`Зараз рівно ${hours} години`);
// } else {
// 	console.log(`Зараз ${hours} години, ${restMinutes} хвилин(а).`);
// }
// const genres = ["Jazz", "Blues"];
// genres.concat("Rock");

// console.log(genres[0]);
// console.log(genres[genres.length - 1]);

// console.log(genres.shift());

// genres.unshift("Country", "Regy");
// console.table(genres);

// const arr1 = [1, 2, 3];
// const arr2 = arr1;

// console.log(arr1);
// console.log(arr2);

// arr1.push(4);

// console.log(arr1);
// console.log(arr2);

// const names = "Jacob,William";
// const phones = "983913,32913919";

// const namesArr = names.split(",");
// const phonesArr = phones.split(",");

// console.log(`${namesArr[0]} : ${phonesArr[

// const userLog = prompt("Вкажіть ваш логін");

// const userAdmin = "admin";
// const userAdminNormilized = userAdmin.toLowerCase();

// console.log(userLog);
// if (!userLog) {
// 	console.log("Cancelled");
// } else if (userLog.toLowerCase() !== userAdminNormilized) {
// 	console.log("I don`t know you");
// } else {
// 	const userPass = prompt("Вкажіть ваш пароль");
// 	if (userPass === "I am the boss") {
// 		console.log("Hello!");
// 	} else {
// 		console.log("Wrong password");
// 	}
// }

// function getExtremeElements(array) {
// 	// Change code below this line
// 	const firstElementArray = array[0];
// 	const lastElementArray = array[array.length - 1];
// 	const lastAndFirstElementArray = firstElementArray.concat(lastElementArray);

// 	return lastAndFirstElementArray;
// 	// Change code above this line
// }

// getExtremeElements([1, 2, 3, 4, 5]);

// const array = [1, 2, 3, 4, 5];
// const firstElementArray = array[0];
// const lastElementArray = array[array.length - 1];

// console.log(firstElementArray);
// console.log(lastElementArray);
// // console.log(firstElementArray.concat(lastElementArray));

// function calculateEngravingPrice(message, pricePerWord) {
// 	// Change code below this line
// 	const totalPrice = message.splt(" ");

// 	// Change code above this line
// }

// calculateEngravingPrice("JavaScript is in my blood", 10);

// function findLongestWord(string) {
// 	// Change code below this line
// 	const stringArr = string.split(" ");
// 	let result = stringArr[0];
// 	// console.log(stringArr);
// 	for (let i = 0; i < stringArr.length; i += 1) {
// 		// console.log(result);
// 		if (result.length < stringArr[i].length) {
// 			result = stringArr[i];
// 		}
// 	}
// 	return result;
// 	// Change code above this line
// }

// findLongestWord("The quick brown fox jumped over the lazy dog");

// function createArrayOfNumbers(min, max) {
// 	const numbers = [];
// 	// Change code below this line
// 	for (let i = min; i <= max; i += 1) {
// 		console.log(i);
// 		numbers.push(i);
// 	}
// 	// Change code above this line
// 	return numbers;
// }

// createArrayOfNumbers(1, 3);

// function filterArray(numbers, value) {
// 	let newArray = [];
// 	for (let i = 0; i < numbers.length; i += 1) {
// 		if (numbers[i] > value) {
// 			newArray.push(numbers[i]);
// 		}
// 	}
// 	return newArray;
// }

// filterArray([1, 2, 3, 4, 5], 4);
// // возвращает [5]

// function getCommonElements(array1, array2) {
// 	let newArray = [];

// 	for (let i = 0; i < array1.length; i += 1) {
// 		if (array2.includes(array1[i])) {
// 			newArray.push(array1[i]);
// 		}
// 	}
// 	return newArray;
// }

// getCommonElements([1, 2, 3], [2, 4]);
// //  возвращает [2]

// getEvenNumbers(3, 11);

// // * Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива массив.includes(значение) - проверяет, есть ли в массиве array значение value, возвращая true если есть и false в противном случае.

// // * При выполнении этой задачи в теле функции includes() нельзя использовать метод массив.includes(значение).

// function includes(array, value) {
// 	for (const arr of array) {
// 		if (arr % value === 0) {
// 			console.log(true);
// 		}
// 		console.log(false);
// 	}
// }

// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter");
// // возвращает true

// function capitalize(string) {
// 	const gluedString = string.split(" ").join(" ");

// 	const gluedStringCapitalize = gluedString.charAt(0).toUpperCase() + gluedString.slice(1, gluedString.length);

// 	const stringCapitalize = gluedStringCapitalize.split(" ").join(" ");

// 	console.log(stringCapitalize);
// }

// capitalize("java-script in my blood");

// function capitalize(string) {
// 	const stringCapitalize = string.charAt(0).toUpperCase() + string.slice(1, string.length);
// 	console.log(stringCapitalize);
// }

// function capitalize(string) {}

// capitalize("java-script in my blood");

// const titleLow = "title";

// console.log(titleLow);

// const apartment = {
// 	descr: "Spacious apartment in the city center",
// 	rating: 4,
// 	price: 2153,
// };

// for (const appKeys in apartment) {
// 	const key = [];
// 	console.table(key);
// }

// for (const appKeys in apartment) {
// }

// const apartment = {
// 	descr: "Spacious apartment in the city center",
// 	rating: 4,
// 	price: 2153,
// };

// for (const apKeys in apartment) {
// 	const keys = [].push(apKeys);
// 	console.log(keys);
// }

// Change code below this line

// function countProps(object) {
// 	let propCount = 0;
// 	// Change code below this line
// 	const objectArr = [];

// 	for (const keys in object) {
// 		if (object.hasOwnProperty(keys)) {
// 			objectArr.push(keys);
// 			propCount = objectArr.length;
// 		}
// 	}
// 	// Change code above this line
// 	console.log(propCount);
// 	return propCount;
// }

// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }); //3

// const apartment = {
// 	descr: "Spacious apartment in the city center",
// 	rating: 4,
// 	price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// for (const key of keys) {
// 	values.push(apartment[key]);
// 	console.log(values);
// }
// console.log(values);
// console.log(keys);

// function countProps(object) {
// 	// Change code below this line
// 	let propCount = 0;

// 	const keyInObject = Object.keys(object);
// 	console.log(keyInObject.length);

// 	return (propCount += keyInObject.length);
// }

// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });

// возвращает 3

// const products = [
// 	{ name: "Radar", price: 1300, quantity: 4 },
// 	{ name: "Scanner", price: 2700, quantity: 3 },
// 	{ name: "Droid", price: 400, quantity: 7 },
// 	{ name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
// 	// Change code below this line
// 	let productPrise = 0;
// 	for (const key of products) {
// 		// console.log(key);
// 		if (key.name === productName) {
// 			productPrise = key.price;
// 			break;
// 			// console.log(productPrise);
// 		}
// 	}
// 	console.log(productPrise);
// 	return productPrise;
// 	// Change code above this line
// }

// const products = [
// 	{ name: "Radar", price: 1300, quantity: 4 },
// 	{ name: "Scanner", price: 2700, quantity: 3 },
// 	{ name: "Droid", price: 400, quantity: 7 },
// 	{ name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
// 	// Пиши код ниже этой строки
// 	// Пиши код выше этой строки
// }

// const atTheOldToad = {
// 	potions: [
// 		{ name: "Speed potion", price: 460 },
// 		{ name: "Dragon breath", price: 780 },
// 		{ name: "Stone skin", price: 520 },
// 	],
// 	// Change code below this line
// 	getPotions() {
// 		console.log(this.potions);
// 		return this.potions;
// 	},

// addPotion(newPotion) {
// 	for (const potion of this.potions) {
// 		if (potion.name === newPotion.name) {
// 			return `Error! Potion ${newPotion.name} is already in your inventory!`;
// 		}
// 	}
// 	this.potions.push(newPotion);
// },

// removePotion(potionName) {
// 	let potionIndex = -1;

// 	for (let i = 0; i < this.potions.length; i += 1) {
// 		if (this.potions[i].name === potionName) {
// 			potionIndex = i;
// 			break;
// 		}
// 	}

// 	if (potionIndex === -1) {
// 		return `Potion ${potionName} is not in inventory!`;
// 	}

// 	this.potions.splice(potionIndex, 1);
// },

// 	updatePotionName(oldName, newName) {
// 		let potionIndex = -1;

// 		for (let i = 0; i < this.potions.length; i += 1) {
// 			if (this.potions[i].name === oldName) {
// 				potionIndex = i;
// 				break;
// 			}
// 		}

// 		if (potionIndex === -1) {
// 			return `Potion ${oldName} is not in inventory!`;
// 		}

// 		this.potions.name = newName;
// 		// Change code above this line
// 	},
// };

// 	updatePotionName(oldName, newName) {
// 		for (let i = 0; i < this.potions.length; i += 1) {
// 			if (this.potions[i].name === oldName) {
// 				return (this.potions[i].name = newName);
// 			}
// 		}

// 		return `Potion ${oldName} is not in inventory!`;
// 	},
// };

// // atTheOldToad.addPotion({ name: "Speed potion", price: 460 });
// atTheOldToad.updatePotionName("Dragon breath", "Polymorth");
// // console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
// atTheOldToad.getPotions();

// function makePizza(pizzaName, callback) {
// 	console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
// 	callback(pizzaName);
// }

// // makePizza("Royal Grand", function deliverPizza(pizzaName) {
// // 	console.log(`Delivering pizza ${pizzaName}.`);
// // });
// // Change code below this line

// makePizza("Ultracheese", (eatPizza = pizzaName => console.log(`Eating pizza ${pizzaName}`)));

// // !==

// makePizza("Ultracheese", function eatPizza(pizzaName) {
// 	console.log(`Eating pizza ${pizzaName}`);
// });

// const pizzaPalace = {
// 	pizzas: ["Ultracheese", "Smoked", "Four meats"],
// 	order(pizzaName, onSuccess, onError) {
// 		for (const pizza of this.pizzas) {
// 			if (pizzaName === pizza) {
// 				return console.log(onSuccess(pizzaName));
// 			}
// 		}
// 		console.log(onError(`There is no pizza with a name ${pizzaName} in the assortment.`));
// 	},
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
// 	return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
// 	return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);

// calculateTotalPrice = (quantity, pricePerItem) => {
// 	return quantity * pricePerItem;
// };
// console.log(calculateTotalPrice(5, 100));

// function changeEven(numbers, value) {
// 	// Change code below this line

// 	const newArr = [];
// 	for (let i = 0; i < numbers.length; i += 1) {
// 		if (numbers[i] % 2 === 0) {
// 			newArr.push(numbers[i] + value);
// 			continue;
// 		}
// 		newArr.push(numbers[i]);
// 	}

// 	return console.log(newArr);
// 	// Change code above this line
// }

// changeEven([1, 2, 3, 4, 5], 10);

// const books = [
// 	{
// 		title: "The Last Kingdom",
// 		author: "Bernard Cornwell",
// 		rating: 8.38,
// 	},
// 	{
// 		title: "Beside Still Waters",
// 		author: "Robert Sheckley",
// 		rating: 8.51,
// 	},
// 	{
// 		title: "The Dream of a Ridiculous Man",
// 		author: "Fyodor Dostoevsky",
// 		rating: 7.75,
// 	},
// 	{ title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// 	{ title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter(({ rating }) => rating >= MIN_RATING);
// const booksByAuthor = books.filter(({ author }) => (author = AUTHOR));

// console.log(booksByAuthor);
// console.log(topRatedBooks);

// const abc = [
// 	{
// 		name: "Moore Hensley",
// 		email: "moorehensley@indexia.com",
// 		eyeColor: "blue",
// 		friends: ["Sharron Pace"],
// 		isActive: false,
// 		balance: 2811,
// 		skills: ["ipsum", "lorem"],
// 		gender: "male",
// 		age: 37,
// 	},
// 	{
// 		name: "Sharlene Bush",
// 		email: "sharlenebush@tubesys.com",
// 		eyeColor: "blue",
// 		friends: ["Briana Decker", "Sharron Pace"],
// 		isActive: true,
// 		balance: 3821,
// 		skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
// 		gender: "female",
// 		age: 34,
// 	},
// 	{
// 		name: "Ross Vazquez",
// 		email: "rossvazquez@xinware.com",
// 		eyeColor: "green",
// 		friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// 		isActive: false,
// 		balance: 3793,
// 		skills: ["nulla", "anim", "proident", "ipsum", "elit"],
// 		gender: "male",
// 		age: 24,
// 	},
// 	{
// 		name: "Elma Head",
// 		email: "elmahead@omatom.com",
// 		eyeColor: "green",
// 		friends: ["Goldie Gentry", "Aisha Tran"],
// 		isActive: true,
// 		balance: 2278,
// 		skills: ["adipisicing", "irure", "velit"],
// 		gender: "female",
// 		age: 21,
// 	},
// 	{
// 		name: "Carey Barr",
// 		email: "careybarr@nurali.com",
// 		eyeColor: "blue",
// 		friends: ["Jordan Sampson", "Eddie Strong"],
// 		isActive: true,
// 		balance: 3951,
// 		skills: ["ex", "culpa", "nostrud"],
// 		gender: "male",
// 		age: 27,
// 	},
// 	{
// 		name: "Blackburn Dotson",
// 		email: "blackburndotson@furnigeer.com",
// 		eyeColor: "brown",
// 		friends: ["Jacklyn Lucas", "Linda Chapman"],
// 		isActive: false,
// 		balance: 1498,
// 		skills: ["non", "amet", "ipsum"],
// 		gender: "male",
// 		age: 38,
// 	},
// 	{
// 		name: "Sheree Anthony",
// 		email: "shereeanthony@kog.com",
// 		eyeColor: "brown",
// 		friends: ["Goldie Gentry", "Briana Decker"],
// 		isActive: true,
// 		balance: 2764,
// 		skills: ["lorem", "veniam", "culpa"],
// 		gender: "female",
// 		age: 39,
// 	},
// ];

// const getSortedFriends = users => {
// 	return users
// 		.flatMap(({ friends }) => friends)
// 		.filter((el, idx, arr) => arr.indexOf(el) === idx)
// 		.sort((a, b) => a.localeCompare(b));
// };

// console.log(getSortedFriends(abc));

// const chopShop = {
// 	stones: [
// 		{ name: "Emerald", price: 1300, quantity: 4 },
// 		{ name: "Diamond", price: 2700, quantity: 3 },
// 		{ name: "Sapphire", price: 1400, quantity: 7 },
// 		{ name: "Ruby", price: 800, quantity: 2 },
// 	],

// 	calcTotalPrice(stoneName) {
// 		const total = this.stones.reduce((issue, el) => {
// 			if (el.name === stoneName) {
// 				return el.price * el.quantity;
// 			}
// 			return issue;
// 		}, "Такого каменя не знайдено");
// 		return total;
// 	},
// };

// console.log(chopShop.calcTotalPrice("Emerald")); // 5200
// console.log(chopShop.calcTotalPrice("Diamond")); // 8100
// console.log(chopShop.calcTotalPrice("Sapphire")); // 9800
// console.log(chopShop.calcTotalPrice("Ruby")); // 1600
// console.log(chopShop.calcTotalPrice("Sdfd"));
