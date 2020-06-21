/* join */
function join(array, string) {
    /* ↓↓自我檢討訂正：漏掉空陣列時的回傳值↓↓ */
    if (arr.length === 0) { // special case
        return '';
    }
    /* ↑↑自我檢討訂正：漏掉空陣列時的回傳值↑↑ */
    let result = array[0];
    for (let i = 1; i < array.length; i++) {
        result += string + array[i];
    }
    return result;
}

/* test */
join([1, 2, 3], '')
join(["a", "b", "c"], "!")
join(["a", 1, "b", 2, "c", 3], ',')
/* test */

/* repeat */
function repeat(string, number) {
    let result = '';
    for (let i = 0; i < number; i++) {
        result += string;
    }
    return result;
}

/* test */
repeat('a', 5)
repeat('yoyo', 2)
/* test */