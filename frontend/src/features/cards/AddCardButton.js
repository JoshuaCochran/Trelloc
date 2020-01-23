import React, { useState } from "react";
import { connect } from "react-redux";
import { postCard } from "./cardsSlice";
import { Form, Input, Button } from "antd";
import { getNumCards } from "../../selectors/CardSelectors"

const inputStyle = {
  maxHeight: "162px",
  minHeight: "54px"
};

const buttonContainer = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignContent: "center"
};

const submitButtonStyle = {
  minHeight: "38px",
  maxHeight: "38px",
  backgroundColor: "#5aac44",
  color: "white"
};

const closeButtonStyle = {
  borderColor: "#ebecf0",
  color: "#5e6c84",
  textAlign: "left",
  boxShadow: "none",
  height: "38px",
  width: "38px",
  minWidth: "38px"
};

const addButtonStyle = {
  borderColor: "#ebecf0",
  color: "#5e6c84",
  textAlign: "left",
  boxShadow: "none"
};

const mapDispatch = { postCard };

const AddCardButton = ({
  cards,
  postCard,
  listId,
  isVisible,
  setIsVisible,
  fromDropDown
}) => {
  const [cardTitle, setCardTitle] = useState("");

  const onChange = e => setCardTitle(e.target.value);

  if (isVisible)
    return (
      <Form
        layout="inline"
        onSubmit={e => {
          e.preventDefault();
          if (!cardTitle.trim()) return;

          postCard(listId, cardTitle, "", getNumCards(cards, listId));

          setCardTitle("");
          setIsVisible(false);
        }}
      >
        <Form.Item style={{ width: "100%" }}>
          <Input.TextArea
            style={inputStyle}
            value={cardTitle}
            onChange={onChange}
            type="text"
            placeholder="Enter a title for this card..."
            autoFocus={true}
            autoSize={true}
          />
        </Form.Item>
        <Form.Item>
          <div style={buttonContainer}>
            <Button htmlType="submit" style={submitButtonStyle} block>
              Add Card
            </Button>
            <Button
              ghost={true}
              onClick={() => {
                setIsVisible(false);
                setCardTitle("");
              }}
              style={closeButtonStyle}
              icon="close"
            />
          </div>
        </Form.Item>
      </Form>
    );
  else if (!isVisible && !fromDropDown)
    return (
      <Button
        block
        ghost={true}
        onClick={() => {
          setIsVisible(true);
        }}
        style={addButtonStyle}
        icon="plus"
      >
        Add another card
      </Button>
    );
  else return null;
};

const mapStateToProps = state => ({
  cards: state.cards
});

export default connect(mapStateToProps, mapDispatch)(AddCardButton);
