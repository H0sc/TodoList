import React from 'react';
import { v4 as uuidv4 } from "uuid";

function Form( { todos, setTodos, inputText, setInputText, setStatus } ) {

  //  FUNCTIONS
  function addTodoButtonHandler (e) {
    e.preventDefault()
    setTodos([
      ...todos, {text: inputText, complete: false, id: uuidv4()}
    ]);
    setInputText("")
  };
  function statusHandler (e) {
    setStatus(e.target.value)
  }

  // RENDER
  return (
    <div>
      <form>

        <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)}/>

        <button onClick={addTodoButtonHandler}>add</button>

        <select name="todo-status" onChange={statusHandler}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>

      </form>
    </div>
  )
}

export default Form