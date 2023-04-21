import React from 'react'

function Todo( {text, todo, todos, setTodos} ) {  
  function deleteButtonHandler () {
    setTodos(todos.filter((el) => el.id !== todo.id))
  }
  function completeButtonHandler () {
    setTodos(todos.map((item) => {
      if(item.id === todo.id) {
          return { ...item, complete: !item.complete }
        }
        else {
          return item
        } 
    }))
  }

  return (
    <div className='todo'>
      <li className={`todo-item ${todo.complete ? "completed" : ""}`}>{text}</li>
      <button className='check-item' onClick={completeButtonHandler}>done</button>
      <button className="delete-item" onClick={deleteButtonHandler}>del</button>
    </div>
  )
}

export default Todo