import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useState } from "react";
import Task from "./components/Task";

function App() {
  const [label, setLabel] = useState("");
  const [category, setCategory] = useState("");
  const [isUrgent, setIsUrgent] = useState(false);
  const [tasks, setTasks] = useState<any>([]);
  const [buttonName, setButtonName] = useState("Create Task");
  const [selectedTaskIndex, setSelectedTaskIndex] = useState(0);

  const handleChangeLabel = (event: any) => {
    const value = event.target.value;
    setLabel(value);
  };

  const handleChangeCategory = (event: any) => {
    const value = event.target.value;
    setCategory(value);
  };

  const handleChangeIsUrgent = (event: any) => {
    const checked = event.target.checked;
    setIsUrgent(checked);
  };

  const handleSubmit = () => {
    if (buttonName === "Create Task") {
      const newTask = { label, category, isUrgent };
      const newTasks = [...tasks, newTask];
      setTasks(newTasks);
    } else {
      const newTask = { label, category, isUrgent };
      const newTasks = [...tasks];
      newTasks[selectedTaskIndex] = newTask;
      setTasks(newTasks);
      setButtonName("Create Task");
    }
    setLabel("");
    setCategory("");
    setIsUrgent(false);
    
  };
  const handleDeleteTask = (index: number) => {
    const filteredTasks = tasks.filter((task: any, i: number) => {
      return i !== index;
    });
    setTasks(filteredTasks);
  };
  const handleEditTask = (index: number) => {
    const taskToEdit = tasks[index];
    setLabel(taskToEdit.label);
    setCategory(taskToEdit.category);
    setIsUrgent(taskToEdit.isUrgent);
    setButtonName("Update Task");
    setSelectedTaskIndex(index);
  };

  return (
    <div>
      <form>
        <div className="mb-3">
          <label className="form-label">Label</label>
          <input
            className="form-control"
            value={label}
            onChange={handleChangeLabel}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Category </label>
          <select
            className="form-select"
            value={category}
            onChange={handleChangeCategory}
          >
            <option>Grocery</option>
            <option>Studies</option>
            <option>Work</option>
            <option>Gym</option>
          </select>
        </div>

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            checked={isUrgent}
            onChange={handleChangeIsUrgent}
          />
          <label className="form-check-label">Urgent ?</label>
        </div>

        <button
          type="button"
          className="btn btn-success"
          onClick={handleSubmit}
        >
          {buttonName}
        </button>
      </form>
      {tasks.map((x: any, index: number) => {
        return (
          <Task
            label={x.label}
            category={x.category}
            isUrgent={x.isUrgent}
            handleDeleteTask={handleDeleteTask}
            handleEditTask={handleEditTask}
            index={index}
          />
        );
      })}
    </div>
  );
}

export default App;
