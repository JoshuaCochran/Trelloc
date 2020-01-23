import React, { useState, useCallback } from "react";
import RegistrationForm from "./RegistrationForm";
import { connect } from "react-redux";
import { register } from "./userSlice";

const RegistrationFormWrapper = ({ register }) => {
  const [formRef, setFormRef] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    formRef.validateFields((err, values) => {
      if (err) {
        return;
      } else {
        register(values.username, values.email, values.password);
        formRef.resetFields();
      }
    });
  };

  const saveFormRef = useCallback(node => {
    if (node !== null) {
      setFormRef(node);
    }
  }, []);

  return <RegistrationForm ref={saveFormRef} onSubmit={handleSubmit} />;
};

const mapDispatch = { register };

export default connect(null, mapDispatch)(RegistrationFormWrapper);
