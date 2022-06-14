import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IBook } from "../common/types";
import { getBackgroundColor } from "../utils/bookColors";
import "./book.css";
import Rating from "./Rating";

const Book = (props: {item: IBook}) => {
  const { title, subtitle, price, image, isbn13 } = props.item;
  const [backgroundColor, setBackgroundColor] = useState(""); 
  const [rating, setRating] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        `https://api.itbook.store/1.0/books/${isbn13}`
      );
      const resJson = await result.json();

      setRating(resJson.rating);
    };

    fetchData();
    setBackgroundColor(getBackgroundColor());
  }, []);


  return (
    <Link to={`/books/${isbn13}`}>
      <div className="book-wrapper">
        <div className="book-img" style={{ backgroundColor: backgroundColor }}>
          <img src={image} />
        </div>
        <div className="book-info">
          <div>
            <p className="book-name">{title}</p>
            <p className="book-author">{subtitle}</p>
          </div>
          <div className="book-attributes">
            <p className="price">{price}</p>
            <div className="rating">
              {rating && <Rating stars={rating} />}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
