import React, { useState, useCallback } from "react";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import { login } from "./userSlice";

const LoginFormWrapper = ({ login }) => {
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

const mapDispatch = { login };

export default connect(null, mapDispatch)(LoginFormWrapper);
