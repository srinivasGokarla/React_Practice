import React, {useState, useEffect} from 'react'

const Test = () => {
  const[data, setData] = useState(null);

  const getData = () => 
  
  fetch("https://apitest.lokaly.in/store/category_wise_items", {
    method : "POST",
    headers : {
       'Accept': 'application/json',
       'Content-Type': 'application/json'

    },body :JSON.stringify({"store_id":315,"category_id":34224}) 

    
}).then(response=> response.json())

useEffect(() => {
  getData().then((data) => setData(data))
}, [])
    
  return (
    <div>
      <h1>Showing Data</h1>
    </div>
  )
}

export default Test
