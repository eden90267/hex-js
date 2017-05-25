var xhr = new XMLHttpRequest();

xhr.open('get', 'https://hexschool.github.io/ajaxHomework/data.json', true);

xhr.send(null);

xhr.onload = function () { // 當確定資料有回傳，就會執行這個function
    console.log(xhr.responseText);
    var str = JSON.parse(xhr.responseText);
    document.querySelector('.message').textContent = str[0].name;
}
// 1. 建立了一個XMLHttpRequest
// 2. 傳送到對方伺服器要資料
// 3. 回傳資料到自己的瀏覽器
// 4. 拿到資料後再看要怎處理