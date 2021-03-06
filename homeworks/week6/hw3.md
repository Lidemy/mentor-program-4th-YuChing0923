## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。
1. section: 文件中的一個群組或區塊。一般來說，section 裡面的應該是有意義且附帶標題的一段內容，裡面都會包含 title 或 heading。
2. article: article 是獨立的區塊包含完整的內容，也必須帶有heading。
article跟section的區分是，article有更高的獨立性及完整性。
article 是可以獨立存在、具有完整內容、可獨立於網站其他部分的區塊；而section雖然也具有獨立表達內容的能力，但是對外層有一定的相依性。
3. video: HTML video 元素用於在 HTML 或者 XHTML 中嵌入媒體播放器，以播放影片。也可以將 video 標籤用於音樂，但 audio 元素可能更合適。

## 請問什麼是盒模型（box modal）
我們會把所有的 HTML 元素都看成是 box (區塊模型)。每一個區塊模型都會包含自己的 margin、border、padding、以及內容。
生活中的盒子，有長寬高，盒子本身也有厚度，可以用來裝東西。
頁面上的盒模型我們可以理解為：從盒子頂部俯視所得的一個平面圖，盒子裡裝的東西相當於盒模型的內容(content);東西與盒子之間的空隙，理解為盒模型的內邊距(padding);盒子本身的厚度，就是盒模型的邊框(border);盒子外與其他盒子之間的間隔，就是盒子的外邊距(margin)。

## 請問 display: inline, block 跟 inline-block 的差別是什麼？
1. inline: 行內元素。一個行內元素可以在段落中不換行的排版下去，不可設定長寬，元素的寬高由它的內容撐開。 a 元素是最常見的行內元素，它可以被用作超連結之用。
2. block: 區塊元素。一個區塊元素會讓其內容從新的一行開始顯示，除非設定 position 或 float。元素寬度預設會撐到最大，使其占滿整個容器。常用的區塊元素包括 div 、 p 、 form 以及一些 HTML5 新出現的元素，例如：header 、 footer 、 section 等等。
3. inline-block: 以inline的方式呈現，但同時擁有block的屬性，可設定元素的寬高並水平排列。


## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？
1. static: static 是預設值。任何套用 position: static; 的元素「不會被特別定位」在頁面上特定位置，而是照著瀏覽器預設的配置自動排版在頁面上，所有其他的屬性值都代表該元素會被定位在頁面上。
2. relative: 相對定位。會使元素相對地調整其原本該出現的所在位置，而不論這些元素如何在頁面上移動位置或增加了多少空間，都不會影響到原本其他元素所在的位置。
3. absolute: 絕對定位。元素根據他所處的上層的非 static 容器相對位置去定位。
4. fixed: 固定定位。會相對於瀏覽器視窗來定位，即使頁面捲動，它還是會固定在相同的位置。

