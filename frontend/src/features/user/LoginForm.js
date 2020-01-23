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

const LoginFormComponent = ({ onSubmit, form }) => {
  const { getFieldDecorator } = form;

  return (
    <Form onSubmit={onSubmit} className="login-form" style={formStyle}>
      <Form.Item>
        <h1
          style={{ textAlign: "center", marginTop: "4px", marginBottom: "0px" }}
        >
          Log in to Trelloc
        </h1>
      </Form.Item>
      <Form.Item>
        {getFieldDecorator("email", {
          rules: [{ required: true, message: "Please input your email!" }]
        })(
          <Input
            prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Email"
          />
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator("password", {
          rules: [{ required: true, message: "Please input your password!" }]
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            type="password"
            placeholder="Password"
          />
        )}
      </Form.Item>
      <Form.Item>
        <Link to={"/user/forgotpass/"} style={{ marginRight: "4px" }}>
          Forgot password
        </Link>
        <Link to={"/user/register/"} style={{ marginLeft: "4px" }}>
          Register
        </Link>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};

const LoginForm = Form.create({ name: "login_form" })(LoginFormComponent);

export default LoginForm;
