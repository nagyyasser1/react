/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import "./Videos.css";
import VideoCard from "./VideoCard/VideoCard";

const Videos = ({ videos }) => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  });

  if (typeof videos !== typeof []) return "no videos";

  return (
    <div className="videos-container" ref={scrollContainerRef}>
      {videos.items?.map((video, idx) => (
        <VideoCard key={idx} video={video} />
      ))}
    </div>
  );
};

export default Videos;
