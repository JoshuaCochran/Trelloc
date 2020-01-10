import React, { useState, useCallback } from "react";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import { addUser } from "./userSlice";
import axios from "axios";

const LoginFormWrapper = ({ addUser }) => {
  const [formRef, setFormRef] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    formRef.validateFields((err, values) => {
      if (err) {
        return;
      }
      else {
        console.log("Received values of form: ", values);
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

const mapDispatch = { addUser };

export default connect(null, mapDispatch)(LoginFormWrapper);
