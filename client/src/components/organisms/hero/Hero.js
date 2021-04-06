import React from "react";
import PropTypes from "prop-types";
import Pattern from "./Pattern";
import Text from "../../atoms/text/Text";
import "./hero.scss";

const Hero = ({ title, highLight, children }) => (
  <div className="hero">
    <div className="bg">
      <Pattern></Pattern>
      <div className="bg-bg">
        {[...Array(20)].map((x, i) => (
          <div className="particle" key={i}></div>
        ))}
      </div>
    </div>
    <div className="container">
      <div className="inner g3-3of4 g-1of1">
        <h1 className="big-text center-text title">{title}</h1>
        <Text className="white-text m-b-2" type="large">
          {highLight}
        </Text>
      </div>
      {children}
    </div>
  </div>
);

Hero.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  highLight: PropTypes.string,
};
export default Hero;
