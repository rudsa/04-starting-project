import React from "react";

const Tabs = (props) => {
  const ButtonContainer = props.buttonsContainer;

  return (
    <>
      <ButtonContainer>{props.buttons}</ButtonContainer>
      {props.children}
    </>
  );
};

export default Tabs;
