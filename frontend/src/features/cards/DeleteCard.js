import React, { useState } from "react";
import { connect } from "react-redux";
import { deleteCard } from "./cardsSlice";

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

const buttonStyle = {
  display: "inlineBlock",
  float: "left",
  marginLeft: "4px"
};

const mapDispatch = { deleteCard };

const DeleteCard = ({ deleteCard }) => {
  const [id, setId] = useState("");

  const onChange = e => setId(e.target.value);

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!id.trim()) {
            return;
          }
          deleteCard({ id: id });
          setId("");
        }}
      >
        <label style={labelStyle}>Id: </label>
        <input
          style={inputStyle}
          type="number"
          value={id}
          onChange={onChange}
        />
        <button type="submit" style={buttonStyle}>
          Delete Card
        </button>
      </form>
    </div>
  );
};

export default connect(
  null,
  mapDispatch
)(DeleteCard);
