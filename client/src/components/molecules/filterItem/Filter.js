import React, { useState, useEffect } from "react";
import CheckBox from "../../atoms/checkBox/CheckBox";

import PropTypes from "prop-types";

import "./filter.scss";

const Filter = ({ elements, onChange }) => {
  const [state, setstate] = useState([]);

  const handleSelectionChange = (isSelected, id) => {
    if (isSelected) {
      setstate([...state, id]);
    } else {
      setstate(state.filter((item) => item !== id));
    }
  };
  useEffect(() => {
    onChange && onChange(state);
  }, [state]);
  return (
    <div>
      {elements &&
        elements.map((item) => {
          return (
            <CheckBox
              key={item.id}
              value={item.id}
              label={item.name}
              onSelectionChange={(isSelected) =>
                handleSelectionChange(isSelected, item.id)
              }
            ></CheckBox>
          );
        })}
    </div>
  );
};

Filter.propTypes = {
  type: PropTypes.string,
  elements: PropTypes.array,
};

export default Filter;
