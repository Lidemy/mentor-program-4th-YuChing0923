## 請解釋後端與前端的差異。
前端主要是處理畫面看的見的東西，後端則是處理資料庫及資料傳送、溝通。
前端接收到後端傳來的資料後，再將他 render 到畫面上。

## 假設我今天去 Google 首頁搜尋框打上：JavaScript 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。
1. 案下 Enter 後，瀏覽器送出關鍵字到 Google Server
2. Google Server 從後端資料庫查詢關鍵字相關的搜尋結果
3. Google Server 回傳所接收到的搜尋結果
4. 瀏覽器將搜尋結果顯示在前端頁面上


## 請列舉出 3 個「課程沒有提到」的 command line 指令並且說明功用
* find<br>找尋檔案
```
find -name test.txt
```
執行後，`find` 會列出所有檔名是 `test.txt` 的檔案列表。
```
find /home -iname test.txt
```
在 `/home` 目錄底下，不分英文大小寫，找尋檔案名稱為 `test.txt` 的檔案。

* file<br>確認檔案的類型

* cmp<br>比較兩個文件的內容
```
cmp -name file1.txt file2.txt
```
`cmp` 指令會將檔案 `file1`, `file2` 進行比較，並且列出第一個內容不同處的字元數及行數。