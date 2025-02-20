import { useLayoutEffect } from "react";
import mapboxgl from "mapbox-gl";

export default function useMapbox(
  container = "map",
  center = [37.61192, 55.76199],
  zoom = 10
) {
  mapboxgl.accessToken =
    "pk.eyJ1IjoiYm9vYW5kcmV3IiwiYSI6ImNrd3M2ZGF1YzBhcDEyb21obzUwcDlvNXMifQ.q0NAPJB4RMgRRI8Fi9PWZg";

  useLayoutEffect(() => {
    const map = new mapboxgl.Map({
      container: container,
      style: "mapbox://styles/mapbox/dark-v10",
      center: center,
      zoom: zoom,
    });
    return () => map.remove();
  }, []);
}
