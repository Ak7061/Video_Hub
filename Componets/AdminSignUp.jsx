import'../Styles/AdminSignUp.css';
import { useState } from 'react';
import axios from 'axios'
const AdminSignUP = () => {
    let [name,setename]=useState("");
    let[dob,setdob]=useState("");
    let[email,setemail]=useState("");
    let[phoneNo,setphone]=useState("");
    let[password,setpassword]=useState("")
    let data={name,dob,email,phoneNo,password}
    
    let addAdmin=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:1250/SIGNUP',data)
        .then((res)=>{
            console.log(res);
            alert("Data Added Successfully")
        })
        .catch((err)=>{
            console.log(err);
            alert("Invalid Data")
        })
    }
    return (  
        <div className="adminsignup">
        <form onSubmit={addAdmin} action="">
        <label htmlFor="">
            Name:<br/> <input  required value={name} type="text"  onChange={(e)=>{setename(e.target.value)}}placeholder='Enter The User Name' />
        </label>
        <br/>
        <label htmlFor="">
            DOB: <br/> <input required value={dob} onChange={(e)=>{setdob(e.target.value)}} type="date" />
        </label>
        <br />
        <label htmlFor="">
            Email: <br /> <input required onChange={(e)=>{setemail(e.target.value)}} type="email" placeholder='Enter the Email' />
        </label>
        <br />
        <label htmlFor="">
            Phone No: <br /> <input required onChange={(e)=>{setphone(e.target.value)}} type="tel" pattern='[6789][0-9]{9}' placeholder='Enter the telephone' />
        </label>
        <br />
        <label htmlFor="">
            Password: <br /><input required onChange={(e)=>{setpassword(e.target.value)}} type="password" placeholder='Enter The Password' />
        </label>
        <br />
        <button >Register</button>
        </form>
    </div>
    );
}
 
export default AdminSignUP;