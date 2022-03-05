/* function findDifference(a, b) {
	const aRes = eval(a.join('*'));
	const bRes = eval(b.join('*'));
	let res;
	if (aRes > bRes) {
		res = aRes - bRes;
	} else {
		res = bRes - aRes;
	}

	return res;
}

   console.log(findDifference([3, 2, 5], [1, 4, 4])); */

   function find_difference(a, b) {
	return Math.abs(a.reduce((previous, current) => previous * current) - b.reduce((previous, current) => previous * current));
   }

   console.log(find_difference([3, 2, 5], [1, 4, 4]));

   //Перемножение элементов массивов через join(*), reduce (p,c) => p*c

	//Метод Math.abs() возвращает абсолютное значение числа.
   
	Math.abs('-1');     // 1
	Math.abs(-2);       // 2
	Math.abs(null);     // 0
	Math.abs('');       // 0
	Math.abs([]);       // 0
	Math.abs([2]);      // 2
	Math.abs([1,2]);    // NaN
	Math.abs({});       // NaN
	Math.abs('string'); // NaN
	Math.abs();         // NaN