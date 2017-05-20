
// 可信任的資料
var farms = [];

document.getElementById('send').onclick = function() {
    var str = document.getElementById('content').value;

    document.getElementById('main').innerHTML = str; // 表單類的要禁用！！
}

// XSS：跨站指令攻擊(Cross-site scripting)