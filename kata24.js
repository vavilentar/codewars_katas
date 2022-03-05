function sum() {
	const arrArg = [...arguments]
	let res = 0;
	for (let i = 0; i < arrArg.length; i++) {
		res += arrArg[i];
	}
	return res;
}

//Или такое решение

function sum() {
	var total = 0;
	for(var i in arguments){
	  total += arguments[i];
	}
	return total;
   }