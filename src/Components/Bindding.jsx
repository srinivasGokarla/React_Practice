import React, {useState} from 'react'

export default function Bindding() {
    const[value, setValue] = useState("")
  return (
    <div>
        <h2>Data Binding</h2>
        <input  type="text"
        placeholder="Enter name"
        value= {value}
        onChange={(e) => setValue(e.target.value)}
        />
       
        <p>{value}</p>
    </div>
  )
}
