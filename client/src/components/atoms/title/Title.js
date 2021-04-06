import React from "react";
import "./title.scss";

/**
 * Primary UI component for user interaction
 */
const Title = ({ type, children, addClass }) => {
  return (
    <div className={`title title-${type} ${addClass ? addClass : ""}`}>
      {children}
    </div>
  );
};

export default Title;
