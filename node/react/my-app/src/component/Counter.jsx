import React from 'react'
import { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)

    const increaseHandler = () => {
        setCount(count + 1)
    }
    const resetHeandler = () => {
        setCount(0)
    }
    const decreaseHandler = () => {
        setCount(count - 3)
    }

  return (
    <div className='container text-center'>
        <h1>{count}</h1>
        <button className='btn btn-primary me-2' onClick={() => setCount(count + 5)}>IncreaseMentByThree</button>
        <button
        onClick = {increaseHandler}
         className='btn btn-primary me-2'>Increment</button>
        <button onClick={decreaseHandler} className='btn btn-primary me-2'>Decrement</button>
        <button className='btn btn-primary me-2' onClick={() => setCount(count - 3)}>decreaseMentByThree</button>
        <button onClick={resetHeandler} className='btn btn-primary me-2'>Reset</button>
        
    </div>
  )
}
