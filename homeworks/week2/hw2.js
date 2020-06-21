/* 首字母大寫 */
function capitalize(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

/* test */
capitalize('nick')
capitalize('Nick')
capitalize(',hello')
/* test */