import React from "react";
import { Card } from "antd";
import { Draggable } from "react-beautiful-dnd";

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
    {Object.values(cards)
      .sort(function(a, b) {
        return a.position - b.position;
      })
      .map(card => (
        <Draggable key={card.id} draggableId={card.id} index={card.position} type="CARD">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <Card key={card.id} style={cardStyle} bodyStyle={bodyStyle}>
                {card.title}
              </Card>
            </div>
          )}
        </Draggable>
      ))}
  </div>
);

export default CardList;
