'use strict';
let euclidForTwo = function (a, b) {
	if (a === 0)
		return b;
	if (b === 0)
		return a;
	for ( ; ; )
		if ((a %= b) === 0)
			return b;
		else if ((b %= a) === 0)
			return a;
}
