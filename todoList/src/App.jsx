import { useState,useEffect } from 'react'
import './App.css'
import { TodoProvider } from './contexts/todoContext'
import { TodoForm, TodoItem } from './contexts'

function App() {
  const [todos,setTodos]=useState([])
 

const addTodo=(todo)=>{
  setTodos((prev)=>[{id:Date.now(),...todo},...prev])
}


const updateTodo=(id,todo)=>{
  setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id?todo:prevTodo)))
}

const deleteTodo=(id)=>{
  setTodos((prev) => prev.filter((todos)=>todos.id !==id))

}
const toggleComplete=(id)=>{
  setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id===id ? {...prevTodo,completed : !prevTodo.completed}:  prevTodo))
//...prevTod means we accessed all the values
}

useEffect(()=>{
const todos=JSON.parse(localStorage.getItem("todos"))
if(todos && todos.length > 0){
  setTodos(todos)
}

},[])

useEffect(()=>{
  localStorage.setItem("todos",JSON.stringify(todos))
},[todos])

 





  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
<div className="parent">
  <div className="title">
  <h1>Manage your Todos</h1>
  </div>
 <div><TodoForm/></div>  
  <div>
{todos.map((todo)=>(
  <div key={todo.id}><TodoItem todo={todo}/></div>

))}

  </div>
  </div>    

    
    </ TodoProvider>
  )
}

export default App
