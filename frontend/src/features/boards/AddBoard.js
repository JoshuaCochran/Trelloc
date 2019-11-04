import React, { useState } from "react";
import { connect } from "react-redux";
import { addBoard } from "./boardsSlice";

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

const mapDispatch = { addBoard };

const AddBoard = ({ addBoard }) => {
  const [title, setTitle] = useState("");

  const onChange = e => setTitle(e.target.value);

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        if (!title.trim()) {
          return;
        }
        addBoard(title);
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
          style={{ marginLeft: "4px" }}
        />
        <button type="submit" style={{ marginLeft: "4px" }}>
          Add Board
        </button>
      </div>
    </form>
  );
};

export default connect(
  null,
  mapDispatch
)(AddBoard);
