import React, { useState } from 'react';
import './AddTodo.css';

interface AddTodoProps {
  onAdd: (task: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (inputValue.trim() === '') return;
    onAdd(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter a new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTodo;
