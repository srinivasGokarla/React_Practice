import React, {useState} from 'react'

export default function Counter() {
    const[count, setCount] = useState(0)
  
    const Increment = () => {
      setCount(count+1)
    }
    const Decrement = () => {
      if(count > 0) {
        setCount(count-1)
      } else {
        setCount(0)
      }
    }

  return (
    <div>
        <h2>Counter Problem</h2>
        <h4>Counter: {count}</h4>
        <button onClick={ Increment }>+</button>
        <button onClick={Decrement}>-</button>

    </div>
   
    
  )
}
