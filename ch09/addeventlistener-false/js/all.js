var el = document.querySelector('.box');
el.addEventListener('click', function () {
    alert('box');
    console.log(`box`);
}, true);

var elBody = document.querySelector('.body');
elBody.addEventListener('click', function () {
    alert('body');
    console.log(`body`);
}, true);
// false (事件氣泡 - event Bubbling) - 從指定元素往外層找(比較合乎邏輯，由最近元素來觸發事件)
// true  (事件捕捉 - event capturing) - 從最外層開始找到指定元素
// 不寫預設是false

// 事件氣泡：泡泡點下去慢慢往外面跑出來
// 事件捕捉：大草原抓小兔子