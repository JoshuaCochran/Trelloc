import React, { useState } from "react";
import { connect } from "react-redux";
import { addBoard } from "./boardsSlice";
import { Form, Input, Button } from "antd";

const buttonStyle = {
  width: "calc(50% - 4px)",
  marginRight: "8px",
  marginBottom: "8px",
  backgroundColor: "rgb(81, 152, 57)",
  height: "80px"
};

const formStyle = {
  marginLeft: "8px"
};

const mapDispatch = { addBoard };

const AddBoardButton = ({ addBoard }) => {
  const [showingInput, setShowingInput] = useState(false);
  const [boardTitle, setBoardTitle] = useState("");

  const onChange = e => setBoardTitle(e.target.value);

  if (showingInput)
    return (
      <Form
        layout="inline"
        onSubmit={e => {
          e.preventDefault();
          if (!boardTitle.trim()) return;
          addBoard(boardTitle);
          setBoardTitle("");
          setShowingInput(false);
        }}
        style={formStyle}
      >
        <Form.Item>
          <Input
            value={boardTitle}
            onChange={onChange}
            type="text"
            placeholder="Enter a board title..."
            autoFocus={true}
          />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" style={buttonStyle}>
            Add Board
          </Button>
        </Form.Item>
      </Form>
    );
  else
    return (
      <Button onClick={() => setShowingInput(true)} style={buttonStyle}>
        Create new board
      </Button>
    );
};

export default connect(null, mapDispatch)(AddBoardButton);
