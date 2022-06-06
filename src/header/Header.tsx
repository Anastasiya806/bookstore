import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="header-wrapper">
      <p className="header-title">Bookstore</p>
      <div className="header-input">
        <input placeholder="Search" />
        <div className="search"></div>
      </div>
      <div className="icons">
        <div className="like svg"></div>
        <div className="shop svg"></div>
        <Link to="account"><div className="user svg"></div></Link>
      </div>
    </div>
  );
};

export default Header;
