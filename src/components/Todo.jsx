import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo } from '../redux/features/todoSlicer'

const Todo = () => {
    const todo=useSelector(state=>state.todo)
    const dispatch=useDispatch()
    todo.map((item)=>{
        console.log(item.payload);
    })
  return (
    <ul>
      {todo.map((item,idx)=>{
          return <li key={idx}>
          <span>{item.payload.title}</span>
          <button onClick={()=>dispatch(deleteTodo(item.id))} style={{margin:'0px 10px'}}>delete</button>
          <span>{item.payload.isComplete ? "done" : "not done"}</span>
          </li>
      })}
    </ul>
  )
}

export default Todo
