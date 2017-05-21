var el = document.querySelector('.btn');

// 監聽
el.addEventListener('click', function(e) {
    alert('Hello');
}, false); // (選擇事件, 帶入匿名function, false)