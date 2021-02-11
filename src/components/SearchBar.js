import React, { useState, useEffect } from "react";

const SearchBar = ({ onSearchChange, searchTerm }) => {
  const [term, setTerm] = useState(searchTerm);
  const [debouncedTerm, setDebouncedTerm] = useState(term);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 2000);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    onSearchChange(debouncedTerm);
  }, [debouncedTerm, onSearchChange]);

  const onInputChange = (e) => {
    setTerm(e.target.value);
  };

  return (
    <div className="ui form">
      <div className="field">
        <label>Enter Search Term</label>
        <input
          type="text"
          className="input"
          value={term}
          onChange={onInputChange}
        />
      </div>
    </div>
  );
};

export default SearchBar;
