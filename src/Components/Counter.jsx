import React, {useState} from 'react'

export default function Counter() {
    const[count, setCount] = useState(0)

  return (
    <div>
        <h2>Counter Problem</h2>
        <h4>Counter: {count}</h4>
        <button onClick={() => setCount(count+1)}>+</button>
        <button onClick={() => setCount(count-1)}>-</button>

    </div>
   
    
  )
}
