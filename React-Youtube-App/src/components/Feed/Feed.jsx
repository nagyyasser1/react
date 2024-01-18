/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./Feed.css";
import Sidebar from "./Sidebar/Sidebar";
import { Videos } from "../";
import { fetchFromAPI } from "../../utils/fetchFromApi";
let category;

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState(category || "قراءن");
  const [videos, setVideos] = useState([]);

  // if we go back to this component the selected category  remain
  category = selectedCategory;
  // Get Videos Depend On Selected Category
  useEffect(() => {
    async function fetchData() {
      const data = await fetchFromAPI(
        `search?part=snippet&q=${selectedCategory}`
      );
      setVideos(data);
    }
    fetchData();
  }, [selectedCategory]);

  console.log(videos);
  return (
    <main>
      <Sidebar setCategoryWord={setSelectedCategory} />
      <Videos videos={videos} />
    </main>
  );
};

export default Feed;
