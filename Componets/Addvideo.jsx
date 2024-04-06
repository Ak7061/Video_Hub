import '../Styles/Addvideo.css'
import { useState } from "react";
import axios from 'axios'
const AddVideo = () => {
    let [title,settitle]=useState("")
    let [description,setdescription] =useState("")
    let [videoUrl,setvideoUrl] =useState("")
    let [likes,setlikes] =useState("")
    let [view,setview] =useState("")
    let data={title,description,view,likes,videoUrl}
    
    let addvideo=(e)=>{
        axios.post('http://localhost:1250/VIDEOS',data)
        .then((res)=>{
            console.log(res);
            alert("Added the Video Successfully")
        })
        .catch((err)=>{
            console.log(err);
            alert("Invalid Data Formate")
        })
    }
    return ( 
        <div className="adminvideo">
            <form  onSubmit={addvideo}  action="">
                <label htmlFor="">
                    Title :<input value={title} onChange={(e)=>{settitle(e.target.value)}} type="text" placeholder="Enter the video Name"/>
                </label>
                <br/>
                <label htmlFor="">
                    Description :<textarea value={description} onChange={(e)=>{setdescription(e.target.value)}}placeholder="Enter the Description About the video" cols="40" row="10"/>
                </label>
                <br/>
                <label htmlFor="">
                    videoUrl :<input value={videoUrl} onChange={(e)=>{setvideoUrl(e.target.value)}} required type="text" placeholder="Enter the video details"/>
                </label>
                <label htmlFor="">
                    Likes :<input value={likes} onChange={(e)=>{setlikes(e.target.value)}} required type="number"/>
                </label>
                <br/>
                <label htmlFor="">
                    view : <input  value={view} onChange={(e)=>{setview(e.target.value)}}required type="number"/>
                </label>
                <br/>
                <button>Submit</button>

            </form>
        </div>
     );
}
 
export default AddVideo;