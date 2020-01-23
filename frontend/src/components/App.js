import React, { useEffect } from "react";
import "antd/dist/antd.css";
import Header from "../features/header/Header";
import { Layout } from "antd";
import LoggedInRouter from "../features/router/LoggedInRouter";
import LoggedOutRouter from "../features/router/LoggedOutRouter";
import { isLoggedIn, getAuthToken } from "../selectors/UserSelectors";
import { connect } from "react-redux";
import { addUser } from "../features/user/userSlice";
import axios from "axios";
import Cookies from "universal-cookie";

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

function App({ user, addUser }) {
  useEffect(() => {
    const cookies = new Cookies();
    const token = cookies.get("trelloc token");

    axios.defaults.baseURL = "https://warm-sea-05824.herokuapp.com/api/";
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    axios.defaults.headers.post["Content-Type"] =
      "application/x-www-form-urlencoded";

    if (token) {
      axios.get("users/me").then(res => {
        addUser(res.data.username, res.data.email, token);
      });
    }
  }, []);

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

const mapDispatch = { addUser };

export default connect(mapStateToProps, mapDispatch)(App);
