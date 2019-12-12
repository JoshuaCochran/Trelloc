import React, { useState } from "react";
import { Menu, Button, Select } from "antd";
import { connect } from "react-redux";

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
  height: "auto",
};

const handleClick = (e, setIsVisible, setShowingMoveList) => {
  if (e.key === "1") setIsVisible(true);
  else if (e.key === "3") setShowingMoveList(true);
};

const MoveListMenu = ({ setIsVisible, setShowingMoveList, boards }) => {
  let activeBoard = null;
  Object.keys(boards).forEach(key => {
    if (boards[key].isActive) activeBoard = boards[key];
  });
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
      <div style={{height: "50px"}}>Board: </div>
      <Select defaultValue={activeBoard.title} style={{width: "100%"}}>
        {Object.keys(boards).map(key => (
          <Option value={boards[key].title}>{boards[key].title}</Option>
        ))}
      </Select>
    </Menu>
  );
};

const mapStateToProps = state => ({
  boards: state.boards
});

export default connect(mapStateToProps, null)(MoveListMenu);
