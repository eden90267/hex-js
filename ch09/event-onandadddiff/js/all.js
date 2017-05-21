var elOn = document.querySelector('.btnOn');
elOn.onclick = function () { // 不執行，後面會覆蓋前面
    alert('on-1');
}
elOn.onclick = function () { // 執行
    alert('on-2');
}

// 事件監聽
var elAdd = document.querySelector('.btnAdd');
elAdd.addEventListener('click', function () {
    alert('add-1');
}, false);
elAdd.addEventListener('click', function () {
    alert('add-2');
}, false);