import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import useMapbox from "./useMapbox.js";

function App() {
  const [random, setRandom] = useState(Math.random());

  useMapbox();

  return (
    <>
      <button
        className="ui-button"
        id="rerender"
        onClick={() => setRandom(Math.random())}
      >
        Ререндер!
      </button>
      <div id="map"></div>
    </>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);
