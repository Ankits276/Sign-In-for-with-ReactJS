import {useLocation} from "react-router";
import {Link} from "react-router-dom";

export const User = (props) => {
  const {user} = useLocation().state;
  console.log("LN6", user);
  const sList = [];
  const rList = [];

  const onSelect = () => {
    let getSelectdata = localStorage.getItem("selectedData");
    if (getSelectdata) {
      sList.push(...JSON.parse(getSelectdata));
    }
    sList.push(user);
    JSON.stringify(sList);
    localStorage.setItem("selectedData", JSON.stringify(sList));
  };
  const OnRejecting = () => {
    let getRejected = localStorage.getItem("rejectedData");
    if (getRejected) {
      rList.push(...JSON.parse(getRejected));
    }
    rList.push(user);
    JSON.stringify(rList);
    localStorage.setItem("rejectedData", JSON.stringify(rList));
  };

  return (
    <div className="user-main-container">
      <h1>{user.name}</h1>
      <img width="250px" height="250px" src={user.Image} alt="" />
      <h3>Id: {user.id}</h3>
      <div>
        <Link to="/" style={{width: "45%"}}>
          <button onClick={onSelect}>Selected</button>
        </Link>
        <Link to="/" state={{select: false, id: user.id}}>
          <button onClick={OnRejecting}>Reject</button>
        </Link>
        <Link to="/">
          <button>Home Page</button>
        </Link>
      </div>
    </div>
  );
};
