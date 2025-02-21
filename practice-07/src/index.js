import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import mapboxgl from "mapbox-gl";
import "./styles.css";

function App() {
  const [marker, setMarker] = useState(null);
  const [shop, setShop] = useState(null);
  const [map, setMap] = useState(null);

  mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

  const stores = {
    km20: [37.610641, 55.761994],
    belief: [37.601152, 55.733396],
    brandshop: [37.616812, 55.767839],
  };

  useEffect(() => {
    const newMap = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/dark-v10",
      center: [37.610641, 55.761994],
      zoom: 10,
    });

    setMap(newMap);

    const startMarker = new mapboxgl.Marker()
      .setLngLat([37.6173, 55.7558])
      .addTo(newMap);

    setMarker(startMarker);

    return () => newMap.remove();
  }, []);

  useEffect(() => {
    if (!map || !shop || !stores[shop]) return;

    if (marker) {
      marker.remove();
    }

    const newMarker = new mapboxgl.Marker().setLngLat(stores[shop]).addTo(map);

    setMarker(newMarker);
    map.flyTo({ center: stores[shop], zoom: 12 });
  }, [shop, map]);

  function handleShopSelect(e) {
    setShop(e.target.value);
  }

  return (
    <>
      <div className="map-overlay">
        <h3>Выберите магазин: </h3>
        <select id="shopSelect" onChange={handleShopSelect}>
          <option value="">Выберите...</option>
          <option value="km20">KM20</option>
          <option value="belief">BELIEF</option>
          <option value="brandshop">BRANDSHOP</option>
        </select>
      </div>
      <div id="map" style={{ width: "100%", height: "500px" }}></div>
    </>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
