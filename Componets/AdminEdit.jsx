import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const AdminEdit = () => {
    let param = useParams();
    let [title, setTitle] = useState("");
    let [description, setDescription] = useState("");
    let [videoUrl, setVideoUrl] = useState("");
    let [likes, setLikes] = useState("");
    let [view, setView] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:1250/VIDEOS/${param.id}`)
            .then((res) => {
                console.log(res.data);
                setTitle(res.data.title);
                setDescription(res.data.description);
                setLikes(res.data.likes);
                setView(res.data.view);
                setVideoUrl(res.data.videoUrl);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [param.id]);

    let submitedit = (e) => {
        e.preventDefault();
        const data = { title, description, view, likes, videoUrl };
        axios.put(`http://localhost:1250/VIDEOS/${param.id}`, data)
            .then((res) => {
                alert("Data Edit Successfully");
            })
            .catch(() => {
                alert("Invalid Data Format");
            });
    }

    return (
        <div className="adminedit">
            <form onSubmit={submitedit} action="">
                <label htmlFor="">
                    Title :<input value={title} onChange={(e) => { setTitle(e.target.value) }} type="text" placeholder="Enter the video Name" />
                </label>
                <br />
                <label htmlFor="">
                    Description :<textarea value={description} onChange={(e) => { setDescription(e.target.value) }} placeholder="Enter the Description About the video" cols="40" rows="10" />
                </label>
                <br />
                <label htmlFor="">
                    videoUrl :<input value={videoUrl} onChange={(e) => { setVideoUrl(e.target.value) }} required type="text" placeholder="Enter the video details" />
                </label>
                <label htmlFor="">
                    Likes :<input value={likes} onChange={(e) => { setLikes(e.target.value) }} required type="number" />
                </label>
                <br />
                <label htmlFor="">
                    view : <input value={view} onChange={(e) => { setView(e.target.value) }} required type="number" />
                </label>
                <br />
                <button>Edit Video</button>
            </form>
        </div>
    );
}

export default AdminEdit;
