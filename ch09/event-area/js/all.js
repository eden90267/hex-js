// 用父元素監聽，效能比較高，只要綁定一次addEventListener，
// 然後再用e.target.nodeName來區別子元素
var list = document.querySelector('.list');
list.addEventListener('click', checkName, false);

function checkName(e) {
    if (e.target.nodeName !== 'LI') return;
    console.log(e.target.textContent);
}