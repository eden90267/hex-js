var str = document.createElement("em");
str.textContent = '1234';
str.setAttribute('class', 'blue');

// 增加子節點
document.querySelector('.title').appendChild(str);

