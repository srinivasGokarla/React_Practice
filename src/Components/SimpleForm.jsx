import React, {useState} from 'react'

export default function SimpleForm() {
    const[fullname, setFullname] = useState({
       fname: "",
       lname: "",
       email: "",
       phone: ""
    })
const InputChange = (e) => {
//    const name = e.target.name;
//    const value = e.target.value;
   const {name, value} = e.target
   setFullname((prevValue) => {
    return { 
        ...prevValue,
        [name]: value
    }
    //    if(name === "fname") {
    //     return {
    //         fname: value,
    //         lname: prevValue.lname,
    //         email: prevValue.email,
    //         phone: prevValue.phone
    //     } 
       
    //    } else if(name === "lname") {
    //     return {
    //         fname: prevValue.fname,
    //         lname: value,
    //         email: prevValue.email,
    //         phone: prevValue.phone
    //     }
    //    }
    //    else if(name === "email") {
    //     return {
    //         fname: prevValue.fname,
    //         lname: prevValue.lname,
    //         email: value,
    //         phone: prevValue.phone
    //     }
    //    }else if(name === "phone") {
    //     return {
    //         fname: prevValue.fname,
    //         lname: prevValue.lname,
    //         email: prevValue.email,
    //         phone: value
    //     }
    //    }
   })
}
    const OnSubmit = (e) => {
e.preventDefault()
alert("Form Submited Successfully")
    }
  return (
    <div>
       <h1>Form</h1>
       <form onSubmit={OnSubmit}>
        <h3>Hai {fullname.fname} {fullname.lname}</h3>
        <p>{fullname.email} {fullname.phone}</p>
        <lable>First Name</lable>
        <input type="text" 
        name="fname"
        placeholder="Enter Your First Name"
        onChange={InputChange}
        value={fullname.fname}/>
        <br/>
        <br/>
        <lable>Last Name</lable>
        <input type="text" 
        name="lname"
        placeholder="Enter Your Last Name"
        onChange={InputChange}
        value={fullname.lname}/>
        <br/>
        <br/>
        
        <lable>Email</lable>
        <input type="text" 
        name="email"
        placeholder="Enter Your email"
        onChange={InputChange}
        value={fullname.email}/>
        <br/>
        <br/>
        <lable>Phone Number</lable>
        <input type="number" 
        name="phone"
        placeholder="Enter Your Phone Number"
        onChange={InputChange}
        value={fullname.phone}/>
        <br/>
        <br/>
        <button type="submit">Submit</button>
       </form>
    </div>
  )
}
