/* 反轉字串 */
function reverse(string) {
	let newString = '';
	for (let i = string.length - 1; i >= 0; i--) {
		newString += string.charAt(i)
	}
	console.log(newString);
}

/* test */
reverse('yoyoyo')
reverse('1abc2')
reverse('1,2,3,2,1')
reverse('hello');
/* test */
