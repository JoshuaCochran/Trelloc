import React, { useState } from "react";
import { connect } from "react-redux";
import { logout } from "./userSlice";
import { Button, Modal } from "antd";
const { confirm } = Modal;

const buttonStyle = {
  display: "inline-block",
  position: "relative",
  marginRight: "4px",
  width: "32px",
  height: "32px",
  padding: 0
};

const LogoutButton = ({ logout }) => {
  const showConfirm = () => {
    confirm({
      content: "Are you sure you want to log out?",
      onOk() {
        logout();
      },
      onCancel() {}
    });
  };

  return (
    <Button
      onClick={showConfirm}
      style={buttonStyle}
      shape="circle"
      icon="logout"
    />
  );
};

const mapDispatch = { logout };

export default connect(null, mapDispatch)(LogoutButton);
