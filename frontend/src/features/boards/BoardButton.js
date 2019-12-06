import React from "react";
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

const BoardButton = ({ id, title, isPrivate }) => {
  return (
    <Link to={"/user/boards/" + id}>
      <Button style={buttonStyle}>{title}</Button>
    </Link>
  );
};

export default BoardButton;
