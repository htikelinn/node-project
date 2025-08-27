import React, { useContext } from 'react'
import { CounterContext } from '../App'

export default function ContextCounter() {
  const { counter, decrement, increment } = useContext(CounterContext)
  return (

    <div>
      <h1>{counter}</h1>
      <button onClick={decrement} className='btn btn-primary me-2'>Decrement</button>
      <button onClick={increment} className='btn btn-primary me-2'>Increment</button>
    </div>
  )
}
