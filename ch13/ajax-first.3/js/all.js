// 200 資料有正確回傳，有撈到
// 404 資料讀取錯誤，沒有撈到

var xhr = new XMLHttpRequest();

xhr.open('get', 'https://hexschool.github.io/ajaxHomework/data1.json', true);

xhr.send(null);

xhr.onload = function () {
    console.log(xhr.responseText);
    if (xhr.status == 200) {
        var str = JSON.parse(xhr.responseText);
        document.querySelector('.message').textContent = str[0].name;
    } else {
        console.log('資料錯誤！！');
    }
}