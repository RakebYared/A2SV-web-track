var todos = [];
var input = document.getElementById('input');
var container = document.getElementById('container');
var addButton = document.getElementById('addButton');
function render() {
    container.innerHTML = '';
    todos.forEach(function (item, index) {
        var itemDiv = document.createElement('div');
        itemDiv.onclick = function () { return toggle(index); };
        itemDiv.innerHTML = "\n      <i class=\"".concat(item.status ? 'fas fa-check-circle' : 'far fa-circle', "\"></i>\n      <span style=\"margin-right: 50px;\">").concat(item.content, "</span>\n      <button onclick=\"editItem(").concat(index, ")\">Edit</button>\n      <button onclick=\"deleteItem(").concat(index, ")\">Delete</button>\n    ");
        container.appendChild(itemDiv);
    });
}
function addTodo() {
    var value = input.value.trim();
    if (value !== '') {
        todos.push({ content: value, status: false });
        input.value = '';
        render();
    }
}
function toggle(index) {
    todos[index].status = !todos[index].status;
    render();
}
function editItem(index) {
    var newValue = prompt('Edit item:', todos[index].content);
    if (newValue && newValue.trim() !== '') {
        todos[index].content = newValue.trim();
        render();
    }
}
function deleteItem(index) {
    todos.splice(index, 1);
    render();
}
addButton.onclick = addTodo;
window.editItem = editItem;
window.deleteItem = deleteItem;
