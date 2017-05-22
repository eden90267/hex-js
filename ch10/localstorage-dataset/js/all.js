var list = document.querySelector('.list li');

// 確認點擊的農夫是誰，以及相關的資訊

function checkList(e) {
    var num = e.target.dataset.num;
    var dog = e.target.dataset.dog;
    console.log(`農夫編號是：${num}, 有${dog}隻狗`);
}

list.addEventListener('click', checkList, false);