import Book from "./Book";
import { useState, useEffect } from "react";
import Subscribe from "../subscribe/Subscribe";
import SingIn from "../singIn/SingIn";
import SingUp from "../singUp/SingUp";
import "./content.css";
import Reset from "../reset/Reset";
// import SimilarBooks from "./similarBooks/SimilarBooks";

interface IBook {
  image: string;
  isbn13: string;
  price: string;
  subtitle: string;
  title: string;
  url: string;
}

const Content = () => {
  const [data, setData] = useState<IBook[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("https://api.itbook.store/1.0/new");
      const resJson = await result.json();

      setData(resJson.books);
    };

    fetchData();
  }, []);
  {/* <SingIn />
  <SingUp />
  <Reset /> */}
  {/* <SimilarBooks /> */}

  return (
      <div className="content-wrapper">
        <p className="content-title">New releases books</p>
        <div className="books-wrapper">
          {data && data.map((book) => <Book item={book} />)}
        </div>
        <Subscribe />
      </div>
  );
};

export default Content;
