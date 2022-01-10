import React from "react";

export const Button = (props: any) => {
  const {lable, name, onClick} = props;

  return (
    <>
      <button onClick={onClick}>{name}</button>
    </>
  );
};
Button.defaultProps = {
  name: "Submit",
  lable: "Button",
};
export default Button;
