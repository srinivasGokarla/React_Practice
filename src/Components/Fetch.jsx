import React, {useState, useEffect} from 'react'

export default function Fetch() {
    const[data, setData] = useState(null);
    const getData = () => 
      fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((res)=> res.json())
    
    useEffect(() => {
      getData().then((data) =>setData(data))
    }, [])
  
return (
    <div>
        <h1>Fetch</h1>
        {data?.map((item) =>
        <div key={item.id}>
            <hr/>
            <p>Id:  {item.id}</p>
            <p>userId:  {item.userId}</p>
            <p> title:  {item.title}</p>
            <p>completed: {item.completed}</p>
         
           
            
           
        </div>)}
       
       
    </div>
)
}
