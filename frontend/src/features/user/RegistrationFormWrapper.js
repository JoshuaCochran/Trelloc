import React, { useState, useCallback } from "react";
import RegistrationForm from "./RegistrationForm";
import { connect } from "react-redux";
import { addUser } from "./userSlice";
import axios from "axios";
import Cookies from "universal-cookie";

const RegistrationFormWrapper = ({ addUser }) => {
  const [formRef, setFormRef] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    formRef.validateFields((err, values) => {
      if (err) {
        return;
      } else {
        const data = {
          username: values.username,
          email: values.email,
          password: values.password
        };

        axios
          .post("users/", data)
          .then(res => {
            addUser(
              res.data.user.username,
              res.data.user.email,
              res.data.token
            );
            const cookies = new Cookies();
            cookies.set("trelloc token", res.data.token, { path: "/" });
            console.log(cookies.get("trelloc token"));
          })
          .catch(err => {
            console.log("Registration error!");
          });
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

  return <RegistrationForm ref={saveFormRef} onSubmit={handleSubmit} />;
};

const mapDispatch = { addUser };

export default connect(null, mapDispatch)(RegistrationFormWrapper);
