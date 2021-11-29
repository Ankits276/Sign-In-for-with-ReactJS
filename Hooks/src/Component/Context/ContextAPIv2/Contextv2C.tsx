import { Component } from "react";
import { ThemeV2Consumer } from "./Context/themeContextV2";
import { UserV2Consumer } from "./Context/userContextv2";
import ContextV2D from "./ContextV2D";

export default class ContextV2C extends Component<any, any> {
  render() {
    return (
      <>
        <UserV2Consumer>
          {(anything) => {
            return (
              <ThemeV2Consumer>
                {(theme) => {
                  return (
                    <>
                      <p>
                        I'm a ContextV2C Class Component {anything} {theme}
                      </p>
                      <ContextV2D />
                    </>
                  );
                }}
              </ThemeV2Consumer>
            );
          }}
        </UserV2Consumer>
      </>
    );
  }
}
