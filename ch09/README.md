# ch09 event(事件)

## 什麼是事件

- Mouse Events
- Keyboard Events
- Frame/Object Events
- Form Events
- Drag Events
- Clipboard Events
- ...

## event物件 告知你當下元素資訊

## 各種事件綁定的差異

## addEventListener - 事件監聽

## 綁定事件的語法差異

`onclick`不能同時綁定兩個事件

## Event Bubbling、Event Capturing差異

`element.addEventListener(eventName, func(), true|false);`

- false (事件氣泡 - event Bubbling) - 從指定元素往外層找(比較合乎邏輯，由最近元素來觸發事件)

    泡泡點下去慢慢往外面跑出來

- true  (事件捕捉 - event capturing) - 從最外層開始找到指定元素

    大草原抓小兔子

※ 不寫預設是false

## StopPropagation - 中止冒泡事件

`e.stopPropagation(); // 阻止氣泡往外層找。其他監聽不要管，做好我的就好了`

## preventDefault - 取消預設觸發行為

取消元素的默認行為。原本點連結會跳轉到指定網頁。

a連結外，submit 按鈕，先透過我的js去查詢表單有無錯誤，post去傳送。

## e.target - 了解目前所在的元素位置

## change - 表單內容更動內容時觸發

變更資料觸發change事件

## keyCode - 點擊鍵盤，射發火箭！

## blur - 離開焦點時進行事件觸發

## mouse - 當滑鼠滑入指定內容時觸發

## 網頁座標 - 了解screen、page、client箇中差異

- page, client：是看瀏覽器座標去跑的
- pageY代表整個網頁的高度
- client代表瀏覽器的窗口
- screen是看整個螢幕解析度的

## 事件監聽優化篇 - 從父元素來監聽子元素內容

用父元素監聽，效能比較高，只要綁定一次addEventListener，然後再用e.target.nodeName來區別子元素