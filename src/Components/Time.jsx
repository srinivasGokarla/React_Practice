import React, {useState} from 'react'

export default function Time() {
    
    let newTime = new Date().toLocaleTimeString();
    const[time, setTime] = useState(newTime);
    const TimeFunction = () => {
        newTime = new Date().toLocaleTimeString();
        setTime(newTime);
    }
  return (
    <div>
<h1>Time :{time} </h1>
<button onClick={TimeFunction }>GetTime</button>
    </div>
  )
}
