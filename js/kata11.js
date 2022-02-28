function sumMul(n,m){

	// if (!(m <= 0));

	let res = 0;
	let resArr = [];

	for (let i = n; i < m; i++) {

		if (Math.floor(i / n) == (i / n)) {
			resArr.push(i);
		}
	}

	for (let i = 0; i < resArr.length; i++) {
		res += resArr[i];
	}

	if (res <= 0) {
		return  res = 'INVALID';
	} else {
		return res;
	}
	}

	console.log(sumMul(2, -2));

