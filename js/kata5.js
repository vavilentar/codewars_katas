/* function nbYear(p0, percent, aug, p) {
	let countYears = 0;
	for (let i = 1; p >= p0; i++) {
		p0 = Math.round(p0 + (((p0 / 100) * percent) + aug));

		countYears = countYears + 1;
		
		console.log(`Прошло ${countYears}, население: ${p0}`);
	}
	return countYears;

 }

 console.log(nbYear(1000, 2, 50, 1200)); */


function nbYear(p0, percent, aug, p) {
	let countYears = 0;

	do {
		p0 = Math.floor(p0 + (((p0 / 100) * percent) + aug));
		countYears = countYears + 1;
		console.log(`Прошло ${countYears}, население: ${p0}`);
	} while (p >= p0);

	return countYears;
}

console.log(nbYear(1000, 2, 50, 1200));