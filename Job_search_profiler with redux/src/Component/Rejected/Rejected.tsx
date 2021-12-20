import React from "react";
import {Link} from "react-router-dom";

export const Rejected = () => {
  let getShortData = localStorage.getItem("rejectedData");
  let parseData = JSON.parse(getShortData);
  return (
    <div>
      <Link to="/">
        <button>Back</button>
      </Link>
      {parseData.map((items: any) => {
        return <h3 key={items.id}>{items.name}</h3>;
      })}
    </div>
  );
};
