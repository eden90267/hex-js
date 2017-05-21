var el = document.querySelector('.header');

el.addEventListener('click', function (e) {
    console.log(e.target); // 點擊的元素是否是我們要的
    console.log(e.target.nodeName); // 可用if else判斷要點擊的是我要的元素
}, false);