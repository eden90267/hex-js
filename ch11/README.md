# 瀏覽器功能探索(BOM)

## 瀏覽器功能簡介

### BOM (Browser Object Model)

window：

- history

    瀏覽的歷史紀錄

- frames

    網頁有iframe，可透過該物件操控

- location

    瀏覽器瀏覽網頁、網址的相關資訊

    ```
    location.href
    ```

- DOM

    針對Document操作DOM元素

- screen

    使用這個載具的寬度與高度

    ```
    screen.width
    ```

- navigator

    瀏覽器版本與相關資訊

    ```
    navigator.onLine // 是不是上網階段
    ```

## 回上頁功能實作

- `window.history.forward()`
- `window.history.back()`

## 透過JS設計列印功能

票卷、QRCODE、訂單資訊、發票

`location.href = "http://www.yahoo.com.tw"`

## 動態擷取瀏覽器高度 - innerHeight

- `window.innerHeight`
- `window.outerHeight`：整個瀏覽器的高度