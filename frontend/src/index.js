import React from "react";
import { render } from "react-dom";
import { configureStore } from "redux-starter-kit";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./css/index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import rootReducer from "./reducers";

const store = configureStore({
  reducer: rootReducer
});

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
