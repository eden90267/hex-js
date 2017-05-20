var el = document.querySelector('.titleClass a');
el.setAttribute('href', 'http://www.yahoo.com.tw');

var el2 = document.querySelector('.str');
el2.setAttribute('id', 'strId');

var el3 = document.querySelector('.titleClass a');
console.log(el3.getAttribute('href'));
console.log(el3.textContent);
console.log(el3.innerHTML);

var el4 = document.querySelector('.titleClass');
console.log(el4.innerHTML);