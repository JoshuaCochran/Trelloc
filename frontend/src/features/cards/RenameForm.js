import React, { useState } from "react";
import { connect } from "react-redux";
import { Form, Input } from "antd";
import { renameCards } from "./cardsSlice";

const inputStyle = {
  maxHeight: "162px",
  minHeight: "20px"
};

const RenameForm = ({ id, title, setFormVisible, renameCards }) => {
  const [cardTitle, setCardTitle] = useState(title);

  const onChange = e => setCardTitle(e.target.value);
  return (
    <Form
      layout="inline"
      onSubmit={e => {
        e.preventDefault();
        if (!cardTitle.trim()) return;

        renameCards(id, cardTitle);

        setCardTitle("");
        setFormVisible(false);
      }}
    >
      <Form.Item style={{ width: "100%" }}>
        <Input
          style={inputStyle}
          value={cardTitle}
          onChange={onChange}
          type="text"
          placeholder="Enter a title for this card..."
          autoFocus={true}
        />
      </Form.Item>
    </Form>
  );
};

const mapDispatch = { renameCards };

export default connect(null, mapDispatch)(RenameForm);
