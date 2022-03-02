function getLargerNumbers(a, b) {
	let max = 0;
	let res = [];
	for (let i = 0; i < a.length; i++) {
/* 		for (let j = 0; j < b.length; j++) {
			if (a[i] >= b[i]) {
				res.push(a[i]);
			} else {
				res.push(b[i]);
			}
		}
 */
		if (a[i] >= b[i]) {
			res.push(a[i]);
		} else {
			res.push(b[i]);
		}
	}
	return res;
   }

   console.log(getLargerNumbers([13, 64, 15, 17, 88],[23, 14, 53, 17, 80]))


