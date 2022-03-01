/* let arr = ['R','o','m','a','n'];
let str = arr.join('');

console.log(str)

let strTwo = 'Roman';
let arrTwo = strTwo.split('');

console.log(arrTwo)
 */
function friends(f) {
	const re = new RegExp(/d/i);
	let friendName;
	let result = [];
	let correct = '';
		for (let i = 0; i <= f.length; i++){
			friendName = f.split('');
			if (friendName.length <= 4) {
				for (let j = 0;j <= friendName.length-1;j++){
					let char = friendName[j];
					if (char == re)
					{
						break;
					} else {
						correct += char;
					}
				}
			}
		}
		result.push(correct);
		return result;
}
console.log(friends('John'));