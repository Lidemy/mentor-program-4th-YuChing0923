/* 印出星星 */
function printStars(number) {
	const resultArr = []
	for (let i = 0; i < number; i++) {
		resultArr.push('*')
	}
	console.log(resultArr.join('\n'))
}

/* test */
printStars(1)
printStars(3)
printStars(5)
printStars(6)
/* test */