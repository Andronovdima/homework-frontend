'use strict';

/**
* Euclid. Finds GCD
* @param {number[]} numbers
* @returns {NOD number}
*/
const euclid = (...numbers) => {
	let currentNOD = 0;
	let isInvalidData = false;
	numbers.forEach(num => {
		if (typeof num !== 'number' || typeof currentNOD !== 'number'){
			isInvalidData = true;
			return;
		}	
		currentNOD = euclidForTwo(currentNOD , num);
	});
	if (isInvalidData)
		return "invalid data";
	return currentNOD;
}

/**
* EuclidForTwo. Finds GCD of two numbers
* @param {number1, number2}
* @returns {NOD number}
*/
const euclidForTwo = (a, b) => b === 0 ? Math.abs(a) : euclidForTwo(b, a % b);
