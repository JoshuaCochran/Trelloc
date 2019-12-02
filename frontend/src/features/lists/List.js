import React from "react";
import CardList from "../cards/CardList";
import AddCardButton from "../cards/AddCardButton";
import { Card } from "antd";

const cardStyle = {
  width: "200px",
  backgroundColor: "rgb(235, 236, 240)"
};

const containerStyle = {
  padding: "2px 16px"
};

const buttonStyle = {
  padding: "1em",
  borderRadius: "8px",
  color: "black",
  backgroundColor: "rgb(235, 236, 240)",
  border: 0,
  cursor: "pointer",
  margin: 0,
  width: "170px",
  textAlign: "left"
};

const List = ({ id, title, cards }) => (
  <Card title={title} style={cardStyle}>
    <CardList cards={cards} />
    <AddCardButton listId={id}>Add another card</AddCardButton>
  </Card>
);

export default List;
