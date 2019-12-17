import React from "react";
import { Card } from "antd";

const cardStyle = {
  borderRadius: "3px",
  zIndex: 10,
  boxShadow: "0 1px 0 rgba(9, 30, 66, .25)",
  marginBottom: "8px",
  minHeight: "20px",
  maxWidth: "300px",
  padding: "0px !important"
};

const bodyStyle = {
  padding: "6px 8px 2px"
};

const CardList = ({ cards }) => (
  <div>
    {Object.values(cards).sort(function(a, b){return a.position - b.position}).map(card => (
      <Card key={card.id} style={cardStyle} bodyStyle={bodyStyle}>
        {card.title}
      </Card>
    ))}
  </div>
);

export default CardList;
