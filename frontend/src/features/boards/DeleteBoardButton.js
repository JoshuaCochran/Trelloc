import React from "react";
import { Button, Modal } from "antd";
import { deleteBoard } from "./boardsSlice";
import { connect } from "react-redux";
const { confirm } = Modal;

const buttonStyle = {
  color: "white",
  textAlign: "left",
  boxShadow: "none",
  float: "right",
  height: "32px",
  width: "auto",
  borderColor: "transparent",
  borderRadius: "3px",
  lineHeight: "32px",
  margin: "0 4px 4px 0",
  backgroundColor: "hsla(0,0%,100%, .24)"
};

const showConfirm = (boardId, deleteBoard) => {
  confirm({
    content: "Are you sure you want to delete this board?",
    onOk() {
      showReallyConfirm(boardId, deleteBoard);
    },
    onCancel() {}
  });
};

const showReallyConfirm = (boardId, deleteBoard) => {
  confirm({
    content: "Are you really sure you want to delete this board?",
    okText: "Cancel",
    onOk() {},
    cancelText: "Ok",
    onCancel() {
      deleteBoard(boardId);
    }
  });
};

const DeleteBoardButton = ({ id, deleteBoard }) => {
  return (
    <Button
      style={buttonStyle}
      onClick={() => showConfirm(id, deleteBoard)}
    >
      Archive
    </Button>
  );
};

const mapDispatch = { deleteBoard };

export default connect(null, mapDispatch)(DeleteBoardButton);
