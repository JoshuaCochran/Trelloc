import React from "react";
import CardList from "../cards/CardList";
import AddCardButton from "../cards/AddCardButton";
import { Card } from "antd";

const listWrapper = {
  width: "272px",
  height: "100%",
  margin: "0 4px",
  boxSizing: "border-box",
  display: "inline-block",
  verticalAlign: "top"
};

const cardStyle = {
  width: "272px",
  backgroundColor: "#ebecf0",
  marginLeft: "8px",
  borderRadius: "3px",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  maxHeight: "100%",
  overflowY: "hidden"
};

const listContent = {};

const listHeader = {
  flex: "0 0 auto",
  padding: "10px 8px",
  position: "relative",
  minHeight: "20px",
  fontWeight: 600
};

const buttonStyle = {
  minWidth: "100%",
  position: "relative",
  padding: "4px 0px",
  display: "flex",
  justify: "space-between",
};

const List = ({ id, title, cards }) => (
  <div style={listWrapper}>
    <Card style={cardStyle} bodyStyle={{padding: "0 4px"}}>
      <div style={listContent}>
        <div style={listHeader}>{title}</div>
        <div style={{ zIndex: 10, maxHeight: "80vh", overflowY: "scroll" }}>
          <CardList cards={cards} />
        </div>
        <div style={buttonStyle}>
          <AddCardButton listId={id}>
            Add another card
          </AddCardButton>
        </div>
      </div>
    </Card>
  </div>
);

export default List;
