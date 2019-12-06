import React from "react";
import "antd/dist/antd.css";
import Header from "../features/header/Header";
import { Layout } from "antd";
import Router from "../features/router/Router"

const layoutStyle = {
  backgroundColor: "black",
  minHeight: "100vh",
  fontFamily: "Helvetica",
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: "20px"
};

const contentStyle = {
  padding: "4px",
  backgroundColor: "black",
  height: "100%"
};

function App() {
  return (
    <div className="App">
      <Layout style={layoutStyle}>
        <Header />
        <Layout.Content style={contentStyle}>
          <Router />
        </Layout.Content>
      </Layout>
    </div>
  );
}

export default App;
