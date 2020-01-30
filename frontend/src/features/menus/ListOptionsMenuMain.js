import React from "react";
import { Menu } from "antd";
import { connect } from "react-redux";
import { deleteList } from "../lists/listsSlice";

const menuStyle = {
  width: "304px",
  overflow: "hidden"
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

const menuGroupStyle = {
  overflowX: "hidden",
  overflowY: "auto",
  padding: "0 12px 12px"
};

const menuItemStyle = {
  cursor: "pointer",
  display: "block",
  fontWeight: "400",
  padding: "6px 12px",
  margin: "0 -12px",
  textDecoration: "none",
  color: "#172b4d"
};

const handleClick = (
  e,
  setIsVisible,
  setShowingMoveList,
  listId,
  deleteList
) => {
  if (e.key === "1") setIsVisible(true);
  else if (e.key === "3") setShowingMoveList(true);
  else if (e.key === "8") {
    console.log("Pressed archive!")
    deleteList(listId);
  }
};

const ListOptionsMenuMain = ({
  setIsVisible,
  setShowingMoveList,
  listId,
  deleteList
}) => {
  return (
    <Menu
      onClick={e =>
        handleClick(e, setIsVisible, setShowingMoveList, listId, deleteList)
      }
      style={menuStyle}
    >
      <Menu.Item style={headerStyle}>
        <span style={headerTitle}>List Actions</span>
      </Menu.Item>
      <Menu.Divider style={dividerStyle} />
      <Menu.ItemGroup style={menuGroupStyle}>
        <Menu.Item key="1" style={menuItemStyle}>
          Add Card...
        </Menu.Item>
        <Menu.Item key="2" style={menuItemStyle}>
          Copy List...
        </Menu.Item>
        <Menu.Item key="3" style={menuItemStyle}>
          Move List...
        </Menu.Item>
        <Menu.Item key="4" style={menuItemStyle}>
          Watch
        </Menu.Item>
        <Menu.Divider style={dividerStyle} />
        <Menu.Item key="5" style={menuItemStyle}>
          Sort By...
        </Menu.Item>
        <Menu.Divider style={dividerStyle} />
        <Menu.Item key="6" style={menuItemStyle}>
          Move All Cards in This List...
        </Menu.Item>
        <Menu.Item key="7" style={menuItemStyle}>
          Archive All Cards in This List...
        </Menu.Item>
        <Menu.Divider style={dividerStyle} />
        <Menu.Item key="8" style={menuItemStyle}>
          Archive This List
        </Menu.Item>
      </Menu.ItemGroup>
    </Menu>
  );
};

const mapDispatch = { deleteList };

export default connect(null, mapDispatch)(ListOptionsMenuMain);
