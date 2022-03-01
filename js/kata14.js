/* let result = str.split('').reverse().join(''); //перевернуть строку */

function filter_list(l) {
	let char = new RegExp(/d/)
	let res = [];
	for (let i = 0; i <= l.lenght; i++) {
		
		if (typrof (l[i]) == 'number'){
			res.push(l[i]);
		} else {``
			continue;
		}
	}

	return res;
}

console.log(filter_list([1,2,'aasf','1','123',123]));