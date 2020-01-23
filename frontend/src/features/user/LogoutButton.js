import React, { useState } from "react";
import { connect } from "react-redux";
import { deleteUser } from "./userSlice";
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

const LogoutButton = ({ deleteUser }) => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleYes = e => {
    axios
      .get("users/me/logout")
      .then(res => {
        const cookies = new Cookies();
        cookies.remove("trelloc token", { path: "/" });
        deleteUser();
      })
      .catch(err => {
        console.log("Logout error!");
      });
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

const mapDispatch = { deleteUser };

export default connect(null, mapDispatch)(LogoutButton);
