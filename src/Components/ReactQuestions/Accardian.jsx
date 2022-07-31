import React, {useState} from 'react';
import './Accardian.css';


export default function Accardian({id, question, answer}) {
    const[show, setShow ] = useState(false);

  return (
    <div>
      <div className="inner">
        <button onClick={() => setShow(!show)}>{ show? "-" :"+"}</button>
      <h3>{question}</h3>
      </div>
      {show && <p>{answer}</p> }
       
    
    </div>
  )
}
