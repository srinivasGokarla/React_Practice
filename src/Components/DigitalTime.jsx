import React, {useState} from 'react'

export default function DigitalTime() {
    let  time = new Date().toLocaleTimeString()
    const[ctime, setCtime] = useState(time);
  
    const UpdateTime = () => {
        time = new Date().toLocaleTimeString()
        setCtime(time)
    }
    setInterval(UpdateTime,1000)

  return (
    <div>
<h1>Digital Time: {ctime}</h1>
    </div>
  )
}
