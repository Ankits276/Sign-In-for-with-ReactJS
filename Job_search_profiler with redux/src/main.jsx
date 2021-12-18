import React from "react";
import ReactDOM from "react-dom";
import RootSaga from "../src/Redux/Store";
import {Provider} from "react-redux";
import UserList from "./Component/UserListComp/index";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={RootSaga}>
      <UserList />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
