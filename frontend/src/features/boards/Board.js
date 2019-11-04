import React from "react";
import CardList from "../cards/CardList";

const cardStyle = {
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    transition: "0.3s",
    borderRadius: "5px",
    width: "250px",
    marginLeft: "10px"
}

const containerStyle = {
    padding: "2px 16px"
}

const Board = ({ title, cards }) => (
  <div style={cardStyle}>
    <div style={containerStyle}>
      <h4>{title}</h4>
      <CardList cards={cards} />
    </div>
  </div>
);

export default Board;
