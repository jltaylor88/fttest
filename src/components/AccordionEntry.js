import React, { useState } from "react";

const AccordionEntry = ({ entry }) => {
  const [active, setActive] = useState(false);

  const renedredContent = (
    <React.Fragment>
      <div
        className={`title ${active === true ? "active" : ""}`}
        onClick={() => setActive(!active)}
      >
        <i className="icon dropdown"></i>
        {entry.title}
      </div>
      <div className={`content ${active === true ? "active" : ""}`}>
        <p>{entry.content}</p>
      </div>
    </React.Fragment>
  );

  return <React.Fragment>{renedredContent}</React.Fragment>;
};

export default AccordionEntry;
