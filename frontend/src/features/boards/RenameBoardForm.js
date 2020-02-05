import React, { useState } from "react";
import { connect } from "react-redux";
import { Form, Input } from "antd";
import { renameBoard } from "./boardsSlice";

const inputStyle = {
  maxHeight: "162px",
  minHeight: "20px"
};

const RenameBoardForm = ({ id, title, setFormVisible, renameBoard }) => {
  const [boardTitle, setBoardTitle] = useState(title);

  const onChange = e => setBoardTitle(e.target.value);
  return (
    <Form
      layout="inline"
      onSubmit={e => {
        e.preventDefault();
        if (!boardTitle.trim()) return;

        renameBoard(id, boardTitle);

        setBoardTitle("");
        setFormVisible(false);
      }}
    >
      <Form.Item style={{ width: "100%" }}>
        <Input
          style={inputStyle}
          value={boardTitle}
          onChange={onChange}
          type="text"
          placeholder="Enter a title for this board..."
          autoFocus={true}
        />
      </Form.Item>
    </Form>
  );
};

const mapDispatch = { renameBoard };

export default connect(null, mapDispatch)(RenameBoardForm);
