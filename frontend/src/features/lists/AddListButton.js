import React, { useState } from "react";
import { connect } from "react-redux";
import { postList } from "./listsSlice";
import { Form, Input, Button } from "antd";
import { getNumLists } from "../../selectors/ListSelectors";

const buttonStyle = {
  marginLeft: "8px",
  minHeight: "38px",
  maxHeight: "38px",
  backgroundColor: "hsla(0, 0%, 100%, .24)",
  color: "white",
  borderColor: "transparent",
  width: "272px",
  display: "flex",
  justifyContent: "flex-start",
  maxWidth: "272px"
};

const formStyle = {
  marginLeft: "8px"
};

const mapDispatch = { postList };

const AddListButton = ({ lists, postList, boardId }) => {
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

          postList(boardId, listTitle, getNumLists(lists, boardId));

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
      <Button
        onClick={() => setShowingInput(true)}
        style={buttonStyle}
        icon="plus"
      >
        Add another list
      </Button>
    );
};

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps, mapDispatch)(AddListButton);
