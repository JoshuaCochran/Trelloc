import React from "react";
import { Form, Icon, Input, Button } from "antd";
import { Link } from "react-router-dom";

const formStyle = {
  borderRadius: "3px",
  backgroundColor: "white",
  minWidth: "250px",
  width: "20vw",
  margin: "auto",
  marginTop: "20vh",
  padding: "4px 8px"
};

const inputStyle = {
  marginBottom: "4px",
  marginTop: "4px"
}

const RegistrationFormComponent = ({ onSubmit, form }) => {
  const { getFieldDecorator } = form;

  const compareToFirstPassword = (rule, value, callback) => {
    if (value && value !== form.getFieldValue("password")) {
      callback("Passwords must match!");
    } else {
      callback();
    }
  };

  const validateToNextPassword = (rule, value, callback) => {
    if (value) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };

  return (
    <Form onSubmit={onSubmit} className="login-form" style={formStyle}>
      <Form.Item>
        <h1
          style={{ textAlign: "center", marginTop: "4px", marginBottom: "0px" }}
        >
          Register for a Trelloc Account
        </h1>
      </Form.Item>
      <Form.Item style={inputStyle}>
        {getFieldDecorator("username", {
          rules: [{ required: true, message: "Please input your username!" }]
        })(
          <Input
            prefix={<Icon type="user" style={{ color: "rgba(0, 0, 0, .25" }} />}
            placeholder="Username"
          />
        )}
      </Form.Item>
      <Form.Item style={inputStyle}>
        {getFieldDecorator("email", {
          rules: [
            { type: "email", message: "Please input a valid email!" },
            { required: true, message: "Please input your email!" }
          ]
        })(
          <Input
            prefix={<Icon type="mail" style={{ color: "rgba(0, 0, 0, .25" }} />}
            placeholder="Email"
          />
        )}
      </Form.Item>
      <Form.Item style={inputStyle}>
        {getFieldDecorator("password", {
          rules: [
            { required: true, message: "Please input your password!" },
            { validator: validateToNextPassword }
          ]
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            type="password"
            placeholder="Password"
          />
        )}
      </Form.Item>
      <Form.Item style={inputStyle}>
        {getFieldDecorator("confirm password", {
          rules: [
            { required: true, message: "Please confirm your password!" },
            {
              validator: compareToFirstPassword
            }
          ]
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            type="password"
            placeholder="Confirm password"
          />
        )}
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Register
        </Button>
        <Link to={"/user/login"} style={{marginLeft: "8px"}}> or Log in</Link>
      </Form.Item>
    </Form>
  );
};

const RegistrationForm = Form.create({ name: "registration_form" })(
  RegistrationFormComponent
);

export default RegistrationForm;
