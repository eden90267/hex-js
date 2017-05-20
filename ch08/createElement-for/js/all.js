var farms = [
    {
        farmer: '卡斯伯',
        dogs: ['張姆士', '龐約'],
    },
    {
        farmer: '查理',
        dogs: ['皮皮'],
    }
];

var el = document.querySelector('.list');
for (var i = 0; i < farms.length; i++) {
    var str = document.createElement('li');
    str.textContent = farms[i].farmer;
    el.appendChild(str);
}