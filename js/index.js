// console.log("hello");
// console.log(5);

// let username = "oleg";
// console.log(username);

// username = "Max";
// console.log(username);

// const username = prompt("Ваше имя");
// console.log(username);

// const isAdult = confirm("Вам есть 18?");
// console.log(isAdult);

// const numA = 10;
// const numB = 20;

// const result = numA % 2;

// console.log(result === 0);

// const totalMinutes = 90;
// let hours = totalMinutes / 60;
// hours = Math.floor(hours);
// const minutes = totalMinutes % 60;
// console.log(hours ":" minutes);

// ! snippet na console.log
// let userNumber = prompt("введите число");

// const strA = "     hello";
// console.log(strA);

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
// Change code below this line
// 	const message = `You ordered droids worth ${
// 		orderedQuantity + pricePerDroid + deliveryFee
// 	} credits. Delivery (${deliveryFee} credits) is included in total price.`;
// 	console.log(message);
// Change code above this line
// 	return message;
// }

// makeOrderMessage(10, 70, 200);

// function checkIfCanAccessContent(subType) {
// 	const canAccessContent = subType === pro || subType === vip; // Change this line

// 	return canAccessContent;
// }

// checkIfCanAccessContent("pro");

// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[20];

// console.log(courseTopic[20]);

// function getSubstring(string, length) {
//   const substring = ; // Change this line

//   return substring;
// }

// getSubstring()

// function formatMessage(message, maxLength) {
// 	let result;
// 	// Change code below this line
// 	if (message <= maxLength) {
// 		result = message;
// 	} else {
// 		result = message.slice(0, maxLength) + "...";
// 	}
// 	console.log(result);
// 	/// Change code above this line
// 	return result;
// }

// formatMessage("Nunc sed turpis a felis in nunc fringilla", 300);

function checkForSpam(message) {
	let result;
	// Change code below this line
	result = message.includes("spam" || "sale") ? true : false;

	console.log(result);
	// Change code above this line
	return result;
}

checkForSpam("[SPAM] How to earn fast money?");
