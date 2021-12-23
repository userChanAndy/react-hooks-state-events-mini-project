import React from "react";
import Task from "./Task";


function TaskList({tasks, handleDelete}) {

const displayTask = tasks.map(task => {
  return (
    <Task
    handleDelete = {handleDelete}
    key = {task.text}
    text = {task.text}
    categories = {task.category}
    
    />
  )
})
  return <div className="tasks">{displayTask}</div>;
}

export default TaskList;
