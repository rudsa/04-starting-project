import React from "react";

const TabButton = (props) => {
  return (
    <li>
      <button className={props.isSelected ? "active" : null} {...props}>
        {props.children}
      </button>
    </li>
  );
};

export default TabButton;
