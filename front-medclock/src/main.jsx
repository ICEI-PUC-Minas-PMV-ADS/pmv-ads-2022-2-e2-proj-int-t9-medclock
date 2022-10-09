import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import ToolBar from "./components/toolbar";
import SideMenu from "./components/side-menu";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToolBar />
    <SideMenu />
  </React.StrictMode>
);
