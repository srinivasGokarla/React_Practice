import React, {useEffect, useState} from 'react'

export default function Pract() {
    const[data, setData] = useState("")

    const getData = () => 
        fetch("https://data.covid19india.org/data.json").then((res) => res.json())
 


    useEffect(() => {
        getData().then((data) => setData(data.statewise))
    })
   // console.log(getData())
    // const getData = async () => {
    //     const res =  await fetch("https://data.covid19india.org/data.json");

    //     const reldata = await res.json()
    //     console.log(reldata.statewise)
    //     setData(reldata.statewise)
    // }
    // useEffect(() => {
    //     getData()
    // })
  return (
    <div>
      <h1>Fetching Practicing</h1>
      {data?.map((item,id) =>
        <div key={id}>
            <hr/>
       
            <p> title: {item.state}</p>
           
            
           
        </div>)}

    </div>
  )
}
