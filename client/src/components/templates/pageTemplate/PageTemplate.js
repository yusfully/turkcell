import React from "react";
import PropTypes from "prop-types";

import "./template.scss";

const MainTemplate = ({ useTheme, hero, children, header, ...rest }) => {
  return (
    <div>
      {header}
      {hero}
      <div className="content">{children}</div>
    </div>
  );
};
export default MainTemplate;

MainTemplate.defaultProps = {
  children: "",
  useTheme: "dark",
  header: "",
  hero: "",
};

MainTemplate.propTypes = {
  children: PropTypes.node,
  useTheme: PropTypes.string,
  header: PropTypes.node,
  hero: PropTypes.node,
};
