import React, { useState, useRef } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import useMapbox from "./useMapbox.js";

function App() {
  const [random, setRandom] = useState(Math.random());
  const mapRef = useRef();
  useMapbox(mapRef);

  return (
    <div className="ui-container">
      <div id="map" ref={mapRef}></div>
      <button className="ui-button" onClick={() => setRandom(Math.random())}>
        Ререндер!
      </button>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
