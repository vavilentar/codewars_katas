/* Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

For example: ["3:1", "2:2", "0:1", ...]

Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

if x>y - 3 points
if x<y - 0 point
if x=y - 1 point
Notes:

there are 10 matches in the championship
0 <= x <= 4
0 <= y <= 4

 */

function points(games) {
	let x = 0;
	for (let i = 0; i < games.length; i++) {
		let scores = games[i];
		if (+scores[0] > +scores[2]) {
			x += 3;
		} else if (+scores[0] == +scores[2]) {
			x += 1;
		}
	}

	return x;
   }

   console.log(points(['1:2', '3:4', '5:5', '2:1', '4:3']))

