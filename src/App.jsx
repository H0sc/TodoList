import { useEffect, useState } from 'react'
import Form from './Form'
import TodoList from './TodoList'

function App() {
  
  // STATES
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState("all")
  const [filteredTodos, setFilteredTodos] = useState([])
  
  // USE EFFECT
  useEffect(() => {
    getLocalTodos()
  }, [])

  useEffect(() => {
    filterHandler()
    saveTodosLocally()
  }, [todos, status])
  
  // FUNCTIONS & EVENTS
  function filterHandler () {
    switch(status){
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.complete === true));
      break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.complete === false));
      break;
      default:
        setFilteredTodos(todos);
      break;
    }
  }

  function saveTodosLocally () {
    localStorage.setItem("todos", JSON.stringify(todos))
    console.log("todos saved in local storage: ", localStorage.getItem("todos"));
  }

  function getLocalTodos(){
    if(localStorage.getItem("todos")){
      let localTodos = JSON.parse(localStorage.getItem("todos"))
      setTodos(localTodos)
    }
  }

  return (
    <div className="App">
      <div>
        <Form 
          todos={todos} 
          setTodos={setTodos} 
          inputText={inputText} 
          setInputText={setInputText}
          status={status}
          setStatus={setStatus}
        />
        <TodoList 
          todos={todos} 
          setTodos={setTodos}
          filteredTodos={filteredTodos}
        />
      </div>
    </div>
  )
}

export default App
