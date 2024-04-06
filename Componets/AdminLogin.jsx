import '../Styles/AdminLogin.css'
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
const AdminLogin = () => {
    let [uname,setuname]=useState("");
    console.log(uname);
    let[password,setpassword]=useState("");
    console.log(password);
      let navigate =useNavigate()
      
    let adminlogin=()=>{
        if(uname =="abcd" && password ==1234){
            alert("Login is Successfull")
            navigate('/adminhomepage')
        }
        else{
            alert("Invalid Credentials")
        }
        
    }
    return ( 
        <div className="adminlogin">
          <form action="">
            <label htmlFor="">
                UserName: {" "}
                <input value={uname} onChange={(e)=>{setuname(e.target.value)}} type="text" placeholder="Enter the UserName"/>
            </label>
            <br/>
            <br/>
            <label htmlFor="">
                Password: {" "}
                <input value={password} onChange={(e)=>{setpassword(e.target.value)}} type="password" placeholder="Enter the Password"/>
            </label>
            <br/><br/>
            <button onClick={adminlogin} >Login</button>
            <br/>
            <span>Are you the New  User?<Link to='/adminsignup'>Register</Link></span>
          </form>
        </div>
     );
}
 
export default AdminLogin;