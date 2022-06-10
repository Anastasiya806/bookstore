import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [isLogged, setIsLogged] = useState<string | null>(null);
  useEffect(() => {
    setIsLogged(localStorage.getItem("isLogged"));
  });

  return (
    <div className="header-wrapper">
      <Link to="/">
        <p className="header-title">Bookstore</p>
      </Link>
      <div className="header-input">
        <input placeholder="Search" />
        <div className="search"></div>
      </div>
      <div className="icons">
        <div className="like svg"></div>
        <div className="shop svg"></div>
        {isLogged === "true" ? (
          <Link to="accountSettings">
            <div className="user svg"></div>
          </Link>
        ) : (
          <Link to="registration">
            <div className="user svg"></div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
