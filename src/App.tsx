import './App.css'
import TodoList from './components/TodoList';
import { useState } from 'react';
type Task = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};
type TaskItem = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    {id:1,title:'first task',description:'Something',completed: false},
    {id:2,title:'my task',description:'Something else',completed: true},
    {id:3,title:'next task',description:'Nothing',completed: false},
    {id:4,title:'my task',description:'Something else',completed: true}
  ]);
  const toggleTaskCompleted = (id: number) => {
  setTasks(prev =>
    prev.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    )
  );
};
  return (
    <>
      <div>
        <h1>To-Do App</h1>
          {/* to do */}
            <TodoList tasks={tasks} onToggle={toggleTaskCompleted}/>
          {/* done */}
        <div>

        </div>
      </div>
    </>
  )
}

export default App
