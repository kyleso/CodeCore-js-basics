const args = process.argv.slice(2);
const grade = parseInt(args[0]);

if (grade >= 0 && grade < 50) {
	console.log('F');
} else if (grade >= 50 && grade < 66) {
	console.log('D');
} else if (grade >= 67 && grade < 72) {
	console.log('C');
} else if (grade >= 73 && grade < 86) {
	console.log('B');
} else if (grade >= 86 && grade <= 100) {
	console.log('A');
} else {
	console.log('Invalid grade');
}