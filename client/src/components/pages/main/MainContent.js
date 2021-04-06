import React from "react";
import DropDown from "../../atoms/dropDown/DropDown";
import Games from "../../organisms/gameList/GameList";
import Filters from "../../organisms/filters/Filters";
import Title from "../../atoms/title/Title";
import { useGamesContext } from "../../pages/main/Provider";
import "./main.scss";
const sorting = [
  {
    text: "Title A-Z",
    type: "name",
    towards: "low",
  },
  {
    text: "Title Z-A",
    type: "name",
    towards: "high",
  },
];

const MainContent = () => {
  const { setFilters } = useGamesContext();
  return (
    <div className="container">
      <div className="flex between pad-v-2">
        <Title type="large">Browse Games</Title>
        <DropDown
          elements={sorting}
          onSelect={(e) =>
            setFilters({
              type: "onSortingChange",
              payload: {
                [e.type]: e.towards,
              },
            })
          }
        ></DropDown>
      </div>
      <div className="flex-row multi">
        <div className="side-left g2-1of4 g-1of1 pad-h-1">
          <Filters></Filters>
        </div>
        <div className="side-right g2-3of4 g-1of1 pad-h-1">
          <Games></Games>
        </div>
      </div>
    </div>
  );
};
export default MainContent;
