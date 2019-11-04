import React, { useState } from "react";
import { connect } from "react-redux";
import { addCard } from "./cardsSlice";

const labelStyle = {
  display: "inline-block",
  float: "left",
  clear: "left",
  width: "250px",
  textAlign: "right"
};

const inputStyle = {
  display: "inlineBlock",
  float: "left"
};

const mapDispatch = { addCard };

const AddCard = ({ addCard }) => {
  const [boardId, setBoardId] = useState("");
  const [cardTitle, setCardTitle] = useState("");
  const [cardDescription, setCardDescription] = useState("");

  const onChangeBoardId = e => setBoardId(e.target.value);
  const onChangeTitle = e => setCardTitle(e.target.value);
  const onChangeDescription = e => setCardDescription(e.target.value);

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        if (!cardTitle.trim() || !boardId.trim()) {
          return;
        }
        addCard(boardId, cardTitle, cardDescription);
        setBoardId("");
        setCardTitle("");
        setCardDescription("");
      }}
    >
      <div>
        <label style={labelStyle}>Board Id:</label>
        <input
          style={inputStyle}
          value={boardId}
          onChange={onChangeBoardId}
          type="text"
          style={{ marginLeft: "4px" }}
        />
      </div>
      <div>
        <label style={labelStyle}>Title:</label>
        <input
          style={inputStyle}
          value={cardTitle}
          onChange={onChangeTitle}
          type="text"
          style={{ marginLeft: "4px" }}
        />
      </div>
      <div>
        <label style={labelStyle}>Description:</label>
        <input
          style={inputStyle}
          value={cardDescription}
          onChange={onChangeDescription}
          type="text"
          style={{ marginLeft: "4px" }}
        />
        <button type="submit" style={{ marginLeft: "4px" }}>
          Add Card
        </button>
      </div>
    </form>
  );
};

export default connect(
  null,
  mapDispatch
)(AddCard);
