import React, { useState } from "react";
import { connect } from "react-redux";
import { addCard } from "./cardsSlice";
import { Button } from "antd";

const inputStyle = {
  display: "inlineBlock",
  float: "left",
  marginLeft: "4px"
};

const buttonStyle = {
  display: "inlineBlock",
  float: "left",
  marginLeft: "4px"
};

const mapDispatch = { addCard };

const AddCardButton = ({ addCard, listId }) => {
  const [showingInput, setShowingInput] = useState(false);
  const [cardTitle, setCardTitle] = useState("");

  const onChange = e => setCardTitle(e.target.value);

  if (showingInput)
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!cardTitle.trim()) return;
          addCard(listId, cardTitle, "");
          setCardTitle("");
          setShowingInput(false);
        }}
      >
        <input
          style={inputStyle}
          value={cardTitle}
          onChange={onChange}
          type="text"
          placeholder="Enter a title for this card..."
        />
        <Button htmlType="submit" style={buttonStyle} block>
          Add Card
        </Button>
      </form>
    );
  else
    return (
      <Button block onClick={() => setShowingInput(true)}>
        Add another card
      </Button>
    );
};

export default connect(null, mapDispatch)(AddCardButton);
