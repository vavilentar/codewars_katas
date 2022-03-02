//Суть каты очень проста - если в массиве a содержится x то вернуть true, иначе false

function check(a, x) {
	if (a.includes(x)){
		return true;
	} else {
		return false;
	}
   }

   //2

   function check(a,x){
	return a.includes(x);
   };

   //3

   const check = (a,x) => a.includes(x);

   