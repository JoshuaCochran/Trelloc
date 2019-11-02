import React, { useState } from "react";
import { connect } from "react-redux";
import { deleteCard } from "./cardsSlice";

const mapDispatch = { deleteCard };

const DeleteCard = ({ deleteCard }) => {
  const [id, setId] = useState("");

  const onChange = e => setId(e.target.value);

  return (
    <div
    >
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
        <span>Id: </span>
        <input
          type="number"
          value={id}
          onChange={onChange}
          style={{ marginLeft: "4px" }}
        />
        <button type="submit" style={{ marginLeft: "4px" }}>
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
