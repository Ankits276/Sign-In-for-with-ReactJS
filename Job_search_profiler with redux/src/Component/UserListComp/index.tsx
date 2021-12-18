import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUserListRequest} from "./action";
import "./index.css";
const UserList = () => {
  const Mystate = useSelector((state: any) => state.UserListReducer.responce);
  const dispatch = useDispatch();
  console.log("LN ", Mystate);
  useEffect(() => {
    dispatch(getUserListRequest(Mystate));
  }, []);
  return (
    <div>
      {Mystate.map((user: any) => {
        return (
          <div key={user.id}>
            <div key={user.id} className="card-container">
              <img width="150px" height="150px" src={user.Image} alt="" />
              <p>Id : {user.id}</p>
              <p>Name : {user.name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserList;
