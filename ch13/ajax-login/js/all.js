

var login = document.querySelector('.login');

login.addEventListener('click', signin, false);

function signin() {
    var emailStr = document.querySelector('.account').value;
    var passStr = document.querySelector('.password').value;
    
    var xhr = new XMLHttpRequest();
    xhr.open('post', 'https://hexschool-tutorial.herokuapp.com/api/signin', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    var account = {
        email: emailStr,
        password: passStr
    };
    xhr.send(JSON.stringify(account));
    xhr.onload = function() {
        if (xhr.status !== 200) {
            alert('request fail!');
            return;
        }
        var resp = JSON.parse(xhr.responseText);
        if (resp.success) {
            alert(resp.message);
        } else {
            alert(resp.message);
        }
    }
}