import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
const Dashboard = () => {
  const [user, setuser] = useState("");
  const navigation = useNavigate();
  useEffect(() => {
    const currentdata = localStorage.getItem("current");

    console.log(currentdata);
    if (!currentdata) {
      navigation("/SignIn");
      return;
    }
    const pardata: any = JSON.parse(currentdata);
    console.log(pardata);
    setuser(pardata.username);
  }, []);

  const _Logouthandle = () => {
    localStorage.removeItem("current");
    navigation("/SignIn");
  };
  return (
    <div>
      <h1>Your successfully loged in as {user}</h1>
      <button onClick={_Logouthandle}>Logout</button>
    </div>
  );
};
export default Dashboard;
