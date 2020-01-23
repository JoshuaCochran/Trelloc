import React, { useState, useCallback } from "react";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import { addUser } from "./userSlice";
import axios from "axios";
import Cookies from "universal-cookie"

const LoginFormWrapper = ({ addUser }) => {
  const [formRef, setFormRef] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    formRef.validateFields((err, values) => {
      if (err) {
        return;
      }
      else {
        const data = {
          email: values.email,
          password: values.password
        }
        
        axios
        .post("users/login", data)
        .then(res => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + res.data.token;
          addUser(res.data.user.username, res.data.user.email, res.data.token);
          const cookies = new Cookies();
          cookies.set('trelloc token', res.data.token, { path: "/" });
        })
        .catch(err => {
          console.log("Login error!");
        })
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
