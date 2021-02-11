import React from "react";

const ResultsList = ({ results }) => {
  const renderedContent = results.map(({ title, pageid, snippet }) => {
    return (
      <div className="item" key={pageid}>
        <div className="right floated content">
          <a
            href={`https://en.wikipedia.org?curid=${pageid}`}
            className="ui button"
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{title}</div>
          <span dangerouslySetInnerHTML={{ __html: snippet }}></span>
        </div>
      </div>
    );
  });
  return <div className="ui celled list">{renderedContent}</div>;
};

export default ResultsList;
