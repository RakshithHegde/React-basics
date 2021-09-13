import React, { createElement } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Hello(props) {
  console.log(props);
  return (
    <div>
      <h1>Welcome! {props.library}</h1>
    </div>
  );
}
ReactDOM.render(<Hello library="to react" />, document.getElementById("root"));
