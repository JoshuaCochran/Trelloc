import React from "react";
import { Layout, Button } from "antd";
import { Link } from "react-router-dom";

const headerStyle = {
  backgroundImage:
    "url(https://a.trellocdn.com/prgb/dist/images/header-logo-2x.01ef898811a879595cea.png)",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  backgroundSize: "80px 30px",
  height: "40px",
  width: "100%",
  display: "flex",
  justifyContent: "flex-start",
  flexGrow: 1,
  padding: "4px",
  lineHeight: "0",
  maxHeight: "40px"
};

const leftButtonContainer = {
  display: "flex",
  justifyContent: "flex-start",
  flexGrow: 1
};

const rightButtonContainer = {
  display: "flex",
  justifyContent: "flex-end",
  flexGrow: 1
};

const buttonStyle = {
  display: "inline-block",
  position: "relative",
  marginRight: "4px",
  width: "32px",
  height: "32px",
  padding: 0
};

const Header = () => {
  return (
    <Layout.Header style={headerStyle}>
      <div style={leftButtonContainer}>
        <Link to="/">
          <Button style={buttonStyle} icon="home" />
        </Link>
        <Button style={buttonStyle} icon="file-search" />
        <Button style={buttonStyle} icon="search" />
      </div>
      <div style={rightButtonContainer}>
        <Button style={buttonStyle} icon="plus" />
        <Button style={buttonStyle} icon="bell" />
        <Button style={buttonStyle} shape="circle" icon="codepen" />
      </div>
    </Layout.Header>
  );
};

export default Header;
