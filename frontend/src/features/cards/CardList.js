import React from "react";
import { Card } from "antd";

const cardStyle = {
  borderRadius: "3px",
  padding: "6px 8px 2px"
}

const CardList = ({ cards }) => (
  <div>
    {Object.values(cards).map(card => (
      <Card key={card.id} style={cardStyle}>{card.title}</Card>
    ))}
  </div>
);

export default CardList;
