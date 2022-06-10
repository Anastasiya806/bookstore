import { Link } from "react-router-dom";
import "./book.css";
import Rating from "./Rating";

interface IBook {
  image: string;
  isbn13: string;
  price: string;
  subtitle: string;
  title: string;
  url: string;
}

const Book = (props: {item: IBook}) => {
  const { title, subtitle, price, image, isbn13 } = props.item;

  return (
    <Link to={`/books/${isbn13}`}>
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
            <Rating stars={'4'} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
