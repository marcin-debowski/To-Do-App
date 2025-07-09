import "../App.css"
type TaskItem = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  onToggle: () => void;
};

function TodoItem(props:TaskItem) {
    
  return <>
  <div className={props.completed? 'comp':'noComp'}>
        <h3>{ props.title }</h3>
        <p>{props.description} {props.completed && '✅'}</p>
        <button onClick={props.onToggle}>{props.completed?'not redy':'redy'}</button>
  </div>
  </>;
}
export default TodoItem