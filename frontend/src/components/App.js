import React from "react";
import "antd/dist/antd.css";
import ListList from "../features/lists/ListList";
import { Layout, Icon, Button } from "antd";

const { Header, Footer, Sider, Content } = Layout;

const layoutStyle = {
  backgroundColor: "black",
  minHeight: "100vh",
  fontFamily: "Helvetica",
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: "20px"
};

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

const contentStyle = {
  padding: "4px",
  backgroundColor: "black",
  height: "100%"
};

const buttonStyle = {
  display: "inline-block",
  position: "relative",
  marginRight: "4px",
  width: "32px",
  height: "32px",
  padding: 0
};

function App() {
  return (
    <div className="App">
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>
          <div style={leftButtonContainer}>
            <Button style={buttonStyle} icon="home" />
            <Button style={buttonStyle} icon="file-search" />
            <Button style={buttonStyle} icon="search" />
          </div>
          <div style={rightButtonContainer}>
            <Button style={buttonStyle} icon="plus" />
            <Button style={buttonStyle} icon="bell" />
            <Button style={buttonStyle} shape="circle" icon="codepen" />
          </div>
        </Header>
        <Content style={contentStyle}>
          <ListList />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
