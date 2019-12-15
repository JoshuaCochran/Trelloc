import React, { useState } from "react";
import { Menu, Button, Select } from "antd";
import { connect } from "react-redux";
import { moveList } from "../lists/listsSlice";
import { getActiveBoard, getTitle, getId } from "../../selectors/BoardSelectors"

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
  margin: "8px",
  padding: "4px",
  fontSize: "14px"
};

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
  const [selectedBoard, setSelectedBoard] = useState(getActiveBoard(boards));
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
      <div>
        <div style={labelStyle}>Board: </div>
        <Select
          defaultValue={getTitle(boards, getActiveBoard(boards))}
          style={selectStyle}
          onChange={value => setSelectedBoard(value)}
        >
          {Object.keys(boards).map(key => (
            <Option value={getId(boards, key)} key={key}>
              {getTitle(boards, key)}
            </Option>
          ))}
        </Select>
      </div>
      <div style={labelStyle}>Position: </div>
      <Select
        defaultValue={listId}
        style={selectStyle}
        onChange={value => setSelectedPosition(value)}
      >
        {Object.keys(lists).map(key =>
          lists[key].boardId == selectedBoard ? (
            <Option value={getId(lists, key)} key={key}>
              {getId(lists, key)}
              {getId(lists, key) === listId ? " (current)" : null}
            </Option>
          ) : null
        )}
      </Select>
      <Menu.Item>
        <Button
          onClick={() => moveList(listId, selectedPosition, selectedBoard)}
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
