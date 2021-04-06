import React from "react";
import Card from "../../atoms/card/Card";
import Text from "../../atoms/text/Text";
import LetterHexagon from "../../atoms/letterHexagon/LetterHexagon";
import "./gameCard.scss";

const GameCard = ({ letter, elements }) => (
  <Card>
    <div>
      <LetterHexagon>{letter}</LetterHexagon>
      <div className="card-item m-t-2 ">
        {elements.map((item) => {
          return (
            <div key={item.id} className="g-1of1 g2-1of2">
              <Text className=" pad-b-1" type="small">
                {item.name}
              </Text>
            </div>
          );
        })}
      </div>
    </div>
  </Card>
);

export default GameCard;
