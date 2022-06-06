import { useState, useEffect } from "react";
import "./item.css";

interface IBookItem {
  title: string;
  subtitle: string;
  authors: string;
  publisher: string;
  pages: string;
  year: string;
  rating: string;
  desc: string;
  price: string;
  image: string;
  url: string;
}

const Item = () => {
  const [data, setData] = useState<IBookItem | null>(null);
  const [rating, setRating] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        "https://api.itbook.store/1.0/books/9781617294136"
      );
      const resJson = await result.json();

      setData(resJson);
      setRating(resJson.rating);
    };

    fetchData();
  }, []);

  return (
    <div className="item-wrapper">
      <p className="item-name">{data && data.title}</p>
      <div className="item-info">
        <div
          className="item-img"
          style={{
            width: "544px",
            height: "472px",
            backgroundColor: "#fee9e2",
          }}
        >
          <img src={data?.image} alt="" />
        </div>
        <div className="item-attributes">
          <div className="item-price">
            <p>{data?.price}</p>
            <div className="item-stars">
              <div className="item-blackStar"></div>
              <div className="item-star"></div>
            </div>
          </div>
          <div className="item-inform">
            <div className="item-details">
              <p>Authors</p>
              <p>Publisher</p>
              <p>Language</p>
              <p>Format</p>
              <div className="item-moreDetails">
                <p>More detailse</p>
                <div className="item-moreDetails__vector"></div>
              </div>
            </div>
            <div className="item-informData">
              <p> {data?.authors} </p>
              <p>{data?.year}</p>
              <p>English</p>
              <p> Paper book /ebook (PDF)</p>
            </div>
          </div>
          <button className="item-button">Add to cart</button>
        </div>
      </div>
      <div className="item-content">
        <div className="item-tab">
          <button>Description</button>
          <button>Authors</button>
          <button>Reviews</button>
        </div>
        <p className="item-description">{data?.desc}</p>
        <div className="item-social">
          <div className="item-facebook"></div>
          <div className="item-twitter"></div>
          <div className="item-more"></div>
        </div>
      </div>
    </div>
  );
};

export default Item;
