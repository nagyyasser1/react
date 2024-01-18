import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../../utils/fetchFromApi";
import { ChannelCard, Videos } from "../";
import "./ChannelDetail.css";

const ChannelDetail = () => {
  const [channelDetails, setChannelDetails] = useState(null);
  const [channelVideos, setChannelVideos] = useState([]);

  const { id } = useParams();

  // Get Channel Info
  useEffect(() => {
    async function getChannel(id) {
      try {
        const data = await fetchFromAPI(
          `channels?part=snippet,statistics&id=${id}`
        );
        setChannelDetails(data.items[0]);
      } catch (error) {
        console.log(error);
      }
    }
    getChannel(id);
  }, [id]);

  // Get Channel Videos
  useEffect(() => {
    async function getChannelVideos(id) {
      try {
        const data = await fetchFromAPI(
          `search?channelId=${id}&part=snippet&order=date`
        );
        setChannelVideos(data);
      } catch (error) {
        console.log(error);
      }
    }
    getChannelVideos(id);
  }, [id]);

  console.log(channelDetails, channelVideos);
  return (
    <div>
      <div className="channel-container">
        <ChannelCard channelDetails={channelDetails} />
      </div>
      <Videos videos={channelVideos} />
    </div>
  );
};

export default ChannelDetail;
