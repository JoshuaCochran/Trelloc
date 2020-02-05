import React, { useState } from "react";
import { Button } from "antd";
import { connect } from "react-redux";
import DeleteBoardButton from "./DeleteBoardButton";
import RenameBoardForm from "./RenameBoardForm";

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
  const [formVisible, setFormVisible] = useState(false);

  return boards[id] ? (
    <div style={headerStyle}>
      <Button
        type="primary"
        style={titleStyle}
        onClick={() => setFormVisible(true)}
      >
        {formVisible ? (
          <RenameBoardForm
            id={id}
            title={boards[id].title}
            setFormVisible={setFormVisible}
          />
        ) : (
          boards[id].title
        )}
      </Button>
      <DeleteBoardButton id={id} />
    </div>
  ) : null;
};

const mapStateToProps = state => ({
  boards: state.boards
});

export default connect(mapStateToProps, null)(BoardHeader);
