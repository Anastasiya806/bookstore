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
  const { title, subtitle, price, image } = props.item;

  return (
    <div className="book-wrapper">
      <div className="book-img">
        <img src={image} />
      </div>
      <p className="book-name">{title}</p>
      <p className="book-author">{subtitle}</p>
      <div className="book-info">
        <p className="price">{price}</p>
        <div className="rating">
          <div className="rating-star"></div>
          <div className="rating-starBlack"></div>
        </div>
      </div>
    </div>
  );
};

export default Book;
