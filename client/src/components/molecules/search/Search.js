import React, { useState, useRef, useEffect } from "react";
import Input from "../../atoms/input/Input";
import Text from "../../atoms/text/Text";
import SearchIcon from "../../../assets/search.svg";
import { useGamesContext } from "../../pages/main/Provider";
import "./search.scss";

const Search = () => {
  const { data, setFilters } = useGamesContext();

  const contentRef = useRef();
  const heightRef = useRef();
  const [suggestedData, setSuggestedData] = useState();
  const handleChange = (val) => {
    setFilters({ type: "onSearchChange", payload: val });
    if (!val || val.length === 0) {
      setSuggestedData(null);
      return;
    }

    let dataSetLetter = val[0].toUpperCase();
    const dataSet = data[dataSetLetter];
    const suggest = dataSet
      ? dataSet
          .filter((item) => {
            return item.name.includes(val);
          })
          .reduce(function (filtered, el) {
            if (filtered.length > 2) return filtered;

            filtered.push(el);

            return filtered;
          }, [])
      : [];

    setSuggestedData(suggest);
  };

  useEffect(() => {
    if (heightRef.current) {
      contentRef.current.style.height = heightRef.current.offsetHeight + "px";
    }
  }, [suggestedData, heightRef]);
  const handleSelect = () => {};
  return (
    <div className="searchbar g-1of1 g2-3of4 ">
      <Input
        placeHolder="Oyun ara"
        onChange={(val) => handleChange(val)}
        icon={SearchIcon}
      ></Input>
      <div ref={contentRef} className="drop-down-elements-cover">
        <ul ref={heightRef}>
          {suggestedData &&
            suggestedData.map((element, index) => {
              return (
                <li
                  key={`${element.name + index}`}
                  onClick={() => handleSelect(element)}
                  className="drop-down-item"
                >
                  <Text type="large">{element.name}</Text>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default Search;
