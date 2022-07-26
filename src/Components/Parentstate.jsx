import React, {useState} from 'react'
function Child({setValue}) {
return (
    <>
      <h3>Child Component</h3>
      <button onClick={() => setValue("parent component updated")}>Update</button>
   
    </>
)
}

export default function Parentstate() {
    const[value, setValue] = useState("I need to be updated from my child")
  return (
    <div>
      <h2>Changing Parent component</h2>
      <div>{value}</div>
      <Child  setValue={setValue}/>

    </div>
  )
}
