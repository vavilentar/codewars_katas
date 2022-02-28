let words = 'Hello!';
let arrWord = Array.from(words);
let removed = 0;
let arrCorr = [];

for (i = 0; i < arrWord.length; i++) {
	if (arrWord[i] == '!') {
		removed = i;
	}
}
arrCorr = arrWord.splice(1, removed);
console.log(arrWord);
