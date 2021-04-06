import React from "react";
import FilterGroup from "../../molecules/filterItem/Filter";
import { useGamesContext } from "../../pages/main/Provider";
import Collapse from "../../atoms/collapse/Collapse";
import Card from "../../atoms/card/Card";
import "./filters.scss";

const filters = {
  genre: {
    title: "Genre Filters",
    items: [
      {
        id: 0,
        name: "Shooters",
      },
      {
        id: 1,
        name: "Action",
      },
      {
        id: 2,
        name: "RPG",
      },
      {
        id: 3,
        name: "Racing",
      },
      {
        id: 4,
        name: "MOBA/MMO",
      },
      {
        id: 5,
        name: "Simulation",
      },
      {
        id: 6,
        name: "Strategy",
      },
      {
        id: 7,
        name: "Sports",
      },
      {
        id: 8,
        name: "Kids/Family",
      },
      {
        id: 9,
        name: "Casual",
      },
      {
        id: 10,
        name: "Demo",
      },
      {
        id: 11,
        name: "Horror",
      },
      {
        id: 12,
        name: "Platformer",
      },
      {
        id: 13,
        name: "Battle Royal",
      },
      {
        id: 14,
        name: "Adventure",
      },
      {
        id: 15,
        name: "Open World",
      },
    ],
  },
  status: {
    title: "State",
    items: [
      {
        id: 0,
        name: "Available",
      },
      {
        id: 1,
        name: "Patching",
      },
      {
        id: 2,
        name: "Maintenance",
      },
    ],
  },
};

const Filters = () => {
  const { setFilters } = useGamesContext();

  const handleChange = (values, type, key) => {
    setFilters({
      type: "onFilterChange",
      payload: {
        filterBy: type,
        value: values,
      },
    });
  };
  return (
    <div className="sidebar-filter">
      <Card>
        {Object.keys(filters).map((element, index) => {
          return (
            <Collapse
              defaultState={window.innerWidth <= 480 ? true : false}
              key={`item-${index}`}
              title={filters[element].title}
            >
              <FilterGroup
                onChange={(values) => handleChange(values, element)}
                type={element}
                elements={filters[element].items}
              ></FilterGroup>
            </Collapse>
          );
        })}
      </Card>
    </div>
  );
};

export default Filters;
