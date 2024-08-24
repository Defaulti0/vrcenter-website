import React from "react";
import ReactDOM from "react-dom/client";
import Homepage from "./pages/Homepage.js";
import "./css/index.css";

import { ThemeProvider } from "@material-tailwind/react";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Homepage />
    </ThemeProvider>
  </React.StrictMode>
);
