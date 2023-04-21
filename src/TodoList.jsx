import React from 'react'
import Todo from './Todo'

function TodoList({ todos, setTodos, filteredTodos }) {
  return (
    <div>
      <ul>
        {filteredTodos.map(todo => (
          <Todo 
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            text={todo.text} 
            key={todo.id} 
            complete={todo.complete}
          />
        ))}
      </ul>
    </div>
  )
}

export default TodoList