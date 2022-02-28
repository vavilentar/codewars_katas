// Remove First and Last Character

/* It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters. */

function removeChar(str){
	str = str.slice(1); //Удаляем первый символ
	str = str.substr(0, str.length-1); //Удаляем последний символ
	return str;
    };

    let word = 'Hello';
    console.log(removeChar(word));

//Компактный вариант

function removeChar(str) {
	return str.slice(1,-1);
}
let word = 'Hello';
console.log(removeChar(word));


