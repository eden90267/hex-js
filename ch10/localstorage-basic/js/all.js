var btn = document.querySelector('.btnClass');
var call = document.querySelector('.btnCall');

function saveName(e) {
    var str = document.querySelector('.textClass').value;
    localStorage.setItem('myName', str);
}

btn.addEventListener('click', saveName, false);
call.addEventListener('click', function(e) {
    alert('你的名字叫做：' + localStorage.getItem('myName'));
}, false);
