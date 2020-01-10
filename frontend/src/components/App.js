import React from "react";
import "antd/dist/antd.css";
import Header from "../features/header/Header";
import { Layout } from "antd";
import LoggedInRouter from "../features/router/LoggedInRouter";
import LoggedOutRouter from "../features/router/LoggedOutRouter";
import { isLoggedIn } from "../selectors/UserSelectors";
import { connect } from "react-redux";

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

function App({ user }) {
  return (
    <div className="App">
      <Layout style={layoutStyle}>
        <Header />
        <Layout.Content style={contentStyle}>
          {isLoggedIn(user) ? <LoggedInRouter /> : <LoggedOutRouter />}
        </Layout.Content>
      </Layout>
    </div>
  );
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, null)(App);
