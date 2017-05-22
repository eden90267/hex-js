var country = [{
        farmer: '卡斯伯'
    },
    {
        farmer: '查理'
    }
]
var list = document.querySelector('.list');

// 更新農場資料
function updateList() {
    list.innerHTML = country
        .reduce((res, c, idx) =>
            res + `<li data-num="${idx}">${c.farmer}</li>`,
            '');
}
updateList();

function checkList(e) {
    if (e.target.nodeName !== 'LI') return;
    var num = e.target.dataset.num;
    alert(`你現在選擇的農夫是：${country[num].farmer}`);
}

// 綁定li效率會比較低落
list.addEventListener('click', checkList, false);