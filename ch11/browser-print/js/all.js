document.getElementById('print').onclick = function() {
    window.print();
}
document.getElementById('locat').onclick = function() {
    console.log(location);
}
document.getElementById('open').onclick = function() {
    window.open('http://www.google.com.tw/'); // 與location.href不同的是，有更多參數可以傳遞
}