var country = [{
        farmer: '卡斯伯'
    },
    {
        farmer: '查理'
    },
    {
        farmer: '約翰'
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

function removeItem(e) {
    if (e.target.nodeName !== 'LI') return;
    var num = e.target.dataset.num;
    country.splice(num, 1);
    updateList(); // 重新渲染一次
}

list.addEventListener('dblclick', removeItem, false);

// 都從country來動手腳