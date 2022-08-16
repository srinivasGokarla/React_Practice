import React, {useState} from 'react'

export const Interview = () => {

    const[value, setValue] = useState()
  return (
    <div>
        <h1>CLoud4c Interview Question</h1>
        <input type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}/>
        <input type="number"
            value={200- value}
            onChange={(e) => setValue(e.target.value)} />
    </div>
  )
}
