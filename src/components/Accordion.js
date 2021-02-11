import React from "react";
import AccordionEntry from "./AccordionEntry";

const Accordion = ({ data }) => {
  const renderedContent = data.map((entry) => {
    return <AccordionEntry key={entry.title} entry={entry} />;
  });

  return <div className="ui styled accordion">{renderedContent}</div>;
};

export default Accordion;
