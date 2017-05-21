function count(e) {
    document.querySelector('#totalId').textContent =
        50 * parseInt(ham.value) + 30 * parseInt(coke.value);
}

function checkContent(e) {
    var str = e.target.value;
    if (str == '') {
        alert('此欄位不可為空');
    }
}

var el = document.querySelector('#countId');
el.addEventListener('click', count, false);

// focus 所在焦點
// blur  離開焦點

var ham = document.querySelector('#hamNumId');
ham.addEventListener('blur', checkContent, false);

var coke = document.querySelector('#cokeNumId');
coke.addEventListener('blur', checkContent, false);