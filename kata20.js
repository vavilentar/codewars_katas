//Поиск элемента в массиве, отдает индекс 

function findNeedle(haystack) {
	let ind = haystack.indexOf('needle');
	return `found the needle at position ${ind}`
   }

   console.log(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']))

/*    Нужно ли вам просто узнать, есть ли такой элемент? Используйте .includes().
   Вы хотите получить сам элемент? Используйте .find() или .filter(), если вам нужно несколько элементов.
   Хотите найти индекс элемента? Используйте .indexOf() или findIndex() для более сложного поиска. */