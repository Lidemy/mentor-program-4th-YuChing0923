``` js
function isValid(arr) {
  for(var i=0; i<arr.length; i++) {
    if (arr[i] <= 0) return 'invalid'
  }
  for(var i=2; i<arr.length; i++) {
    if (arr[i] !== arr[i-1] + arr[i-2]) return 'invalid'
  }
  return 'valid'
}

isValid([3, 5, 8, 13, 22, 35])
```

## 執行流程
1. 呼叫 `isValid function`，`arr` 參數帶入 [3, 5, 8, 13, 22, 35]
2. 執行 function 的第 1 行：
● 設變數 i 為 0，並判斷 i 是否小於 `arr` 的長度 6（length） → 是
3. 執行 function 的第 2 行：
● 判斷 `arr` 的第 0 項 3，是否小於等於 0 → 不是
4. 跳回第 1 行，執行 `i++`，目前 i 為 1，並判斷 i 是否小於 `arr` 的長度 6（length） → 是
5. 執行 function 的第 2 行：
● 判斷 `arr` 的第 1 項 5，是否小於等於 0 → 不是
6. 跳回第 1 行，執行 `i++`，目前 i 為 2，並判斷 i 是否小於 `arr` 的長度 6（length） → 是
7. 執行 function 的第 2 行：
● 判斷 `arr` 的第 2 項 8，是否小於等於 0 → 不是
8. 跳回第 1 行，執行 `i++`，目前 i 為 3，並判斷 i 是否小於 `arr` 的長度 6（length） → 是
9. 執行 function 的第 2 行：
● 判斷 `arr` 的第 3 項 13，是否小於等於 0 → 不是
10. 跳回第 1 行，執行 `i++`，目前 i 為 4，並判斷 i 是否小於 `arr` 的長度 6（length） → 是
11. 執行 function 的第 2 行：
● 判斷 `arr` 的第 4 項 22，是否小於等於 0 → 不是
12. 跳回第 1 行，執行 `i++`，目前 i 為 5，並判斷 i 是否小於 `arr` 的長度 6（length） → 是
13. 執行 function 的第 2 行：
● 判斷 `arr` 的第 5 項 35，是否小於等於 0 → 不是
14. 跳回第 1 行，執行 `i++`，目前 i 為 6，並判斷 i 是否小於 `arr` 的長度 6（length） → 不是
15. 跳出迴圈，繼續執行 function 的第 4 行：
● 設變數 i 為 2，並判斷 i 是否小於 `arr` 的長度 6（length） → 是
16. 執行 function 的第 5 行：
● 判斷 `arr` 的第 2 項 8，是否等於 `arr` 的第 1 項 5 加上 `arr` 的第 0 項 3 → 是
17. 跳回第 4 行，執行 `i++`，目前 i 為 3，並判斷 i 是否小於 `arr` 的長度 6（length） → 是
18. 執行 function 的第 5 行：
● 判斷 `arr` 的第 3 項 13，是否等於 `arr` 的第 2 項 8 加上 `arr` 的第 1 項 5 → 是
17. 跳回第 4 行，執行 `i++`，目前 i 為 4，並判斷 i 是否小於 `arr` 的長度 6（length） → 是
18. 執行 function 的第 5 行：
● 判斷 `arr` 的第 4 項 22，是否等於 `arr` 的第 3 項 13 加上 `arr` 的第 2 項 8 → 不是
19. 回傳 `'invalid'` 並跳出迴圈及結束 function
20. `isValid function` 執行完畢