import React, { useEffect, useState } from 'react'

export default function UseEffectCount() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    useEffect(() => {
        document.title = `You clicked ${count} times`;
        console.log("useEffect");
    }, [count]);


    return (
        <div>
            <h3>UseEffectCount</h3>
            <label>Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <div>
                <label>Name</label>
                <p>{name}</p>
            </div>
            <h2>Count: {count}</h2>
            <button className='btn btn-primary' onClick={() => setCount(count + 1)}>Count</button>



        </div>
    )
}
