import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import customHomeMarker from "../../../assets/home.png";

const Map = ({ lat, lng, title, propImg, price }) => {
  // console.log(lat, lng);

  useEffect(() => {
    // Create custom icon
    const homeIcon = L.icon({
      iconUrl: customHomeMarker,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -40],
    });

    // Initialize the map - Set a default View with Zoom
    const map = L.map("map").setView([lat, lng], 17); // (lat, lng, zoom)

    // Add OpenStreetMap tiles
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    // Markers

    L.marker([lat, lng], { icon: homeIcon })
      .addTo(map)
      .bindPopup(
        `
        <div style="width:250px; display:flex; justify-content: space-between; align-items: center; column-gap:10px;">
        <img style="width:50%; border-radius:8px" src=${propImg}/>
        
        <div style="width:50%">
        <h1 style=" font-size:15px; font-weight: 600;">${title}</h1>
        <h1 style="margin-top: 5px; font-size:14px; font-weight: 600; color:#7854F6"> ${price}  €</h1>
        </div> 
        </div>
        
        `
      )
      .openPopup();

    // Cleanup on unmount
    return () => map.remove();
  }, [lat, lng, title, price, propImg]);

  return (
    <div
      id="map"
      style={{
        height: "400px",
        width: "100%",
        borderRadius: "12px",
        zIndex: 0,
      }}
    />
  );
};

export default Map;
