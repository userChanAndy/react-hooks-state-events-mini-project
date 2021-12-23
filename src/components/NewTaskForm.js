import React, {useState} from "react";

function NewTaskForm({categories,onTaskFormSubmit}) {
  const [text, setText] = useState("")
  const [category, setCategory] = useState("Code")

  function handleSubmit (submitClicked) {
    submitClicked.preventDefault()
    onTaskFormSubmit({text, category})
    setText("")
    setCategory("Code")
  }
  const categoryList = categories.map(category => {
    return(
      <option key = {category}>{category}</option>
    )
  })

  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" onChange = {inputText => setText(inputText.target.value)}/>
      </label>
      <label>
        Category
        <select value = {category} name="category" onChange = {(changeCat)=> setCategory(changeCat.target.value)}>
          {/* render <option> elements for each category here */}
          {categoryList}
        </select>
      </label>
      <input onClick={handleSubmit} type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
