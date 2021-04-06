import React from "react";
import "./letterHexagon.scss";

/**
 * Primary UI component for user interaction
 */
const LetterHexagon = ({ children }) => {
  return (
    <div className="letter-hexagon">
      <svg width="60px" height="52px" viewBox="0 0 60 52">
        <path
          fill="#fff"
          d="M0 25.980762113533157L15 0L45 0L60 25.980762113533157L45 51.96152422706631L15 51.96152422706631Z"
        ></path>
      </svg>
      <span className="letter-hexagon-text">{children}</span>
    </div>
  );
};

export default LetterHexagon;
