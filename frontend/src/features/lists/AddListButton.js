import React, { useState } from "react";
import { connect } from "react-redux";
import { addList } from "./listsSlice";
import { Form, Input, Button } from "antd";

const buttonStyle = {
  marginLeft: "8px",
  minHeight: "38px",
  maxHeight: "38px"
};

const formStyle = {
  marginLeft: "8px"
};

const mapDispatch = { addList };

const AddListButton = ({ addList }) => {
  const [showingInput, setShowingInput] = useState(false);
  const [listTitle, setListTitle] = useState("");

  const onChange = e => setListTitle(e.target.value);

  if (showingInput)
    return (
      <Form
        layout="inline"
        onSubmit={e => {
          e.preventDefault();
          if (!listTitle.trim()) return;
          addList(listTitle);
          setListTitle("");
          setShowingInput(false);
        }}
        style={formStyle}
      >
        <Form.Item>
          <Input
            value={listTitle}
            onChange={onChange}
            type="text"
            placeholder="Enter a list title..."
            autoFocus={true}
          />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" style={buttonStyle}>
            Add List
          </Button>
        </Form.Item>
      </Form>
    );
  else
    return (
      <Button onClick={() => setShowingInput(true)} style={buttonStyle}>
        Add List
      </Button>
    );
};

export default connect(null, mapDispatch)(AddListButton);
