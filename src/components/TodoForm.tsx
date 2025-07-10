import { useState } from "react";
type TaskInput = {
  title: string;
  description: string;
};
type ToDoFormProps = {
  addTaskHandle: (task: TaskInput) => void;
};

function ToDoForm({ addTaskHandle }: ToDoFormProps) {
  const [inputs, setInputs] = useState<TaskInput>({
    title: "",
    description: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!inputs.title.trim()) return;
    addTaskHandle(inputs);
    setInputs({ title: "", description: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Add your title of task"
        value={inputs.title}
        onChange={handleChange}
      />
      <label htmlFor="description">Description:</label>
      <input
        type="text"
        name="description"
        id="description"
        placeholder="Add your description"
        value={inputs.description}
        onChange={handleChange}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}
export default ToDoForm;