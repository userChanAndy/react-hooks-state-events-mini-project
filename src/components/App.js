import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTasks] = useState(TASKS)
  const [categories, setCategories] = useState("All")

  function handleAddTask ( newTask ) {
    setTasks([...tasks, newTask])
  }

  function deleteHandler (clickedTask) {
    const updatedTask = tasks.filter(task => task.text !== clickedTask)
    setTasks(updatedTask)
  }

  const tasksDisplayed = tasks.filter(
    (task) => categories === "All" || task.category === categories
  );



  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categories = {CATEGORIES}
      selectedCategory = {categories}
      setCategory = {setCategories}
      />
      <NewTaskForm 
      categories = {CATEGORIES.filter(category => category !== "All")}
      onTaskFormSubmit = {handleAddTask}
      />
      <TaskList
      tasks = {tasksDisplayed}
      handleDelete = {deleteHandler}
      tasksDisplayed = {tasksDisplayed}
       />
    </div>
  );
}

export default App;
