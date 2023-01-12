import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../redux/features/CounterSlice'

const Counter = () => {
    const counter=useSelector(state=>state.counter.value)
    const dispatch=useDispatch()
  return (
    <div>
        <h1>{counter}</h1>
      <button onClick={()=>dispatch(increment())}>increase</button>
      <button onClick={()=>dispatch(decrement())}>decrease</button>
      <button onClick={()=>dispatch(reset())}>reset</button>
      <button onClick={()=>dispatch((incrementByAmount(10)))}>incrementByAmount</button>
    </div>
  )
}

export default Counter
