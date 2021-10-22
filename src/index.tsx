import React from "react";
import ReactDOM from "react-dom";
import Content from "./components/Context";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <div className="content-container">
      <Content />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
