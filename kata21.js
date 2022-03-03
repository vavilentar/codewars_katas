function procedure (n) {
	let multiples = [n];
	let mult = n;
	let sumMult = [];
	let sum = 0;

	do {
		mult += n;
		multiples.push(mult.toString());
	} while ((n + mult) <= 100)

	if (multiples[length-1] != 100) {
		multiples.push('100');
	}

	console.log(`addFinal = ${multiples}`)

	for (let i = 0; i < multiples.length; i++) {
		let srtMult = multiples[i];
		console.log(`srtMult = ${srtMult}`)
		
		for (let j = 0; j < srtMult.length; j++) {
			sum += +srtMult[j];
			console.log(`sum ${sum}`);
		}
		console.log(`presum ${sum}`);
		sumMult.push(sum);
		console.log(`sumMult = ${sumMult}`);
		sum = 0;
	}

	for (let i = 0; i < sumMult.length; i++){
		sum += sumMult[i];
		console.log(sum);
	}

	return sum;
}

procedure(10);