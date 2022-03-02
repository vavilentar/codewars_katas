/* // complete the function
function solution(string) {

	for (let i = 0; i < string.length; i++){
		if (string.charAt(i) === string.charAt(i).toUpperCase()) {
			string.charAt(i)
		}
	}
	return string;
}

console.log(solution('helloWorld'))

 */

function solution(string) {
	let str = string.split('');

	console.log(str)

	for (let i = 0; i < str.length; i++) {
		console.log(`Место ${i} имеет значение ${str[i]}`)		
	}
}

console.log(solution('helloWorld'));



