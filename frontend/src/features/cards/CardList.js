import React from "react";
import { Card } from "antd";

const CardList = ({ cards }) => (
  <div>
    {Object.values(cards).map(card => (
      <Card key={card.id}>{card.title}</Card>
    ))}
  </div>
);

export default CardList;
