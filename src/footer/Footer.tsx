import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-wrapper">
        <p className="footer-title">Subscribe to Newsletter</p>
        <p className="footer-subtitle">
          Be the first to know about new IT books, upcoming releases, exclusive
          offers and more.
        </p>
        <div className="footer-input">
          <input placeholder="Your email"></input>
          <button className="footer-button">Subscribe</button>
        </div>
      </div>
      <div className="footer-info">
        <p>©2022 Bookstore</p>
        <p>All rights reserved</p>
      </div>
    </>
  );
};

export default Footer;
