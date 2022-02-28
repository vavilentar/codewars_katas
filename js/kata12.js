/* var kookaCounter = function(laughing) {
	// Your code here!
	return 0
   } */
   
/*    const kookaCounter = 'HaHahahaHahaHa'



   console.log(kookaCounter.match(regHaFem));
   console.log(kookaCounter.match(regHaMal)); */

   function kookaCounter (laughing) {
	const regHaFem = /ha/g;
	const regHaMal = /Ha/g;

	let resMale = +((laughing.match(regHaMal)).length);
	let resFem = +((laughing.match(regHaFem)).lenght);

	let res = resMale + resFem;
	return  res;
   }

   console.log(to(kookaCounter('HaHahahaHahaHa')));