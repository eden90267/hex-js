
var xhr = new XMLHttpRequest();

xhr.open('get', 'https://hexschool.github.io/ajaxHomework/data.json', true);

// 第三個參數
// true 非同步，不會等資料傳回來，就讓程式繼續往下跑，等到回傳才會自動回傳
// false 它會等資料傳回來，才讓程式碼繼續往下跑

// 大部分用true來做設計

xhr.send(null);

console.log(xhr.responseText); // 根本還沒撈到就回傳