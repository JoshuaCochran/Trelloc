import React from "react";
import Card from "./Card";

const CardList = ({ cards }) => {
  return (
    <div>
      {Object.values(cards)
        .sort(function(a, b) {
          return a.position - b.position;
        })
        .map(card => (
          <Card key={card.id} id={card.id} position={card.position} title={card.title} />
        ))}
    </div>
  );
};

export default CardList;
