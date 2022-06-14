import { useEffect, useState } from "react";
import { IBook } from "../common/types";
import ResultsItem from "./ResultsItem";
import "./searchResults.css";

const SearchResults = (props: { searchText: string }) => {
  const [data, setData] = useState<IBook[] | null>(null);
  const searchText = props.searchText;

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        `https://api.itbook.store/1.0/search/${searchText}`
      );
      const resJson = await result.json();

      setData(resJson.books);
    };

    fetchData();
  }, [searchText]);

  return (
    <>
      {data?.map((book, index) => {
        if (index < 5) {
          return <ResultsItem book={book} />;
        } else if (index === 5) {
          return <p className="search-allResults">All results</p>;
        }
      })}
    </>
  );
};

export default SearchResults;
