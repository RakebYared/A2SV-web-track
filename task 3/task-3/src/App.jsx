import { useState } from 'react';
import './app.css';
import { FaCheckCircle, FaRegCircle, FaEdit, FaTrash } from 'react-icons/fa';
import ContactForm from './ContactForm';

export default function App() {

  
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, { content: input.trim(), status: false }]);
      setInput('');
    }
  };

  const toggle = (index) => {
    const updated = [...todos];
    updated[index].status = !updated[index].status;
    setTodos(updated);
  };

  const editItem = (index) => {
    const newValue = prompt('Edit item:', todos[index].content);
    if (newValue && newValue.trim() !== '') {
      const updated = [...todos];
      updated[index].content = newValue.trim();
      setTodos(updated);
    }
  };

  const deleteItem = (index) => {
    const updated = todos.filter((_, i) => i !== index);
    setTodos(updated);
  };

  return (
    <div className="app">
      <ContactForm></ContactForm>
      <h1>Todo List</h1>
      <div className="input-group">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <div key={index} className="todo-item" onClick={() => toggle(index)}>
            {todo.status ? <FaCheckCircle className="icon" /> : <FaRegCircle className="icon" />}
            <span className={`content ${todo.status ? 'completed' : ''}`}>{todo.content}</span>
            <button 
              onClick={(e) => { e.stopPropagation(); editItem(index); }}
              className="action-btn"
            >
              <FaEdit />
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); deleteItem(index); }}
              className="action-btn"
            >
              <FaTrash />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}