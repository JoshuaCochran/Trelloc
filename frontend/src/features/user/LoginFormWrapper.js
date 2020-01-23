import React, { useState, useCallback } from "react";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import { addUser } from "./userSlice";
import { login } from "./userSlice";
import axios from "axios";
import Cookies from "universal-cookie"

const LoginFormWrapper = ({ addUser, login }) => {
  const [formRef, setFormRef] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    formRef.validateFields((err, values) => {
      if (err) {
        return;
      }
      else {
        login(values.email, values.password);
        formRef.resetFields();
      }
    });
  };

  const saveFormRef = useCallback(node => {
    if (node !== null) {
      setFormRef(node);
    }
  }, []);

  return <LoginForm ref={saveFormRef} onSubmit={handleSubmit} />;
};

const mapDispatch = { addUser, login };

export default connect(null, mapDispatch)(LoginFormWrapper);
