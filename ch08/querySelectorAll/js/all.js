var el = document.querySelectorAll('.titleClass em');
// console.log(el);
// el.forEach(e => e.textContent = '123');

el[0].textContent = '123';
el[1].textContent = '123';

var elLen = el.length;

for(var i = 0; i < elLen; i++) {
    el[i].textContent = i + '123';
}