import "../App.css"
type TaskItem = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  onToggle: () => void;
  onDelete: () => void;
};

function TodoItem(props:TaskItem) {
    
  return <>
  <div className={props.completed? 'comp':'noComp'}>
        <h3>{ props.title }</h3>
        <p className="left">{props.description} {props.completed && '✅'}</p>
        <button className="redyButton" onClick={props.onToggle}>{props.completed?'not redy':'redy'}</button>
        <button className="delButton" onClick={props.onDelete}>Delete</button>
  </div>
  </>;
}
export default TodoItem