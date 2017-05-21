var el = document.querySelector('.link');

el.addEventListener('click', function(e) {
    // 取消元素的默認行為

    // 原本點連結會跳轉到指定網頁

    // submit 按鈕，先透過我的js去查詢表單有無錯誤，post去傳送
    e.preventDefault();
    e.stopPropagation(); // 只執行目前我所監聽到的
    console.log('test');
});