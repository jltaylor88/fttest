import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import Dropdown from "./Dropdown";

const options = [
  {
    message: "Afrikaans",
    value: "af",
  },
  {
    message: "Arabic",
    value: "ar",
  },
  {
    message: "Hindi",
    value: "hi",
  },
];

const Translation = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const onSearchChange = (term) => {
    setSearchTerm(term);
  };

  return (
    <React.Fragment>
      <SearchBar onSearchChange={onSearchChange} searchTerm={searchTerm} />
      <Dropdown options={options} label="Please select a language" />
    </React.Fragment>
  );
};

export default Translation;
