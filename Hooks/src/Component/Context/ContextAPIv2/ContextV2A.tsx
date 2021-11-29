import { Component } from "react";
import ContextV2B from "./Contextv2B";

export default class ContextV2A extends Component<any, any> {
  render() {
    return (
      <>
        <p>I'm a ContextV2A Class Component</p>
        <ContextV2B />
      </>
    );
  }
}
