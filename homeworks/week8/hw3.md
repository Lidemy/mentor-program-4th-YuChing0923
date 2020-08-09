## 什麼是 Ajax？
Asynchronous JavaScript And XML。
透過 javaScript 非同步的與伺服器交換資料，使網頁不用重新整理頁面就能獲得新的資料。

## 用 Ajax 與我們用表單送出資料的差別在哪？
表單送出資料，瀏覽器接收後頁面會重新刷新。
Ajax 則會透過 JavaScript 動態處理網頁上的內容，會直接即時地添入原本網頁，不會換頁。

## JSONP 是什麼？
JSON with Padding。跨來源請求的一種方法。
由於 html 的 script 標籤不受「同源政策」影響，可以讓網頁從別的網域要資料。
也就是可以透過 script 標籤去存取遠端的 JavaScript 檔案並讀取。
是解決跨網域限制的方法之一。

## 要如何存取跨網域的 API？
一種是上面提到的 JSONP。
另一種是對方會在 response 的 header 中加上 Access-Control-Allow-Origin 允許跨網域存取，如果瀏覽器檢查到 header 中有 Access-Control-Allow-Origin 就會讓你收到回應。

## 為什麼我們在第四週時沒碰到跨網域的問題，這週卻碰到了？
因為第四週使用的是 Node.js。
而這週因為是透過瀏覽器發送請求，而有安全性上的考量，也因此有同源政策的限制。
