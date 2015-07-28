#台灣大學宿舍網路管理頁面範例

完整提案請參考 [此連結](https://github.com/IthacaCow/NTU-Dorm-Administration-Registration-Page)

## 目標

### 短期

##### 響應式網頁
 

> 網管常須隨身攜帶手機，以便查詢同學的 IP 、電話…等資訊，但是當前的介面因無法隨著螢幕大小調整內容，造成查詢時極大困難。


##### 視覺調整
 
> 藉由調整整個網站的色系、元件與排版，我們可以讓他看起來更現代化。

##### 調整功能列表的排版
 
> 很多功能我們平常很少用到，卻佔據極大頁面，其命名方式也不甚直覺，讓新進網管不易上手。

### 中期

##### 更新網路問題教學

> 我們覺得原本的網路問題教學略顯過時，而且不易找到，對同學的幫助有限。希望可以把教學放在更顯眼的位置，並更新其內容。

##### 通知被封鎖同學
 
> 同學常常被封鎖卻不自知，報修網管時我們才發現他被鎖，造成雙方時間的浪費。我們覺得可以自動 email 通知同學（或是整合 Facebook  通知，請見長期目標）。

### 長期


#####前後端分離
 
 
> 我們猜測現在的 PHP 實作將後端邏輯內嵌於 HTML 內，因此不論修改前端或後端，都不免牽一髮而動全身。希望以後可以將兩者方開，並以 **RESTful APIs**  互動。如此還可以將前後端分散在不同伺服器。 

##### 結合 Facebook
 
> 以 email 通知同學，不如用 Facebook 訊息。技術細節請見 [Facebook Message API](https://developers.facebook.com/docs/sharing/reference/send-dialog)  、[Facebook OAuth](https://developers.facebook.com/docs/facebook-login/login-flow-for-web/v2.4)
