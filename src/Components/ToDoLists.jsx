import React from 'react'
import './Todo.css';

export default function ToDoLists(props) {
    
  return  ( <>
<div className="todo_style"> 

   <li className="">{props.text}</li>
   <button  onClick={() => {
       props.onSelect(props.id)
   }}>delete</button>
   
       
         </div>
  </>
  )
    
    
    


}
