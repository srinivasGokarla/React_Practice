import React, {useState} from 'react';


export default function Toggle() {
    const[show, setShow] = useState(true);

  return (
    <div>
        <h2>Toggling</h2>
         <button onClick={() => setShow(!show)}>{show ? "Hide Element" : "Show Element"}</button>
         {show && <h5>Welcome to RectJs</h5>}
  
    </div>
  )
}
