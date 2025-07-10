import { useState } from "react";


function ToDoForm(){
    const [inputs, setInputs] = useState({});
    
    const handleChange = (event:) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
  }
    const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }
return<>
    <form>
        <label htmlFor="title">Title:</label>
        <input 
            type="text" 
            name="title" 
            id="title" 
            placeholder="Add your title of task" 
            onChange={handleChange}></input>
        <label htmlFor="description">Description</label>
        <input 
            type="text" 
            name="description" 
            id="description" 
            placeholder="Add your description" 
            onChange={handleChange}></input>
        <button type="submit">Add Task</button>
    </form>
</>

}
export default ToDoForm;