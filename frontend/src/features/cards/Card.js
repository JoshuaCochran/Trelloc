import React, { useState } from "react";
import { Button } from "antd";
import { Card as AntdCard } from "antd";
import { Draggable } from "react-beautiful-dnd";
import DeleteCardButton from "./DeleteCardButton";
import RenameForm from "./RenameForm";

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
  color: "#5e6c84",
  textAlign: "left",
  boxShadow: "none",
  height: "14px",
  width: "14px",
  borderColor: "transparent",
  marginRight: "4px"
};

const Card = ({ id, position, title }) => {
  const [buttonVisible, setButtonVisible] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
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
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              {formVisible ? (
                <RenameForm
                  id={id}
                  title={title}
                  setFormVisible={setFormVisible}
                />
              ) : (
                title
              )}
              {buttonVisible && !formVisible ? (
                <div
                  style={{
                    marginLeft: "8px"
                  }}
                >
                  <Button
                    style={buttonStyle}
                    icon="edit"
                    onClick={() => setFormVisible(true)}
                  />
                  <DeleteCardButton cardId={id} />
                </div>
              ) : null}
            </div>
          </AntdCard>
        </div>
      )}
    </Draggable>
  );
};

export default Card;
