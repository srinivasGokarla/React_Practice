import React, {useState} from 'react'

export default function Sumof() {
   const[value1, setValue1] = useState()
   const[value2, setValue2] = useState()
   const[total, setTotal] = useState(0)

   function CalculateTotal() {
    setTotal(value1 + value2)
   }
  return (
    <div>
        <h2>Sum of Two Numbers</h2>
       <input  type="number"
       placeholder="Enter number"
       value={value1}
       onChange={(e) => setValue1(+e.target.value)}/>
       <input  type="number"
       placeholder="Enter number"
       value={value2}
       onChange={(e) => setValue2(+e.target.value)}/>
       <button onClick={CalculateTotal}>Submit</button>
      <h3>  Total: { total || ""}</h3>
       
        

    </div>
  )
}
