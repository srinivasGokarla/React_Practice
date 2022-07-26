import React, {useState} from 'react'

export default function Input() {
    const[name, setName] = useState("");
    const[fullname, setFullname] = useState("")

    const inputChange  = (e) => {
        setName(e.target.value)
    }
    const onSubmit = () => {
        setFullname(name)
    }
  return (
    <div style={{backgroundColor:"green"}}>
        <h1>Hello {fullname}</h1>
        <input onChange={inputChange} type="text" placeholder="Enter Your Name" value={name}  />
        <button onClick={onSubmit} >Click me</button>
        <hr />
    </div>
  )
}
