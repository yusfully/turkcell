import React from "react";
import "./text.scss";

const Text = ({ type, children, className }) => {
  return (
    <div className={`text ${type}-text ${className && className}`}>
      {children}
    </div>
  );
};

export default Text;
