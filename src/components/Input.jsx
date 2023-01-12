import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, removeAll } from '../redux/features/todoSlicer'

const Input = () => {
  const tasks = useSelector(state => state.todo)
  console.log(tasks);
  const inputRef = useRef()
  const dispatch = useDispatch()
  const addTask = (e) => {
    e.preventDefault()
    if (!inputRef.current.value) return;
    dispatch(
      addTodo({
        title: inputRef.current.value,
        id: Date.now(),
        isComplete: false
      }),

    )
    inputRef.current.value = ""
  }
  return (
    <div>
      <form onSubmit={(e) => addTask(e)}>
        <input ref={inputRef} type="text" />
        <button>Add</button>
        <button onClick={() => dispatch(removeAll())}>remove</button>
      </form>
    </div>
  )
}

export default Input
