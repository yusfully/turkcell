import React from "react";
import GameCard from "../../molecules/gameCard/GameCard";
import PropTypes from "prop-types";
import { useGamesContext } from "../../pages/main/Provider";
import "./gameList.scss";

const GameList = () => {
  const { data } = useGamesContext();

  return (
    <div className="card-games">
      {data &&
        Object.keys(data).map((key) => {
          return (
            <GameCard letter={key} key={key} elements={data[key]}></GameCard>
          );
        })}
    </div>
  );
};

GameList.propTypes = {
  list: PropTypes.array,
};
export default GameList;
