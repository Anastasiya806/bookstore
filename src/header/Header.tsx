import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import SearchResults from "./SearchResults";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [isLogged, setIsLogged] = useState<string | null>(null);

  useEffect(() => {
    setIsLogged(localStorage.getItem("isLogged"));
  });

  const handleChange = useCallback(
    (text: React.ChangeEvent<HTMLInputElement>) => {
      setSearchText(text.target.value);
    },
    []
  );

  const clearSearch = useCallback(() => {
    setSearchText("");
  }, []);

  return (
    <div className="header-wrapper">
      <Link to="/">
        <p className="header-title">Bookstore</p>
      </Link>
      <div>
        <div className="header-input">
          <input
            placeholder="Search"
            onChange={handleChange}
            value={searchText}
          />
          <div className="search"></div>
        </div>
        <div className="search-wrapper" onClick={clearSearch}>
          {searchText && <SearchResults searchText={searchText} />}
        </div>
      </div>
      <div className="icons">
        <div className="shop svg"></div>
        <div className="like svg"></div>
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
