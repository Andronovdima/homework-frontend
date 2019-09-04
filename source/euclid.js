'use strict';

const euclid = (...numbers) => {
	let d = 0;
	for (let i=0; i < numbers.length; i++){
		if (typeof numbers[i] !== 'number' || typeof d !== 'number')
			return "unvalid data";
		d = euclidForTwo(d , numbers[i]);
	}
	return d;
}

const euclidForTwo = (a, b) => b === 0 ? Math.abs(a) : euclidForTwo(b, a % b);
