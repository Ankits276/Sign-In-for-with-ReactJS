import { useContext } from "react";
import { ThemeContextv2 } from "./Context/themeContextV2";
import { UserContextv2 } from "./Context/userContextv2";

const ContextV2D = () => {
  const _user = useContext(UserContextv2);
  const _theme = useContext(ThemeContextv2);
  return (
    <>
      <p>
        I'm a ContextV2D Func Component {_user} {_theme}
      </p>
    </>
  );
};

export default ContextV2D;
