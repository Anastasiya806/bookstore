import Book from "./Book";
import "./content.css";
import React, { useState, useEffect } from "react";

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
      const result = await fetch("https://api.itbook.store/1.0/search/mongodb");
      const resJson = await result.json();

      setData(resJson.books);
    };

    fetchData();
  }, []);

  return (
    <div className="content-wrapper">
      <p className="content-title">NEW RELEASES BOOKS</p>
      <div className="books-wrapper">
        {data && data.map((book) => <Book item={book} />)}
      </div>
    </div>
  );
};

export default Content;
