interface Todo {
  content: string;
  status: boolean;
}

const todos: Todo[] = [];

const input = document.getElementById('input') as HTMLInputElement;
const container = document.getElementById('container') as HTMLDivElement;
const addButton = document.getElementById('addButton') as HTMLButtonElement;

function render(): void {
  container.innerHTML = '';
  todos.forEach((item, index) => {
    const itemDiv = document.createElement('div');
    itemDiv.onclick = () => toggle(index);
    itemDiv.innerHTML = `
      <i class="${item.status ? 'fas fa-check-circle' : 'far fa-circle'}"></i>
      <span style="margin-right: 50px;">${item.content}</span>
      <button onclick="editItem(${index})">Edit</button>
      <button onclick="deleteItem(${index})">Delete</button>
    `;
    container.appendChild(itemDiv);
  });
}

function addTodo(): void {
  const value = input.value.trim();
  if (value !== '') {
    todos.push({ content: value, status: false });
    input.value = '';
    render();
  }
}

function toggle(index: number): void {
  todos[index].status = !todos[index].status;
  render();
}

function editItem(index: number): void {
  const newValue = prompt('Edit item:', todos[index].content);
  if (newValue && newValue.trim() !== '') {
    todos[index].content = newValue.trim();
    render();
  }
}

function deleteItem(index: number): void {
  todos.splice(index, 1);
  render();
}

addButton.onclick = addTodo;

(window as any).editItem = editItem;
(window as any).deleteItem = deleteItem;
