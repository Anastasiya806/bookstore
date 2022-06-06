import { Link } from "react-router-dom";
import "./book.css";

interface IBook {
  image: string;
  isbn13: string;
  price: string;
  subtitle: string;
  title: string;
  url: string;
}

const Book = (props: any) => {
  const { title, subtitle, price, image, isbn13 } = props.item;

  return (
    <Link to={isbn13}>
      <div className="book-wrapper">
        <div className="book-img">
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
              <div className="rating-star"></div>
              <div className="rating-starBlack"></div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
