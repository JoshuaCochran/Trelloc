import React, { useState } from "react";
import { connect } from "react-redux";
import { Form, Input } from "antd";
import { renameList } from "./listsSlice";

const inputStyle = {
  maxHeight: "162px",
  minHeight: "20px"
};

const RenameListForm = ({ id, title, setFormVisible, renameList }) => {
  const [listTitle, setListTitle] = useState(title);

  const onChange = e => setListTitle(e.target.value);
  return (
    <Form
      layout="inline"
      onSubmit={e => {
        e.preventDefault();
        if (!listTitle.trim()) return;

        renameList(id, listTitle);

        setListTitle("");
        setFormVisible(false);
      }}
    >
      <Form.Item style={{ width: "100%" }}>
        <Input
          style={inputStyle}
          value={listTitle}
          onChange={onChange}
          type="text"
          placeholder="Enter a title for this list..."
          autoFocus={true}
        />
      </Form.Item>
    </Form>
  );
};

const mapDispatch = { renameList };

export default connect(null, mapDispatch)(RenameListForm);
