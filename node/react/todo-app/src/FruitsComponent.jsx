import React, { useState } from 'react'

export default function FruitsComponent() {
  
    const [fruit, setFruit] = useState("");
    const [fruits, setFruits] = useState([]);

    
    const fruitHandler = e =>
        setFruit(e.target.value);
    const fruitSubmitHandler = () => {
        const todoObj = {
            id: fruits.length,
            name: fruit
        }

        setFruits([...fruits, todoObj]);
        setFruit("");
    };

  return (
    <div className='container bg-light'>
        <h1>FruitsComponent</h1>
            <input type="text" value={fruit} onChange={fruitHandler} className='form-control' />
            <br />
            <button className='btn btn-success' onClick={fruitSubmitHandler}>AddFruit</button>
            <br />
            <br />
            {
                fruits.map(fruit => (
                    <li key={fruit.id}>{fruit.name}</li>
                ))
            }
    </div>
  )
}
