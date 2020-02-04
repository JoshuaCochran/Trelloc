import React from "react";
import { Layout, Button } from "antd";
import { connect } from "react-redux";
import { getTitle } from "../../selectors/BoardSelectors";
import DeleteBoardButton from "./DeleteBoardButton";

const headerStyle = {
  backgroundColor: "rgba(0,0,0,.24)",
  height: "auto",
  padding: "8px 4px 4px 8px",
  position: "relative",
  display: "block",
  color: "white"
};

const titleStyle = {
  backgroundColor: "transparent",
  fontSize: "18px",
  fontWeight: "700",
  lineHeight: "32px",
  padding: 0,
  textDecoration: "none",
  maxWidth: "calc(100% - 24px)",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  height: "32px",
  borderColor: "transparent"
};

const BoardHeader = ({ id, boards }) => {
    console.log(id)
  return (
    <div style={headerStyle}>
      <Button type="primary" style={titleStyle}>
        {boards[id] ? boards[id].title : null}
      </Button>
      <DeleteBoardButton id={id} />
    </div>
  );
};

const mapStateToProps = state => ({
  boards: state.boards
});

export default connect(mapStateToProps, null)(BoardHeader);
