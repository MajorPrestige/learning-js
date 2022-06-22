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
