## 什麼是 DOM？
文件物件模型（Document Object Model, DOM）。
簡單說就是瀏覽器提供的橋樑，可以讓 document 轉換成 object。
可以讓 javascript 拿到 html 的元素，並針對元素做改變。

## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？
事件傳遞的順序是從最上層的節點（一般為 window）開始，往下傳到你所觸發的元素，再往上傳回最上層的節點。
由上層往下傳的階段為捕獲（Capturing phase）。
而到達目標後，往上傳回最上層的過程就稱為冒泡（bubbling phase）。

## 什麼是 event delegation，為什麼我們需要它？
event delegation，事件代理。
當某個元素發生事件時，過程是從父元素傳下來的。
當有許多子元素需要加上 addEventListener 時，可以將 addEventListener 加在 父元素，下層的所有子元素也會一併被監聽，就不用每個子元素個別設監聽。

## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？
* event.preventDefault()
接收事件後，阻止瀏覽器對目標元素進行預設的行為，但事件仍會繼續傳遞下去。
例如：submmit button 加上 event.preventDefault() 後，點擊該按鈕則不會提交。

* event.stopPropagation()
目標元素接收事件後，阻止事件繼續傳遞下去。
例如：上層元素被設置了 event.stopPropagation()，事件不會從父元素往下傳，也不會繼續往上層傳，所以事件也不會傳遞到子元素上。
