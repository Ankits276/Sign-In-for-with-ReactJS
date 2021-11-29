import { Component } from "react";
import { ThemeV2Consumer } from "./Context/themeContextV2";
import ContextV2C from "./Contextv2C";

export default class ContextV2B extends Component<any, any> {
  render() {
    return (
      <>
        <ThemeV2Consumer>
          {(theme) => {
            return (
              <>
                <p>I'm a ContextV2B Class Component {theme}</p>
                <ContextV2C />
              </>
            );
          }}
        </ThemeV2Consumer>
      </>
    );
  }
}
