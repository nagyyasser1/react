import "./SearchFeed.css";
import { Videos } from "../";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchFromAPI } from "../../utils/fetchFromApi";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchText } = useParams();

  useEffect(() => {
    async function getVideosBySearch() {
      try {
        const data = await fetchFromAPI(`search?part=snippet&q=${searchText}`);
        setVideos(data);
      } catch (error) {
        console.log(error);
      }
    }
    getVideosBySearch();
  }, [searchText]);

  return <div>{<Videos videos={videos} />}</div>;
};

export default SearchFeed;
