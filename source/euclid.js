'use strict';

/**
* Euclid. Finds GCD
* @param {number[]} numbers
* @returns {number}
*/
const euclid = (...numbers) => {
	let isInvalidData = false;

	const currentNOD = numbers.reduce((currentNOD, num) => {
		if (
			typeof num !== 'number' ||
			typeof currentNOD !== 'number'
		) {
			isInvalidData = true;
			return currentNOD;
		}

		return euclidForTwo(currentNOD , num);
	}, 0);

	if (isInvalidData) {
		return 'invalid data';
	}

	return currentNOD;
};

/**
 * EuclidForTwo. Finds GCD of two numbers
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
const euclidForTwo = (a, b) => b === 0 ? Math.abs(a) : euclidForTwo(b, a % b);