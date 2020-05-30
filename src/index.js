import React from "react";
import ReactDom from "react-dom";
// Global styles must be before <App> so component styles override
import "./styles.scss";
import App from "./components/App";

const rootElement = document.getElementById("root");
ReactDom.render(<App />, rootElement);
