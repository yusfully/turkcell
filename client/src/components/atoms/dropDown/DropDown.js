import React, { useState, useEffect, useCallback, useRef } from "react";
import useMeasure from "../../../hooks/useMeasure";
import Text from "../text/Text";
import Chevron from "../../../assets/chevron.svg";
import "./dropDown.scss";

const DropDown = ({ elements, onSelect }) => {
  const [isOpened, setIsOpnened] = useState(false);
  const [value, setValue] = useState(elements[0]);
  const contentRef = useRef();
  const [dropdownInner, height] = useMeasure();

  useEffect(() => {
    if (isOpened) {
      setTimeout(() => {
        window.addEventListener("click", handleClose);
      }, 100);

      return () => {
        window.removeEventListener("click", handleClose);
      };
    }
  }, [isOpened]);

  useEffect(() => {
    onSelect && onSelect(value);
  }, [value]);

  const handleClose = () => {
    setIsOpnened(false);
  };
  const handleSelect = (element) => {
    setValue(element);
  };
  const handleClick = useCallback(() => {
    setIsOpnened(!isOpened);
  }, [isOpened]);

  return (
    <div className={`drop-down drop-down-${isOpened ? "opened" : "collapsed"}`}>
      <div
        onClick={() => handleClick()}
        className="drop-down-main  flex between"
      >
        <Text type="medium">{value.text}</Text>
        <i className="pad-h-2">
          <img alt={"chevron"} src={Chevron}></img>
        </i>
      </div>
      <div
        style={{
          height: `${!isOpened ? "0px" : height + "px"}`,
        }}
        ref={contentRef}
        className="drop-down-elements-cover"
      >
        <div ref={dropdownInner}>
          <ul>
            {elements.map((element) => {
              return (
                <li
                  key={`dropdown-${element.text}`}
                  onClick={() => handleSelect(element)}
                  className="drop-down-item"
                >
                  {element.text}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
