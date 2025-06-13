import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  useEffect(() => {
    // Coordinates of your hotel
    const hotelLat = 23.8144;
    const hotelLng = 90.4115;

    // Initialize the map
    const map = L.map("map").setView([hotelLat, hotelLng], 15);

    // Add OpenStreetMap tiles
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    // Add a marker
    L.marker([hotelLat, hotelLng])
      .addTo(map)
      .bindPopup("🏨 Your Hotel Name")
      .openPopup();

    // Cleanup on unmount
    return () => map.remove();
  }, []);

  return (
    <div
      id="map"
      style={{ height: "500px", width: "100%", borderRadius: "12px" }}
    />
  );
};

export default Map;
