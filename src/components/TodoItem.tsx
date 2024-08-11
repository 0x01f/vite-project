import React from 'react';
import './TodoItem.css';

interface TodoItemProps {
  task: string;
  onComplete: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ task, onComplete }) => {
  return (
    <div className="todo-item">
      <span>{task}</span>
      <button onClick={onComplete}>Complete</button>
    </div>
  );
};

export default TodoItem;
