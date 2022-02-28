// Is it a palindrome?

// Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(str) {
	var re = /[\W_]/g; //Узнать 
	var lowRegStr = str.toLowerCase().replace(re, '');
	var reverseStr = lowRegStr.split('').reverse().join(''); 
	return reverseStr === lowRegStr;
   }
   isPalindrome("abba");

