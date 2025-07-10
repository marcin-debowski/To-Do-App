import TodoItem from "./TodoItem"
type Task = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};
type TodoListProps = {
  tasks: Task[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

function TodoList({tasks, onToggle, onDelete}:TodoListProps){

return (
<div className='toDo'>
    {tasks.map((task) => <TodoItem 
    key={task.id} 
    id={task.id} 
    title={task.title} 
    description={task.description} 
    completed={task.completed}
    onToggle={() => onToggle(task.id)}
    onDelete={() => onDelete(task.id)}/>)}
</div>
)
}
export default TodoList