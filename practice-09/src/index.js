import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Shop from "./shop";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Shop />
  </StrictMode>
);