import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/Root";
import { ContextProvider } from "./components/Context";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
        <Root />
      </ContextProvider>
  </React.StrictMode>
);
