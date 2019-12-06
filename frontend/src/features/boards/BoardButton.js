import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

const buttonStyle = {
    width: "calc(50% - 4px)",
    marginRight: "8px",
    marginBottom: "8px",
    backgroundColor: "rgb(81, 152, 57)",
    height: "80px",
}

const BoardButton = ({ id, title, isPrivate }) => {
  return (
    <Link to={"/user/boards/" + id}>
      <Button style={buttonStyle}>{title}</Button>
    </Link>
  );
};

export default BoardButton;
