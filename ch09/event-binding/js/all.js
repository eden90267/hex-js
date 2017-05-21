var btn = document.querySelector('.btn');

btn.onclick = function() {

};

// function sayHello() {
//     alert('hello!');
// } 

// 監聽
// 可在任何元素上綁定任何事件
btn.addEventListener('click', function() {
    alert('hello2');
}, false); // 比較推薦的寫法