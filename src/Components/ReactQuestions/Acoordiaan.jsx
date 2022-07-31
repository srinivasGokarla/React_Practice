import React, {useState} from 'react';
import {questions}  from "./api";
import Accardian from "./Accardian";
import './Accardian.css';

export default function Acoordiaan() {
    const[data,setData] = useState(questions)

  return (
    <div>
       
        <section className="main">
        <h1>React Questions and Answers</h1>
        {data.map((item) => {
    const {id, question, answer} = item
    return < Accardian  key={id} {...item}/>
   })}
        </section>
  
    </div>
  )
}
