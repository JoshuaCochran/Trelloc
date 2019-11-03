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
  const [cardTitle, setCardTitle] = useState("");
  const [cardDescription, setCardDescription] = useState("");

  const onChangeTitle = e => setCardTitle(e.target.value);
  const onChangeDescription = e => setCardDescription(e.target.value);

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        if (!cardTitle.trim()) {
          return;
        }
        addCard(cardTitle, cardDescription);
        setCardTitle("");
        setCardDescription("");
      }}
    >
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
