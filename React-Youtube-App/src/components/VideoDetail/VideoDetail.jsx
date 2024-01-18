import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchFromAPI } from "../../utils/fetchFromApi";
import ReactPlayer from "react-player/youtube";
import "./VideoDetail.css";

const VideoDetail = () => {
  const [video, setVideo] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();

  if (id == "undefined") navigate("/");

  useEffect(() => {
    async function getVideo() {
      try {
        const data = await fetchFromAPI(
          `videos?part=contentDetails,snippet,statistics&id=${id}`
        );
        setVideo(data);
      } catch (error) {
        console.log(error);
      }
    }
    getVideo();
  }, [id]);

  console.log(video);
  return (
    <div className="video-container">
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${id}`}
        controls={true}
        style={{ margin: " 100px auto", width: "100%" }}
        width={"100%"}
      />
    </div>
  );
};

export default VideoDetail;
