'use strict';

let euclid = function(...numbers) {
	let d = 0;
	for (let i=0; i < numbers.length; i++)
		d = euclidForTwo(d , numbers[i]);
	return d;
}

