import { Routes, Route } from "react-router-dom";
import {
  ChannelDetail,
  Feed,
  Navbar,
  SearchFeed,
  VideoDetail,
} from "./components";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route index element={<Feed />} />
        <Route path="video/:id" element={<VideoDetail />} />
        <Route path="channel/:id" element={<ChannelDetail />} />
        <Route path="search/:searchText" element={<SearchFeed />} />
      </Routes>
    </div>
  );
}

export default App;
