


var account = {
    email: 'qqeuiee@hexschool.com',
    password: '1234'
};
var xhr = new XMLHttpRequest();
xhr.open('post', 'https://hexschool-tutorial.herokuapp.com/api/signup', true);
xhr.setRequestHeader('Content-type', 'application/json');

var data = JSON.stringify(account); // 需要轉成字串內容
xhr.send(data);