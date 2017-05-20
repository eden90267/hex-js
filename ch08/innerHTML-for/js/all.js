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
for(var i = 0, str = ''; i < el.length; i++) {
    str += '<li>' + farms[i].farmer + '</li>';
}
el.innerHTML = str;