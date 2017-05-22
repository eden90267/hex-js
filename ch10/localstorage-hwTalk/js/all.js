var text = document.querySelector('.text');
var send = document.querySelector('.send');
var list = document.querySelector('.list');

send.addEventListener('click', function (e) {
    if (text.value === '') {
        alert('todo content is required!');
        return;
    }
    createItem(text.value);
    updateList();
    text.value = '';
}, false);

list.addEventListener('click', function (e) {
    if (e.target.nodeName !== 'A') return;
    var idx = e.target.dataset.idx;
    deleteItem(idx);
    updateList();
}, false);

/**
 * todos = [{todo: 'item1'}, {todo: 'item2'}, ...]
 */
function getTodos() {
    var todos = localStorage.getItem('todos');
    return todos ? JSON.parse(todos) : [];
}

function saveTodos(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function createItem(content) {
    var todos = getTodos();
    todos.push({
        todo: content
    });
    saveTodos(todos);
}

function deleteItem(idx) {
    var todos = getTodos();
    todos.splice(idx, 1);
    saveTodos(todos);
}

function updateList() {
    list.innerHTML =
        getTodos().reduce((res, item, idx) =>
            res + `<li><a data-idx="${idx}" href="#">刪除</a> ${item.todo}</li>`,
            "");
}

updateList();