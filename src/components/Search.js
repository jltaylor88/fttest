import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import ResultsList from "./ResultsList";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!searchTerm) {
      return;
    }
    const request = async () => {
      const response = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          format: "json",
          origin: "*",
          list: "search",
          srsearch: searchTerm,
          srlimit: 20,
        },
      });
      setResults(response.data.query.search);
    };
    request();
  }, [searchTerm]);

  const onSearchChange = (term) => {
    setSearchTerm(term);
  };

  return (
    <React.Fragment>
      <SearchBar onSearchChange={onSearchChange} searchTerm={searchTerm} />
      <ResultsList results={results} />
    </React.Fragment>
  );
};

export default Search;
