## 請以自己的話解釋 API 是什麼
API，Application Programming Interface，應用程式介面
當使用者需要取得想要的資料的時候，需要給使用者的操作說明書。
裡面不需要說明是透過什麼方法取得資料、資料庫裡怎麼跑的，只要跟使用者說透過那些指令跟資料格式，就可以取得想要的資料就可以了。


## 請找出三個課程沒教的 HTTP status code 並簡單介紹
|  狀態碼  |  狀態  |  說明  |
| -- | -- | -- |
| 401 | Unauthorized | 需要被授權的資格條件才可以收到 response，在這邊不一定代表發出 request 的人資格不符，而是 server 不曉得發出 request 的人資格狀態為何。另外，有些 server 網站的狀態碼會直接顯示 401，有可能代表該特定位址被拒絕存取網站。 |
| 403 | Forbidden | 伺服器已經理解請求，但是拒絕執行它。與401回應不同的是，身分驗證並不能提供任何幫助，而且這個請求也不應該被重複提交。如果這不是一個HEAD請求，而且伺服器希望能夠講清楚為何請求不能被執行，那麼就應該在實體內描述拒絕的原因。當然伺服器也可以返回一個404回應，假如它不希望讓客戶端獲得任何資訊。 |
| 409 | Conflict | 表示 request 與 server 目前的狀態衝突，所以不會收到 response。例如多個項目同步更新，因產生衝突而無法處理 response。 |


## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。
|  功能  |  Method  |  Path  |  參數  |  範例  |
| -- | -- | -- | -- | -- |
| 回傳所有餐廳資料 | GET | /restaurants | none | none |
| 回傳單一餐廳資料 | GET | /restaurants/{restaurantId} | none | /restaurants/1 |
| 刪除餐廳 | DELETE | /restaurants/{restaurantId} | none | none |
| 新增餐廳 | POST | /restaurants | {name: 餐廳名稱, menu: 菜單, address: 地址, phone: 電話} | none |
| 更改餐廳 | PATCH | /restaurants/{restaurantId} | {name: 餐廳名稱, menu: 菜單, address: 地址, phone: 電話} | none |
