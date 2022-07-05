const cars = [
	{
		make: "Honda",
		model: "CR-V",
		type: "suv",
		amount: 14,
		price: 24045,
		onSale: true,
	},
	{
		make: "Honda",
		model: "Accord",
		type: "sedan",
		amount: 2,
		price: 22455,
		onSale: true,
	},
	{
		make: "Mazda",
		model: "Mazda 6",
		type: "sedan",
		amount: 8,
		price: 24195,
		onSale: false,
	},
	{
		make: "Mazda",
		model: "CX-9",
		type: "suv",
		amount: 7,
		price: 31520,
		onSale: true,
	},
	{
		make: "Toyota",
		model: "4Runner",
		type: "suv",
		amount: 19,
		price: 34210,
		onSale: false,
	},
	{
		make: "Toyota",
		model: "Sequoia",
		type: "suv",
		amount: 16,
		price: 45560,
		onSale: false,
	},
	{
		make: "Toyota",
		model: "Tacoma",
		type: "truck",
		amount: 4,
		price: 24320,
		onSale: true,
	},
	{
		make: "Ford",
		model: "F-150",
		type: "truck",
		amount: 11,
		price: 27110,
		onSale: true,
	},
	{
		make: "Ford",
		model: "Fusion",
		type: "sedan",
		amount: 13,
		price: 22120,
		onSale: true,
	},
	{
		make: "Ford",
		model: "Explorer",
		type: "suv",
		amount: 6,
		price: 31660,
		onSale: false,
	},
];

// 1. Написати ф-ю, яка повертає масив автомобілів з описом певного виробника, та сортує результат в алфавітному
// порядку по назві моделі.
// console.log(getSortModel(cars, 'Ford'));

// 2. Написати ф-ю, яка повертає масив автомобілів у певній ціновій категорії
// console.log(filterByPrice(cars, 20000, 24000));

// 3. Написати ф-ю getCarsProducer(cars), яка повертає масив всіх виробників для представлених авто, відсортованих
// за алфавінтим порядком
// console.log(getCarsProducer(cars));

// const getSortModel = (carsArr, car) => {
// 	return carsArr.filter(el => el.make === car).sort((a, b) => a.model.localeCompare(b.model));
// };

// console.log(getSortModel(cars, "Ford"));

// const filterByPrice = (carsArr, minPrice, maxPrice) => {
// 	return carsArr.filter(el => el.price >= minPrice && el.price <= maxPrice);
// };

// console.log(filterByPrice(cars, 20000, 24000));

// const getCarsProducer = carsArr => {
// 	const newCarsArr = [...carsArr];
// 	return newCarsArr.sort((a, b) => a.make.localeCompare(b.make));
// };

// console.log(getCarsProducer(cars));

const workPositions = [
	{
		id: 1,
		department: "Отдел продаж",
		position: "Торговый представитель",
		salary: 10000,
	},
	{
		id: 2,
		department: "Отдел аналитики",
		position: "Аналитик систем",
		salary: 50000,
	},
	{
		id: 3,
		department: "Отдел рекламы",
		position: "Маркетолог",
		salary: 25000,
	},
	{
		id: 4,
		department: "Отдел продаж",
		position: "Супервайзер",
		salary: 18000,
	},
	{
		id: 5,
		department: "Отдел рекламы",
		position: "Мерчендайзер",
		salary: 10000,
	},
	{
		id: 6,
		department: "Отдел логистики",
		position: "Водитель-экспедитор",
		salary: 15000,
	},
	{
		id: 7,
		department: "Бухгалтерия",
		position: "Главный бухгалтер",
		salary: 20000,
	},
];

const listNames = [
	"Сапсай Иван",
	"Буракшаева Юлия",
	"Богословский Артем",
	"Мельникова Ксения",
	"Иванов Сергей",
	"Фурсова Елизавета",
	"Самбикина Юлия",
];
// 1. написать функцию, separateName(fullName), которая принимает строку "Фамилия Имя" и возвращает объект
// в котором имя и фамилия являются отдельными свойствами: {firstName: "Имя", lastName: "Фамилия"}

// 2. Написать функцию createEmployesList(employes), которая принимает список сотрудников "Фамилия Имя" и
// записывает их в массив объектов, который описывает каждого сотрудника, добавляя
// ему уникальный id типа (1, 2, 3, и т.д.)

// 3. Написать функцию getEmployeeData(id), которая по id выбирает сотрудника из масива сотрудников
// и возвращает объект с данными сотрудника дополнеными информацией о нем из соответствующего ему объекта
// с рабочим отделом, должностью и зарплатой на этой должности в масиве workPosition - типа:
// {
//   id: 1,
//   firstName: "Иван",
//   lastName: "Сапсай",
//   department: "Отдел продаж",
//   position: "Торговый представитель",
//   salary: 10000
// }

// const separateName = fullName => {
// 	const [lastName, firstName] = fullName.split(" ");
// 	return { firstName, lastName };
// };
// console.log(separateName(listNames[0]));

// function createEmployesList(employes) {
// 	const employeeList = employes.map((el, ind) => ({ id: ind + 1, ...separateName(el) }));
// 	return employeeList;
// }
// console.log(createEmployesList(listNames));

// let arr = [5, 6, 7, 8, 9];

// arrQuad = arr.map(el => el ** 2).filter(el => el >= 40);

// console.log(arrQuad);

// Користувач
// Напиши клас User для створення користувача з наступними властивостями:
// name - ім'я, рядок
// age - вік, число
// postsCount - кількість постів, число

// Клас очікує один параметр - об'єкт налаштувань з однойменними властивостями.

// Додай метод getInfo(), який повертає рядок:
//     User ${ім'я} is ${вік} years old and has ${у постів} posts.

// const mango = new User(mangoData);

// console.log(mango);
// console.log(mango.getInfo()); // User Mango is 45 years old and has 20 posts

// const mangoData = {
// 	name: "Mango",
// 	age: 45,
// 	postsCount: 20,
// };

// class User {
// 	constructor({ name, age, postsCount } = {}) {
// 		this.name = name;
// 		this.age = age;
// 		this.postsCount = postsCount;
// 	}

// 	getInfo() {
// 		return `User ${this.name} is ${this.age} years old and has ${this.postsCount} posts.`;
// 	}
// }

// const mango = new User(mangoData);

// console.log(mango);
// console.log(mango.getInfo()); // User Mango is 45 years old and has 20 posts

//  ? Напиши клас Client, який створює об'єкт із властивостями login та email.
//    login повинен бути суспільною властивістю, а email приватним.
//    Доступ до email зроби через геттер та сетер.
//    Перед тим як змінити імейл, у сеттері потрібно викликати приватний метод, який валідуватиме імейл (наявність собачки та крапки).
//    Якщо імейл невалідний – нічого не робити і вивести в консоль 'Email is not valid!'

// const mango = new Client({
//   login: 'Mango',
//   email: 'mango@dog.woof',
// });

// console.log('mango', mango);

class Client {
	#email;

	constructor({ login, email } = {}) {
		this.login = login;
		this.#email = email;
	}

	get email() {
		return this.#email;
	}

	set email(newEmail) {
		if (this.#checkEmail(newEmail)) {
			return (this.#email = newEmail);
		}
		return console.log(`Email is not valid!`);
	}

	#checkEmail(email) {
		return email.includes(".") && email.includes("@");
	}
}

const mango = new Client({
	login: "Mango",
	email: "mango@dog.woof",
});

// console.log("mango", mango);
mango.email = "asdasds@amail.com";
console.log("mango", mango);
