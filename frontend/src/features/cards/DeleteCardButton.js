import React from "react";
import { Button, Modal } from "antd";
import { deleteCard } from "./cardsSlice";
import { connect } from "react-redux";
const { confirm } = Modal;

const buttonStyle = {
  color: "#5e6c84",
  textAlign: "left",
  boxShadow: "none",
  height: "14px",
  width: "14px",
  borderColor: "transparent"
};

const showConfirm = (cardId, deleteCard) => {
  confirm({
    content: "Are you sure you want to delete this card?",
    onOk() {
      deleteCard(cardId);
    },
    onCancel() {}
  });
};

const DeleteCardButton = ({ cardId, deleteCard }) => {
  return (
    <Button
      icon="close"
      style={buttonStyle}
      onClick={() => showConfirm(cardId, deleteCard)}
    />
  );
};

const mapDispatch = { deleteCard };

export default connect(null, mapDispatch)(DeleteCardButton);
