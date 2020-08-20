## 資料庫欄位型態 VARCHAR 跟 TEXT 的差別是什麼
* varchar：varchar 為變長的英文數字資料，可限制長度
* text：text 則不可限制長度，且不限制資料只能為英文數字


## Cookie 是什麼？在 HTTP 這一層要怎麼設定 Cookie，瀏覽器又是怎麼把 Cookie 帶去 Server 的？
Cookies 是網站儲存在 Client 端上的小型文字檔，通常用於辨識用戶身分或資料。
Client 端發送 Request 給 Server，Server 再回傳 Response 時，會將資料放在 Header 裡的 Set-Cookie，把資料寫進 Cookie
當 Client 端下次再發出 Request 時，Request 就會自動把上次儲存的 Cookie 跟著 Header 一起回傳給 Server


## 我們本週實作的會員系統，你能夠想到什麼潛在的問題嗎？
1. 資料庫裡的密碼赤裸裸，一不小心就會被看見
2. 有些頁面驗證機制可以透過 javascript 來寫，在前端頁面就先擋下來，避免資料傳輸中出現問題（？）
3. 密碼沒有限制輸入次數，暴力破解有可能會成功
4. 沒有防止機器人註冊大量帳號
