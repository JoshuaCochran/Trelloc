import React from "react";
import { connect } from "react-redux";
import { setActive } from "./boardsSlice";
import { Button } from "antd";
import { Link } from "react-router-dom";

const buttonStyle = {
    backgroundColor: "rgb(81, 152, 57)",
    height: "80px",
    width: "100%",
    fontSize: "16px",
    fontWeight: 700,
    color: "white",
    display: "inline-block",
    overflow: "hidden",
    wordWrap: "break-word",
    flex: "0 0 auto",
    borderColor: "transparent",
}

const mapDispatch = { setActive };

const BoardButton = ({ id, title, isPrivate, setActive }) => {
  return (
    <Link to={"/user/boards/" + id}>
      <Button style={buttonStyle} onClick={() => setActive(id, true)}>{title}</Button>
    </Link>
  );
};

export default connect(null, mapDispatch)(BoardButton);
