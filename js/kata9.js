function powersOfTwo(n){
	let powersOfTwo = [];
	for (let i = 0; i <= n; i++){
		let res = 2 ** i;
		powersOfTwo.push(res);
	}

	return powersOfTwo
   }

   console.log(powersOfTwo(4));