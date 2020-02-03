import React, { useState } from "react";
import { Button } from "antd";
import { Card as AntdCard } from "antd";
import { Draggable } from "react-beautiful-dnd";
import DeleteCardButton from "./DeleteCardButton";

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
  padding: "6px 8px"
};

const buttonStyle = {
  borderColor: "#ebecf0",
  color: "#5e6c84",
  textAlign: "left",
  boxShadow: "none",
  float: "right",
  height: "14px",
  width: "14px",
  borderColor: "transparent"
};

const Card = ({ id, position, title }) => {
  const [buttonVisible, setButtonVisible] = useState(false);
  return (
    <Draggable key={id} draggableId={id} index={position} type="CARD">
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <AntdCard
            key={id}
            style={cardStyle}
            bodyStyle={bodyStyle}
            onMouseEnter={() => setButtonVisible(true)}
            onMouseLeave={() => setButtonVisible(false)}
          >
            {title}
            {buttonVisible ? <DeleteCardButton cardId={id} /> : null}
          </AntdCard>
        </div>
      )}
    </Draggable>
  );
};

export default Card;
