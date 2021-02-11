import React from "react";
import Accordion from "./components/Accordion";
import AccordionVariables from "./json/AccordionVariables.json";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import dropdownVariables from "./json/DropdownVariables.json";
import Translation from "./components/Translation";

const accordionData = AccordionVariables.accordionVariables;
const dropdownData = dropdownVariables.dropdownVariables;

const App = () => {
  //   return <Accordion data={accordionData} />;
  //   return <Search />;
  // return <Dropdown options={dropdownData} label="Select a color" />;
  return <Translation />;
};

export default App;
