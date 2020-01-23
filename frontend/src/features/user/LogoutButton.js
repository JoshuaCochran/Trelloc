import React, { useState } from "react";
import { connect } from "react-redux";
import { logout } from "./userSlice";
import axios from "axios";
import Cookies from "universal-cookie";
import { Modal, Button } from "antd";

const buttonStyle = {
  display: "inline-block",
  position: "relative",
  marginRight: "4px",
  width: "32px",
  height: "32px",
  padding: 0
};

const LogoutButton = ({ logout }) => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleYes = e => {
    logout();
    setVisible(false);
  };

  const handleNo = e => {};

  return (
    <div>
      <Button
        type="primary"
        onClick={showModal}
        style={buttonStyle}
        shape="circle"
        icon="codepen"
      ></Button>
      <Modal
        title="Logout"
        visible={visible}
        onOk={handleYes}
        okText="Yes"
        onCancel={handleNo}
        cancelText="No"
      >
        <p>Are you sure you want to log out?</p>
      </Modal>
    </div>
  );
};

const mapDispatch = { logout };

export default connect(null, mapDispatch)(LogoutButton);
