/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./VideoCard.css";

const VideoCard = ({ video }) => {
  return (
    <div className="video-card">
      <Link to={`/video/${video.id.videoId}`}>
        <div className="img-container">
          <img
            src={video.snippet.thumbnails.high.url}
            alt={video.snippet.title}
          />
        </div>
      </Link>
      <div className="card-content">
        <h3 className="video-title">{video.snippet.title}</h3>
        <Link to={`/channel/${video.snippet.channelId}`}>
          <h5 className="channel-name">{video.snippet.channelTitle}</h5>
        </Link>
      </div>
    </div>
  );
};

export default VideoCard;
