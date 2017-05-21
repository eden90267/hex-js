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