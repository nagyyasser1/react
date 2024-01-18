/* eslint-disable react/prop-types */
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import "./Navbar.css";

const Header = () => {
  return (
    <header>
      <Logo />
      <SearchBar />
    </header>
  );
};

export default Header;
