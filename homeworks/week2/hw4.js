/* 印出因數 */
function printFactor(number) {
	for (let i = 1; i <= number; i++) {
		if (number%i===0) {
			console.log(i);
		}
	}
}

/* test */
printFactor(7)
printFactor(10)
/* test */