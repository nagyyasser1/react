/* eslint-disable react/prop-types */
import "./ChannelCard.css";

const ChannelCard = ({ channelDetails }) => {
  return (
    <div className="channel-card">
      <div className="channel-card-img-container">
        <img src={channelDetails?.snippet?.thumbnails?.high?.url} />
      </div>
      <div className="channel-card-content-container">
        <h3>{channelDetails?.snippet?.title}</h3>
        <p>{channelDetails?.statistics?.subscriberCount}Subscripers</p>
      </div>
    </div>
  );
};

export default ChannelCard;
