import React from "react";
import Card from "./Card";

const CardList = ({ cards }) => (
  <div>
    {Object.values(cards).map(card => (
      <Card key={card.id} {...card} />
    ))}
  </div>
);

export default CardList;
