var el = document.querySelector('.box');
el.addEventListener('click', function (e) {
    e.stopPropagation(); // 阻止氣泡往外層找。其他監聽不要管，做好我的就好了
    alert('box');
    console.log(`box`);
}, false);

var elBody = document.querySelector('.body');
elBody.addEventListener('click', function () {
    alert('你沒有點到box');
    console.log(`你沒有點到body`);
}, false);
// false (事件氣泡 - event Bubbling) - 從指定元素往外層找(比較合乎邏輯，由最近元素來觸發事件)
// true  (事件捕捉 - event capturing) - 從最外層開始找到指定元素
