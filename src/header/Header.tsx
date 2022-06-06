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
        <div className="user svg"></div>
      </div>
    </div>
  );
};

export default Header;
