/* function dontGiveMeFive(start, end)
{
	let arr = [];
	let RegExp = /5/;
	for (let i = start; i < end; i++){
		if (i.match(RegExp)){
			continue;
		} else {
			arr = arr.push[i];
		}
	}
	console.log(arr);
  return arr.length;
}

console.log(dontGiveMeFive(1,9));

 */

/* 
function dontGiveMeFive (start, end) {
	let arr = [];
	let k = 0;
	for (let i = 0; i < end; i++) {
		arr[k] = start + i;
		k++;
	}
	
	console.log(arr);
}

console.log(dontGiveMeFive(3,10));


let arr = [];                        // Мне нужно создать пустой массив

let count = (n, m , l)=>{            //и сделать счетчик
  while(n <= m && arr.length < l){   // от n до m И делать это до определенного length
    arr.push(n++);                   //  будет его заполнять числами
  }
}
count(3, 17, 8); // n, m, length
console.log(arr); // [3, 4, 5, 6, 7, 8, 9, 10]
console.log(arr.length); // 8
 */


/* 
function dontGiveMeFive (start, end) {

	let arr = [];
	const five = /5/gi;
	let testStr = '';
	while(start <= end) {
		arr.push(start++)
	}
	for (let i = 0; i < arr.length; i++){
		testStr = arr[i].toString();
		if (testStr.match(five)) {
			arr.splice(i,1);
		}
	}

	console.log(arr)
	return arr.length;
}

console.log(dontGiveMeFive(150,250)); */

function dontGiveMeFive (start, end) {

	let arr = [];
	const reg = new RegExp(/5/g);
	let testStr = '';
	while(start <= end) {
		arr.push(start++)
	}
	for (let i = 0; i < arr.length; i++){
		testStr = arr[i].toString();
		console.log(`testStr содержит ${testStr}`)
/* 		if (((arr[i])%5) == 0) {
			console.log(`Удаляю элемент ${arr[i]} с первого цикла`)
			arr.splice(i,1);
		} */
		if (testStr.includes('5')) {
			console.log(`Удаляю элемент ${arr[i]} со второго цикла`)
			arr.splice(i,1);
		}
		testStr = ''
	}

	console.log(arr)
	return arr.length;
}

console.log(dontGiveMeFive(-6,79));



/* const str = '51'
const reg = new RegExp(/5/g);
console.log(str.includes('5')); */

