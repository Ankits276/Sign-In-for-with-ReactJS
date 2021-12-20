import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {getUserListRequest} from "./action";
import "./index.css";
const UserList = () => {
  const Mystate = useSelector((state: any) => state.UserListReducer.responce);
  const dispatch = useDispatch();
  console.log("LN ", Mystate);

  useEffect(() => {
    dispatch(getUserListRequest(Mystate));
  }, []);

  const OnReset = () => {
    localStorage.clear();
  };
  return (
    <div style={{maxWidth: "70%", margin: "0 auto", textAlign: "center"}}>
      <Link to="/shortlisted" state={{name: "shortlisted"}}>
        <button>Shortlisted</button>
      </Link>
      <Link to="/Rejected" state={{name: "Rejected"}}>
        <button>Rejected</button>
      </Link>
      <button onClick={OnReset}>Reset</button>
      <div
        style={{
          width: "50%",
          display: "flex",
          justifyContent: "space-between",
          margin: "10px auto",
        }}
      ></div>
      <h3>Available Candidates</h3>
      <div className="container">
        {Mystate.map((user: any) => {
          return (
            <Link key={user.id} to={`${user.id}`} state={{user}}>
              <div key={user.id} className="card-container">
                <p>{user.id}</p>
                <img width="150px" height="150px" src={user.Image} alt="" />
                <h3>{user.name}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default UserList;
