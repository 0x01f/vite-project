import React, { useState } from 'react'; // Удали импорт React, если не используется

import TodoItem from './components/TodoItem';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>(['Sample Task 1', 'Sample Task 2']);

  const completeTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>ToDo List</h1>
      {tasks.map((task, index) => (
        <TodoItem
          key={index}
          task={task}
          onComplete={() => completeTask(index)}
        />
      ))}
    </div>
  );
};

export default App;
