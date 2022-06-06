import "./subscribe.css";

const Subscribe = () => {
  return (
    <>
      <div className="subscribe-wrapper">
        <p className="subscribe-title">Subscribe to Newsletter</p>
        <p className="subscribe-subtitle">
          Be the first to know about new IT books, upcoming releases, exclusive
          offers and more.
        </p>
        <div className="subscribe-input">
          <input placeholder="Your email"></input>
          <button className="subscribe-button">Subscribe</button>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
