import React from "react";

function Task({ text, categories, handleDelete}) {

  function deleteTask () {
    handleDelete(text)
  }

  return (
    <div className="task">
      <div className="label">{categories}</div>
      <div className="text">{text}</div>
      <button onClick={deleteTask} className="delete">X</button>
    </div>
  );
}

export default Task