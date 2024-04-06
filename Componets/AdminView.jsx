import axios from "axios";
import { useEffect, useState } from "react";
import AdminViews from '../Styles/AdminViews.css'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from "react-router-dom";

const AdminView = () => {
 let [data1,setdata] =useState([]);
 let[force,setforce] =useState(0);
 let navigate=useNavigate();    // today created
 useEffect(() =>{
    axios.get('http://localhost:1250/VIDEOS')
    .then((response)=>{
        console.log(response.data);
        setdata(response.data);
    })
.catch((err)=>{
   console.log(err); 
})

 
},[force]);
let editvid=(id)=>{
   navigate(`/adminhomepage/editvideo/${id}`)   //today
}
let remove=(id,title)=>{
   axios.delete(`http://localhost:1250/VIDEOS/${id}`)
   .then((res)=>{
      setforce(force+1)
      alert(`${title}has been Removed Succesfully`)
   })
   .catch(()=>{
      alert("Video deleted")
   })
}
    return ( 
        <div className="adminview">
           {
            data1.map((x)=>{
                return(
                   <div className="display">
                   <iframe   src={x.videoUrl} title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                   <h3>{x.title} || <span id="des">{x.description}</span></h3> 
                   <span><VisibilityIcon/>{x.view}</span>
                   <span><ThumbUpIcon/>{x.likes}</span>
                   {/* <button id="del">Delete</button> */}
                   <DeleteIcon onClick={()=>{remove(x.id,x.title)}}/>
                   {/* <button id="edit">Edit</button> */}
                   <EditIcon/>
                   <button onClick={()=>{editvid(x.id)}} id="eid">Edit </button>
                   </div>

                   
                )
            })
           }
        </div>
     );
}
 
export default AdminView;