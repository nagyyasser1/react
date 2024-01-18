import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const inputRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`search/${inputRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="Navbar__search-container">
        <input type="text" placeholder="Search..." ref={inputRef} />
        <FontAwesomeIcon
          className="search-icon"
          icon={faMagnifyingGlass}
          style={{ color: "#d64343" }}
          onClick={handleSubmit}
        />
      </div>
    </form>
  );
};

export default SearchBar;
