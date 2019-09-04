'use strict';

/**
* Euclid. Finds GCD
* @param {number[]} numbers
* @returns {number}
*/
const euclid = (...numbers) => {
	let d = 0;
	
	numbers.forEach(num => {
		if (typeof num !== 'number' || typeof d !== 'number') {
			return "invalid data";
		}
		
		d = euclidForTwo(d , num);
	});

	return d;
};

const euclidForTwo = (a, b) => b === 0 ? Math.abs(a) : euclidForTwo(b, a % b);
