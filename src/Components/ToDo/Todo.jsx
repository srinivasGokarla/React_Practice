import React,{useState, useEffect} from 'react';
import "./Todo.css"

const getLocalItems = () => {
    let list = localStorage.getItem('lists');
    if(list) {
        return JSON.parse(localStorage.getItem('lists'))
    } else {
        return [];
    }

}

export default function Todo() {
const[inputData, setinputData] = useState('');
const[items, setItems] = useState(getLocalItems());
const[toggle, setToggle] = useState(true);
const[edit, setEdit] = useState(null);

const addItem = () => {
if(!inputData) {
   

} else if(inputData && !toggle) {
    setItems(
        items.map((elem) => {
            if(elem.id === edit) {
                return{ ...elem, name:inputData}
            }
   return elem;
        })
    )
    setToggle(true)
    setinputData("")
    setEdit(null);

} else {
    const allInputData = { id :new Date().getTime().toString(), name:inputData}
    setItems([...items, allInputData])
    setinputData("")
}
}
useEffect(() => {
localStorage.setItem('lists', JSON.stringify(items))
}, [items])
    


const DeleteItem = (index) => {
    const updatedItems = items.filter((ele) => {
        return index !== ele.id;
    })
setItems(updatedItems)
}

const editItem = (id) => {
    let newEditItems = items.find((ele) => {
        return ele.id === id
    })
    setToggle(false)
    setinputData(newEditItems.name)
    setEdit(id);

}

const RemoveAll = () => {
    setItems([])
}

  return (
    <>
      <div className="main-div">
        <div className="child-div">
           
           <div className="addItems">
              <input type="text"
                 placeholder=" ✍️ Add Items"
                 value={inputData}
                onChange={(e)=>setinputData(e.target.value) }/>
                {
                    toggle ? <i className="fa fa-plus add-btn" title="Add Item" onClick={addItem}></i> :  <i className="far fa-edit add-btn" title="Update Item" onClick={addItem}></i>
                }
                
           </div>

           <div className="showItems">
            {items.map((ele) => {
                return (
               <div className="eachItem" key={ele.id}>
                <h3>{ele.name}</h3>
                <div className="todo-btn">
                <i className="far fa-edit add-btn" title="Delete Item" onClick={() => editItem(ele.id)}></i>

                 <i className="far fa-trash-alt add-btn" title="Delete Item" onClick={() => DeleteItem(ele.id)}></i>
                </div>
               
            </div>
                )
            })}
            

           </div>
           <div className="showItems">
            <button className='btn effect04' data-sm-link-text="Remove All" onClick={RemoveAll}><span>CHECK LIST</span></button>

           </div>

        </div>

      </div>
    </>
  )
}
