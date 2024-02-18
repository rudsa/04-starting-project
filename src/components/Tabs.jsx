import React from "react";

const Tabs = (props) => {
  return (
    <>
      <menu>{props.buttons}</menu>
      {props.children}
    </>
  );
};

export default Tabs;
