import React, {useState} from 'react';
import './Todo.css';
import ToDoLists from './ToDoLists';

export default function ToDo() {
    const [items, setItems] = useState("")
    const [list, setList] = useState([])

const InputEvent = (e) => {
        setItems(e.target.value)
    }
const ListItems = () => {
    setList ((prev)=> {
       return   [...prev, items]
    })
   setItems("")
}
const deleteItem = (id) => {
    console.log("deleted")
    setList((prev) => {
        return prev.filter((arrelm, index) => {
         return index !== id
        })
    })
        }
  return (
    <div className="main_div">
        <div className="center+div">
        <h1 className="to">TODO LIST</h1>
        <input className="in" onChange={InputEvent} type="text" placeholder="Enter Todo"
        value={items}/>
        <button className="btn" onClick={ListItems}>+</button>
        <ol className="ol">
           
           
           {list.map((old, index) => {
            
          return  < ToDoLists
           text={old}
           key={index}
           id={index} 
           onSelect={deleteItem}/>
           })}
        </ol>

        </div>
       
    </div>
  )
}
