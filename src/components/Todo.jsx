import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { completeTodo, deleteTodo, removeAll } from '../redux/features/todoSlicer'

const Todo = () => {
  const todo = useSelector(state => state.todo)
  const dispatch = useDispatch()

  return (
    <ul>
      {todo.map(t => (
        <React.Fragment key={t.id}>
          <li>{t.title}</li>
          {t.isComplete ? <span>Done</span> : <span>Not Done</span>}
          <button onClick={() => dispatch(deleteTodo(t.id))}>delete</button>
          <button onClick={() => dispatch(completeTodo(t.id))}>complete</button>
        </React.Fragment>
      ))}
    </ul>
  )
}

export default Todo
