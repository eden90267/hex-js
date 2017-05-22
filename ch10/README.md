# ch10 localStorage - 瀏覽器資料儲存

## 什麼是localStorage？

localStorage，是綁網址的

## setItem、getItem基本操作

## 透過JSON.parse、JSON.stringify來編譯資料

1.將 array 轉 string

    JSON.stringify(Object)

2.將 string 轉 array

    JSON.parse(String)

學以上兩點是因為 localstorage 只會保存 string 資料

## data-* - 透過dataset讀取自訂資料

用途：做特定元素的資料綁定、驗證的動作。

## dataset、array 運用

dataset塞array的index，之後取出可在透過index取得array裡的元素。

## splice - 刪除 array 資料

`array.splice(第幾筆開始, 刪除幾筆資料);`