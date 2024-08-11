import React, { useState } from 'react';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';
import './App.css'; // Убедись, что импортируешь стили

interface Task {
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { text: 'Sample Task 1', completed: false },
    { text: 'Sample Task 2', completed: false }
  ]);

  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  const completeTask = (index: number) => {
    setTasks(tasks.map((task, i) => i === index ? { ...task, completed: true } : task));
  };

  const addTask = (task: string) => {
    setTasks([...tasks, { text: task, completed: false }]);
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true; // 'all' case
  });

  return (
    <div>
      <h1>ToDo List</h1>
      <AddTodo onAdd={addTask} />
      <div className="filter-buttons">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('active')}>Active</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
      </div>
      {filteredTasks.map((task, index) => (
        <TodoItem
          key={index}
          task={task.text}
          onComplete={() => completeTask(index)}
        />
      ))}
    </div>
  );
};

export default App;
