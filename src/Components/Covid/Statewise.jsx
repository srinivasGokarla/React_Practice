import React, {useState, useEffect} from 'react'
import './Statewise.css';

export default function Statewise() {
    const[data,setData] = useState([])
    const getData = async () => {
        const res =  await fetch("https://data.covid19india.org/data.json");

        const reldata = await res.json()
       // console.log(reldata.statewise)
        setData(reldata.statewise)
    }
    useEffect(() => {
        getData()
    })
  return (
    <div>
     <h1>India Updated Covid19 Information</h1>
     <table>
        <thead>
            <tr>
                <th>State</th>
                <th>confirmed</th>
                <th>recovered</th>
                <th>active</th>
                <th>deaths</th>
                <th>lastupdatedtime</th>

            </tr>
            </thead>
            <tbody>
            { 
            data.map((ele, index) => {
                return (
                   <tr key={index}>
                    <td>{ele.state}</td>
                    <td>{ele.confirmed}</td>
                    <td>{ele.recovered}</td>
                    <td>{ele.active}</td>
                    <td>{ele.deaths}</td>
                    <td>{ele.lastupdatedtime}</td>
                   </tr> 
                )

            })}
            </tbody>
           
       
     </table>
    </div>
  )
}
