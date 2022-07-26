import React, {useState} from 'react'

export default function TwoInput() {
    const[name, setName] = useState("");
    const[firstname, setFirstname] = useState("");
    const[last, setLast] = useState("");
    const[lastName, setLastName] = useState("");

    const inputChange  = (e) => {
        setName(e.target.value)
        
    }
    const inputChange1  = (e) => {
        setLast(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        setFirstname(name);
        setLastName(last)
        
    }
  return (
    <div style={{backgroundColor:"blue"}}>
        <form onSubmit={onSubmit} >
        <h1>Hello {firstname} {lastName} {""}</h1>
        <input onChange={inputChange} type="text" placeholder="Enter Your Name" value={name}  />
        <input onChange={inputChange1} type="text" placeholder="Enter Your Name" value={last}  />
        <button type="submit" >Click me</button>
        </form>
        
    </div>
  )
}
