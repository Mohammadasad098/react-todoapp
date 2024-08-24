import { useRef } from "react"
import { useState } from "react"

const App = () =>{
  const [todo , setTodo] = useState([])
  const todoVal = useRef()

  const addTodo = (event)=>{
    event.preventDefault()
    todo.push(todoVal.current.value)
    setTodo([...todo])
    console.log(todo);

    todoVal.current.value = ''
    


  }
  const deleteTodo = (index) =>{
    todo.splice(index , 1)
    setTodo([...todo])

  }
  const editTodo = (index) =>{
    const newVal = prompt('Enter new todo value')
    todo.splice(index , 1 , newVal)
    setTodo([...todo])

  }
  return(
    <div className="text-center">
    <h1 className="my-5">React TodoApp</h1>
    <form onSubmit={addTodo}>
      <input className="px-5 py-2" type="text" placeholder="Enter Todo" ref={todoVal} required/> <br />
<button type="submit" className="my-3 btn btn-outline-success">Add Todo</button>
    </form>
    <ul className="list-unstyled">
      {todo.map((item , index) =>{
        return <div key={index}>
          <h3><li className="text-danger">{item}</li></h3> <br />
<button type="button" class="btn btn-warning" onClick={()=>deleteTodo(index)}>Delete Todo</button> &nbsp;&nbsp;
<button type="button" class="btn btn-warning" onClick={()=>editTodo(index)}>Edit Todo</button>
        </div>
      })}
    </ul>
    
    
    </div>
  )
}
export default App