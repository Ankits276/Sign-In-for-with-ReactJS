import React from "react";
import {Link} from "react-router-dom";

export const Shortlisted = () => {
  let getShortData = localStorage.getItem("selectedData");
  let parseData = JSON.parse(getShortData);
  return (
    <div>
      <Link to="/">
        <button>Back</button>
      </Link>
      {parseData.map((item: any) => {
        return <h3 key={item.id}>{item.name}</h3>;
      })}
    </div>
  );
};
