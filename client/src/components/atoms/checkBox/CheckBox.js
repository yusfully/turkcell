import React, { useState, useEffect } from "react";
import "./checkBox.scss";

const CheckBox = ({ label, onSelectionChange }) => {
  const [isChecked, setisChecked] = useState(false);
  const handleClick = () => {
    setisChecked(!isChecked);
  };
  useEffect(() => {
    onSelectionChange && onSelectionChange(isChecked);
  }, [isChecked]);
  return (
    <div
      className={`check-box-block form-block `}
      onClick={(e) => handleClick(e)}
    >
      <div className={`chechbox-left  ${isChecked ? "checked" : ""}`}>
        <div className="check-box">
          {
            <svg class="check-box-icon" viewBox="0 0 32 32">
              <polyline points="8,20 16,24 25,10"></polyline>
            </svg>
          }
        </div>
      </div>
      <div className="label">{label && label}</div>
    </div>
  );
};
export default CheckBox;
