import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, label }) => {
  const [selected, setSelected] = useState(options[0]);
  const [active, setActive] = useState(false);
  const formRef = useRef();

  useEffect(() => {
    document.body.addEventListener("click", onBodyClick);
  }, []);

  const onBodyClick = (e) => {
    if (formRef.current && formRef.current.contains(e.target)) {
      return;
    }

    setActive(false);
  };

  const onDropdownClick = (x) => {
    setSelected(x);
  };

  const renderedContent = options.map((option) => {
    return option !== selected ? (
      <div
        className="item"
        key={option.value}
        onClick={() => {
          onDropdownClick(option);
        }}
      >
        {option.message}
      </div>
    ) : null;
  });

  return (
    <div ref={formRef} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div
          className={`ui selection dropdown ${
            active === true ? "visible active" : ""
          }`}
          onClick={() => {
            setActive(!active);
          }}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.message}</div>
          <div
            className={`menu ${active === true ? "visible transition" : ""}`}
          >
            {renderedContent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
