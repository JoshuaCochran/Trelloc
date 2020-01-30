import React, { useState, useRef, useEffect } from "react";
import CardList from "../cards/CardList";
import AddCardButton from "../cards/AddCardButton";
import ListOptionsDropDown from "./ListOptionsDropDown";
import { Card } from "antd";
import { Draggable, Droppable } from "react-beautiful-dnd";

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
  justify: "space-between"
};

const ellipsisStyle = {
  borderColor: "#ebecf0",
  color: "#5e6c84",
  textAlign: "left",
  boxShadow: "none",
  float: "right"
};

const List = ({
  id,
  title,
  position,
  cards
}) => {
  const wrapperRef = useRef(null);
  const [isTopVisible, setIsTopVisible] = useState(false);
  const [isBotVisible, setIsBotVisible] = useState(false);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside, false);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside, false);
    };
  }, []);

  const handleClickOutside = event => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setIsTopVisible(false);
      setIsBotVisible(false);
    }
  };

  return (
    <Draggable
      key={id}
      draggableId={id}
      index={position}
      type="LIST"
    >
      {(provided1, snapshot) => (
        <div
          ref={provided1.innerRef}
          {...provided1.draggableProps}
          {...provided1.dragHandleProps}
        >
          <Droppable droppableId={id} type="CARD">
            {(provided, snapshot) => (
              <div ref={provided.innerRef}>
                <div style={listWrapper} ref={wrapperRef}>
                  <Card style={cardStyle} bodyStyle={{ padding: "0 4px" }}>
                    <div style={listContent}>
                      <div style={listHeader}>
                        {title}{" "}
                        <ListOptionsDropDown
                          style={ellipsisStyle}
                          setIsVisible={setIsTopVisible}
                          listId={id}
                        />
                      </div>
                      <div style={buttonStyle}>
                        <AddCardButton
                          listId={id}
                          isVisible={isTopVisible}
                          setIsVisible={setIsTopVisible}
                          fromDropDown={true}
                        >
                          Add another card
                        </AddCardButton>
                      </div>
                      <div
                        style={{
                          zIndex: 10,
                          maxHeight: "80vh",
                          overflowY: "scroll"
                        }}
                      >
                        <CardList
                          cards={cards}
                        />
                      </div>
                      <div style={buttonStyle}>
                        <AddCardButton
                          listId={id}
                          isVisible={isBotVisible}
                          setIsVisible={setIsBotVisible}
                          fromDropDown={false}
                        >
                          Add another card
                        </AddCardButton>
                      </div>
                    </div>
                  </Card>
                </div>
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          {provided1.placeholder}
        </div>
      )}
    </Draggable>
  );
};

export default List;
