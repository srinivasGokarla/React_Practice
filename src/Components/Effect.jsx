import React, {useState, useEffect} from 'react'

export default function Effect() {
    const[count, setCount] = useState(0);
    const Increment = () => {
        setCount(count+1)
    }
    const Decrement = () => {
        if(count > 0) {
            setCount(count-1) 
        }else {
            setCount(0)
        }
        
    }
    // useEffect(() => {
    //     document.title = `chats:${count}`
    //   //  alert(`${count}`)
    // })

  return (
    <div>
        <h2>Use Effect problem {count}</h2>
       <button onClick={Increment}>+</button>
       <button onClick={Decrement}>-</button>
    </div>
  )
}
