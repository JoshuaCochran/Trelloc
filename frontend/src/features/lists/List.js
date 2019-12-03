import React from "react";
import CardList from "../cards/CardList";
import AddCardButton from "../cards/AddCardButton";
import { Card } from "antd";

const cardStyle = {
  width: "272px",
  backgroundColor: "rgb(235, 236, 240)",
  flex: "0 0 auto",
  marginLeft: "8px",
  borderRadius: "3px"
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
  <Card
    title={title}
    style={cardStyle}
    actions={[<AddCardButton listId={id}>Add another card</AddCardButton>]}
  >
    <CardList cards={cards} />
  </Card>
);

export default List;
