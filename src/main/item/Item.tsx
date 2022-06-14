import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Rating from "../Rating";
import "./item.css";
import Subscribe from "../../subscribe/Subscribe";
import Loading from "../../common/Loading";
import { getBackgroundColor } from "../../utils/bookColors";
import { IBook } from "../../common/types";


const Item = () => {
  const [data, setData] = useState<IBook | null>(null);
  const [rating, setRating] = useState(null);
  const { bookId } = useParams();
  const [backgroundColor, setBackgroundColor] = useState("") 
  console.log(bookId);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        `https://api.itbook.store/1.0/books/${bookId}`
      );
      const resJson = await result.json();

      setData(resJson);
      setRating(resJson.rating);
    };

    fetchData();
    setBackgroundColor(getBackgroundColor());
  }, []);

  if (!data) {
    return <Loading />;
  }

  return (
    <div className="item-wrapper">
      <Link to="/">
        <div className="common-buttonBack"></div>
      </Link>
      <p className="item-name">{data && data.title}</p>
      <div className="item-info">
        <div className="item-img" style={{ backgroundColor: backgroundColor }}>
          <img src={data?.image} alt="" />
        </div>
        <div className="item-attributes">
          <div className="item-price">
            <p>{data?.price}</p>
            <div className="item-stars">
              {rating && <Rating stars={rating} />}
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
      <Subscribe />
    </div>
  );
};

export default Item;
