import React,{useState} from 'react'
import { useTodo } from '../contexts/todoContext'

const TodoForm = () => {
    const [todo,setTodo]=useState("")
    const {addTodo}=useTodo()

    const add=(e)=>{
        e.preventDefault()
        if(!todo) return 
        addTodo({todo,completed:false})
        setTodo("")
    }


  return (
    // <div>TodoForm</div>
<form onSubmit={add} action="" className="todoForm">
    <input id="search-bar" type="text" placeholder="write todo..." value={todo} onChange={(e)=>setTodo(e.target.value)} />
    <button id="add" type="submit">Add</button>
    </form>
  )
}

export default TodoForm