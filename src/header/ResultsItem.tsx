import { Link } from "react-router-dom";
import { IBook } from "../common/types";
import "./resultsItem.css"

const ResultsItem = (props:{book:IBook}) => {
    const {image, title, isbn13} = props.book

    return (
      <Link to={`/books/${isbn13}`}>
        <div className="search-item">
          <div className="search-item__img">
            <img src={image} alt="" />
          </div>
          <div className="search-item__text">{title}</div>
        </div>
      </Link>
    );
}

export default ResultsItem;