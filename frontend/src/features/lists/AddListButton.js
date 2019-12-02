import React, { useState } from "react";
import { connect } from "react-redux";
import { addList } from "./listsSlice";
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

const mapDispatch = { addList };

const AddListButton = ({ addList }) => {
  const [showingInput, setShowingInput] = useState(false);
  const [listTitle, setListTitle] = useState("");

  const onChange = e => setListTitle(e.target.value);

  if (showingInput)
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!listTitle.trim()) return;
          addList(listTitle);
          setListTitle("");
          setShowingInput(false);
        }}
      >
        <input
          style={inputStyle}
          value={listTitle}
          onChange={onChange}
          type="text"
          placeholder="Enter a list title..."
        />
        <Button htmlType="submit" style={buttonStyle}>
          Add List
        </Button>
      </form>
    );
  else
    return (
      <Button onClick={() => setShowingInput(true)}>
        Add List
      </Button>
    );
};

export default connect(null, mapDispatch)(AddListButton);