/* eslint-disable react/prop-types */
import houseIcon from "../../../assets/icons8-home.svg";
import codeIcon from "../../../assets/code.png";
import musicIcon from "../../../assets/music.png";
import schoolIcon from "../../../assets/school.png";
import podcastIcon from "../../../assets/podcast.png";
import gameIcon from "../../../assets/game.png";
import liveIcon from "../../../assets/live.png";
import movieIcon from "../../../assets/movie.png";
import sportIcon from "../../../assets/sport.png";

const categories = [
  { name: "Quran", imgUrl: houseIcon },
  { name: "Elzero", imgUrl: codeIcon },
  { name: "Kimz code", imgUrl: codeIcon },
  { name: "ReactJS", imgUrl: codeIcon },
  { name: "Nodejs", imgUrl: codeIcon },
  { name: "NextJS", imgUrl: codeIcon },
  { name: "Music", imgUrl: musicIcon },
  { name: "Education", imgUrl: schoolIcon },
  { name: "Game", imgUrl: gameIcon },
  { name: "Live", imgUrl: liveIcon },
  { name: "Movie", imgUrl: movieIcon },
  { name: "Sport", imgUrl: sportIcon },
  { name: "Podcast", imgUrl: podcastIcon },
];

import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ setCategoryWord }) => {
  return (
    <div className="sidebar">
      <div className="categories">
        <ul>
          {categories.map((cat, idx) => (
            <li key={idx} onClick={() => setCategoryWord(cat.name)}>
              <img src={cat.imgUrl} alt="" />
              <p>{cat.name}</p>
            </li>
          ))}
        </ul>
      </div>
      <Link className="git-link" to="https://github.com/nagyyasser1">
        Github.nagyyasser1
      </Link>
    </div>
  );
};

export default Sidebar;
