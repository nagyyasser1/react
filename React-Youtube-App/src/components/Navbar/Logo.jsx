import { Link } from "react-router-dom";
import logo from "../../assets/icons8-youtube.svg";

const Logo = () => {
  return (
    <Link to="/" className="d-flex">
      <img src={logo} alt="youtube" className="header__icon" />
      <p>Youtube</p>
    </Link>
  );
};

export default Logo;
