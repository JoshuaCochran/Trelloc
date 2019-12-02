import React, { useState } from "react";
import { connect } from "react-redux";
import { addList } from "./listsSlice";

const labelStyle = {
  display: "inline-block",
  float: "left",
  clear: "left",
  width: "250px",
  textAlign: "right"
};

const inputStyle = {
  display: "inlineBlock",
  float: "left",
  marginLeft: "4px"
};

const mapDispatch = { addList };

const AddList = ({ addList }) => {
  const [title, setTitle] = useState("");

  const onChange = e => setTitle(e.target.value);

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        if (!title.trim()) {
          return;
        }
        addList(title);
        setTitle("");
      }}
    >
      <div>
        <label style={labelStyle}>Title:</label>
        <input
          style={inputStyle}
          value={title}
          onChange={onChange}
          type="text"
        />
        <button type="submit" style={{ marginLeft: "4px" }}>
          Add List
        </button>
      </div>
    </form>
  );
};

export default connect(
  null,
  mapDispatch
)(AddList);
