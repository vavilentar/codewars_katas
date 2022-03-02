//Ката заключалось в поиске и удаления гласных в строке.

function disemvowel(str) {

	str = str.replace(/[aeiou]/gi, '')

	return str;
}