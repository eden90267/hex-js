var area = document.querySelector('#areaId');
var list = document.querySelector('.list');
var country = [{
        farmer: '查理',
        place: '前鎮區'
    },
    {
        farmer: '卡斯伯',
        place: '苓雅區'
    },
    {
        farmer: '小花',
        place: '苓雅區'
    },
];

function updateList(e) {
    change(e.target.value);
}

function change(val) {
    list.innerHTML =
        country
            .filter(c => c.place === val)
            .reduce((res, c) => res + ('<li>' + c.farmer + '</li>'), "");
}

area.addEventListener('change', updateList, false);

change(area.value);