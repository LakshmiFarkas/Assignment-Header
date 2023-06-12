import React from "react";
import "./button.css";

const Button = (props) => {
  return (
    <div className="button_wrapper">
      <button>{props.children}</button>
    </div>
  );
};

export default Button;
