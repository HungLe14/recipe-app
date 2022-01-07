import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { RecipesProvider } from "./components/store/context";

ReactDOM.render(
  <React.StrictMode>
    <RecipesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RecipesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
