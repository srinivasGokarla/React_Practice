import React, {useState} from 'react'

export default function Disable() {
    const[value, setValue] = useState("")
  return (
    <div>
       <h2>Disabled Button</h2>
       <input type="text"
       placeholder="Enter Text"
       onChange={(e) => setValue(e.target.value)}
       value={value} />
       <button disabled={value.length < 1}>submit</button>
       <h5>{value}</h5>
    </div>
  )
}
