import React, { useState } from "react";
import { connect } from "react-redux";
import { addCard } from "./cardsSlice";
import "./Cards.css";

const mapDispatch = { addCard };

const AddCard = ({ addCard }) => {
  const [cardTitle, setCardTitle] = useState("");
  const [cardDescription, setCardDescription] = useState("");

  const onChangeTitle = e => setCardTitle(e.target.value);
  const onChangeDescription = e => setCardDescription(e.target.value);

  return (
    <div id="container">
      <form
        class="box"
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
          <span>Title:</span>
          <input
            value={cardTitle}
            onChange={onChangeTitle}
            style={{ marginLeft: "4px" }}
          />
        </div>
        <div>
          <span>Description:</span>
          <input
            value={cardDescription}
            onChange={onChangeDescription}
            style={{ marginLeft: "4px" }}
          />
        </div>
        <button type="submit" style={{ marginLeft: "4px" }}>
          Add Card
        </button>
      </form>
    </div>
  );
};

export default connect(
  null,
  mapDispatch
)(AddCard);
