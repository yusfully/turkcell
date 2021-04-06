import React, { Fragment, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Text from "../../atoms/text/Text";
import "./navigation.scss";

const Navigation = ({ links, children }) => {
  const mobileNav = useRef();
  const [state, setState] = useState(false);

  const renderInside = () => {
    return (
      <Fragment>
        {links &&
          links.map((item, index) => (
            <Link
              key={item.text}
              className={index === 0 ? "active" : ""}
              to={item.link}
            >
              <Text type="medium">{item.text}</Text>
            </Link>
          ))}
        {children}
      </Fragment>
    );
  };
  return (
    <div className="navigation ">
      <div
        onClick={() => setState(!state)}
        className={`menu-hamburger state-${state ? "open" : "close"}`}
      >
        <span></span>
      </div>
      <div className="nav-container">{renderInside()}</div>
      <div
        ref={mobileNav}
        className={`nav-container mobile ${state ? "opened" : "closed"}`}
      >
        {renderInside()}
      </div>
    </div>
  );
};

export default Navigation;
