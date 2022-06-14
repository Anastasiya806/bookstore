import Book from "./Book";
import { useState, useEffect } from "react";
import Subscribe from "../subscribe/Subscribe";
import "./content.css";
import Loading from "../common/Loading";
import { IBook } from "../common/types";


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

  if (!data) {
    return <Loading />;
  }

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
