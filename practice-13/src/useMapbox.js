import { useLayoutEffect } from "react";
import mapboxgl from "mapbox-gl";

export default function useMapbox(containerRef) {
  mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

  useLayoutEffect(() => {
    const map = new mapboxgl.Map({
      container: containerRef.current,
      style: "mapbox://styles/mapbox/dark-v10",
      center: [37.61192, 55.76199],
      zoom: 10,
    });
  }, []);
}
