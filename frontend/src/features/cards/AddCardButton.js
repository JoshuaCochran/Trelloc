import React, { useState } from "react";
import { connect } from "react-redux";
import { addCard } from "./cardsSlice";
import { Form, Icon, Input, Button } from "antd";

const inputStyle = {
};

const buttonStyle = {

};

const mapDispatch = { addCard };

const AddCardButton = ({ addCard, listId }) => {
  const [showingInput, setShowingInput] = useState(false);
  const [cardTitle, setCardTitle] = useState("");

  const onChange = e => setCardTitle(e.target.value);

  if (showingInput)
    return (
      <Form
        layout="inline"
        onSubmit={e => {
          e.preventDefault();
          if (!cardTitle.trim()) return;
          addCard(listId, cardTitle, "");
          setCardTitle("");
          setShowingInput(false);
        }}
      >
        <Form.Item>
          <Input
            style={inputStyle}
            value={cardTitle}
            onChange={onChange}
            type="text"
            placeholder="Enter a title for this card..."
            autoFocus={true}
          />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" style={buttonStyle} block>
            Add Card
          </Button>
        </Form.Item>
      </Form>
    );
  else
    return (
      <Button block onClick={() => setShowingInput(true)} style={{textAlign: "left"}}>
        <Icon type="plus" />Add another card
      </Button>
    );
};

export default connect(null, mapDispatch)(AddCardButton);
