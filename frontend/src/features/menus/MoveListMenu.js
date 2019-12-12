import React, { useState } from "react";
import { Menu, Button, Select } from "antd";
import { connect } from "react-redux";
import { moveList } from "../lists/listsSlice";

const { Option } = Select;

const menuStyle = {
  width: "304px",
  overflow: "hidden",
  height: "520px"
};

const dividerStyle = {
  margin: "4px 0"
};

const headerStyle = {
  display: "block",
  textAlign: "center",
  height: "40px",
  color: "#172b4d"
};

const headerTitle = {
  display: "block",
  lineHeight: "40px",
  margin: "0 12px",
  overflow: "hidden",
  padding: "0 32px",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
};

const buttonStyle = {
  borderColor: "transparent",
  color: "#5e6c84",
  textAlign: "left",
  boxShadow: "none",
  float: "left",
  display: "block",
  height: "auto"
};

const selectStyle = {
  left: 0,
  margin: 0,
  border: "none",
  width: "100%"
};

const labelStyle = { 
    height: "8px",
    margin: "4px"
}

const handleClick = (e, setIsVisible, setShowingMoveList) => {
  if (e.key === "1") setIsVisible(true);
  else if (e.key === "3") setShowingMoveList(true);
};

const MoveListMenu = ({
  setIsVisible,
  setShowingMoveList,
  listId,
  boards,
  lists,
  moveList
}) => {
  let activeBoard = null;
  Object.keys(boards).forEach(key => {
    if (boards[key].isActive) activeBoard = boards[key];
  });

  const [selectedBoard, setSelectedBoard] = useState(activeBoard.id);
  const [selectedPosition, setSelectedPosition] = useState(listId);

  return (
    <Menu
      onClick={e => handleClick(e, setIsVisible, setShowingMoveList)}
      style={menuStyle}
    >
      <Menu.Item style={headerStyle}>
        <Button
          onClick={() => setShowingMoveList(false)}
          icon="left"
          style={buttonStyle}
        />
        <span style={headerTitle}>Move List</span>
      </Menu.Item>
      <Menu.Divider style={dividerStyle} />
      <div style={labelStyle}>Board: </div>
      <Select
        defaultValue={activeBoard.id}
        style={selectStyle}
        onChange={value => setSelectedBoard(value)}
      >
        {Object.keys(boards).map(key => (
          <Option value={boards[key].id} key={key}>
            {boards[key].title}
          </Option>
        ))}
      </Select>
      <div style={labelStyle}>Position: </div>
      <Select
        defaultValue={listId}
        style={selectStyle}
        onChange={value => setSelectedPosition(value)}
      >
        {Object.keys(lists).map(key =>
          lists[key].boardId == selectedBoard ? (
            <Option value={lists[key].id} key={key}>
              {lists[key].id}
              {lists[key].id === listId ? "(current)" : null}
            </Option>
          ) : null
        )}
      </Select>
      <Menu.Item>
        <Button
          onClick={() =>
            moveList(listId, selectedPosition, selectedBoard)
          }
        >
          Move
        </Button>
      </Menu.Item>
    </Menu>
  );
};

const mapStateToProps = state => ({
  boards: state.boards,
  lists: state.lists
});

const mapDispatch = { moveList };

export default connect(mapStateToProps, mapDispatch)(MoveListMenu);
