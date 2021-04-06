import React, { useState, useEffect } from "react";
import close from "../../../assets/close.svg";
import "./input.scss";

const Input = ({ children, type, onChange, icon, placeHolder }) => {
  const [value, setvalue] = useState("");
  const handleFocus = () => {};
  const handleChange = (e) => {
    setvalue(e.target.value);
  };
  useEffect(() => {
    onChange && onChange(value);
  }, [value]);
  const handleBlur = () => {};
  return (
    <div className="input-block">
      {icon && (
        <div className="input-icon-left">
          <img src={icon}></img>
        </div>
      )}
      <input
        placeholder={placeHolder && placeHolder}
        value={value}
        onFocus={() => handleFocus()}
        onChange={(e) => handleChange(e)}
        onBlur={() => handleBlur()}
      ></input>
      {value.length > 0 && (
        <div onClick={() => setvalue("")} className="reset-input-container">
          <div className="reset">
            <img src={close}></img>
          </div>
        </div>
      )}
    </div>
  );
};
export default Input;
