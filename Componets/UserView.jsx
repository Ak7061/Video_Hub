import axios from "axios";
import { useEffect, useState } from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import VisibilityIcon from "@mui/icons-material/Visibility";
import '../Styles/Userview.css'

const UserView = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:1250/VIDEOS')
      .then((res) => {
        console.log(res.data);
        setVideos(res.data);
      })
      .catch((err) => {
        console.error("Error fetching videos:", err);
      });
  }, []);

  return (
    <div className="userview">
      {videos.map((video) => (
        <div key={video.id}>
          <iframe src={video.videoUrl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <h3>{video.title} || <span id="des">{video.description}</span></h3>
          <span><VisibilityIcon /> {video.view}</span>
          <span><ThumbUpIcon /> {video.likes}</span>
        </div>
      ))}
    </div>
  );
};

export default UserView;
