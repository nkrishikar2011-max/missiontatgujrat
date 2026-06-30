import React from "react";
import ReactDOM from "react-dom/client";

import { TestProvider } from "./context/TestContext";

import App from "./App";

import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TestProvider>
      <App />
    </TestProvider>
  </React.StrictMode>
);