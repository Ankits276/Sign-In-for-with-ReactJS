import React from "react";
import ReactDOM from "react-dom";
import RootSaga from "./Redux/Store";
import {Provider} from "react-redux";
import UserList from "./Component/UserListComp/index";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {User} from "./Component/Users/User";
import {Shortlisted} from "./Component/Shortlisted/Shorlisted";
import {Rejected} from "./Component/Rejected/Rejected";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={RootSaga}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path=":userId" element={<User />} />
          <Route path="/Shortlisted" element={<Shortlisted />} />
          <Route path="/Rejected" element={<Rejected />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
