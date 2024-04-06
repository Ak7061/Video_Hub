import '../Styles/UserLogin.css';
import { Link ,useNavigate } from "react-router-dom";
import { useState } from 'react';

const UserLogin = () => {
    const navigate = useNavigate(); // Initialize useNavigate
    const [uname, setUname] = useState("");
    const [password, setPassword] = useState("");

    const userLogin = () => {
        if(uname === "abcd" && password === "1234") {
            alert("Login is Successful");
            navigate('/userhomepage');
        } else {
            alert("Invalid Credentials");
        }
    };

    return ( 
        <div className="userlogin">
            <form action="">
                <label htmlFor="">
                    UserName: {" "}
                    <input value={uname} onChange={(e)=>{setUname(e.target.value)}} type="text" placeholder="Enter the UserName"/>
                </label>
                <br/><br/>
                <label htmlFor="">
                    Password: {" "}
                    <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Enter the Password"/>
                </label>
                <br/><br/>
                <button onClick={userLogin}>Login</button>
                <br/>
                <span>Are you a new user? <Link to='/usersignup'>Register</Link></span>
            </form>
        </div>
    );
};
 
export default UserLogin;
