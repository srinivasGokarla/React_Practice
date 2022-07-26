import React, {useState} from 'react'

export default function Handler() {
    const red = "#FF0000";
    const[col, setCol] = useState(red);
    const[name, setName] = useState("Click Me")

    const changeText = () => {
      let col = "#e8e808";
      setCol(col)
      setName("ouch!! 🥵")
    }
    const backText = () => {
      let col = "#120aef";

      setCol(col)
      setName(" Srinivas!! 😄")
    }
  return (
    <div style={{backgroundColor:col}}>
   <button onClick={changeText} onDoubleClick={backText}>{name}</button>
    </div>
  )
}
