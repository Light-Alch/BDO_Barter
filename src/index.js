import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import storage from "./Storage";
//console.log(rose);
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
