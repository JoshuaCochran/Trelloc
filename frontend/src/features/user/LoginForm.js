import React, { useState } from "react";
import { Form, Icon, Input, Button } from "antd";

const LoginFormComponent = ({ onSubmit, form }) => {
  const { getFieldDecorator } = form;

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailChange = e => setEmail(e.target.value);
  const onPassChange = e => setPassword(e.target.value);

  return (
    <Form onSubmit={onSubmit} className="login-form">
      <Form.Item>
        {getFieldDecorator("username", {
          rules: [{ required: true, message: "Please input your username!" }]
        })(
          <Input
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Username"
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
        <div>
          <div>
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </div>
          <div>
            <a href="">Register!</a>
          </div>
        </div>
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
