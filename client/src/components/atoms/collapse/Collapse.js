import React, { useState, useRef } from "react";
import useMeasure from "../../../hooks/useMeasure";
import Chevron from "../../../assets/chevron.svg";
import Title from "../title/Title";
import "./collapse.scss";

const Collapse = ({ children, title, className, defaultState }) => {
  const collapseRef = useRef();
  const [collapseDom, height] = useMeasure();
  const [state, setstate] = useState(defaultState || false);

  return (
    <div
      className={`collapse collapse-${!state ? "opened" : "collapsed"} ${
        className ? className : ""
      }`}
    >
      <div className="collapse-action" onClick={() => setstate(!state)}>
        <Title type="medium">{title}</Title>
        <i>
          <img alt={title} src={Chevron}></img>
        </i>
      </div>
      <div
        style={{
          height: `${state ? "0px" : height + "px"}`,
        }}
        ref={collapseRef}
        className="collapse-inner"
      >
        <div ref={collapseDom}>{children}</div>
      </div>
    </div>
  );
};
export default Collapse;
