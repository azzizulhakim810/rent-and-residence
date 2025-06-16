import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import customHomeMarker from "../../../assets/home.png";

const Map = ({ lat, lng, title, propImg, price }) => {
  useEffect(() => {
    // Coordinates of your places

    /*     const homeLat = 23.921683;
    const homeLng = 90.258871; */

    /*     const cafeLat = 23.91197;
    const cafeLng = 90.25432; */

    /*     const hospitalLat = 23.91652;
    const hospitalLng = 90.26822; */

    /*  const places = [
      {
        name: "My Sweet Home",
        position: [23.921683, 90.258871],
        type: "home",
      },
      {
        name: "Sena Cafe",
        position: [23.816, 90.4101],
        type: "cafe",
      },
      {
        name: "Sena Hospital",
        position: [23.91652, 90.26822],
        type: "hospital",
      },
    ]; */

    // Create custom icon
    const homeIcon = L.icon({
      iconUrl: customHomeMarker,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -40],
    });

    /*     const cafeIcon = L.icon({
      iconUrl: customCafeMarker,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -40],
    }); */

    /*     const hospitalIcon = L.icon({
      iconUrl: customHospitalMarker,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -40],
    }); */

    // Initialize the map
    const map = L.map("map").setView([lat, lng], 16); // (lat, lng, zoom)

    // Add OpenStreetMap tiles
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    // Markers

    /*     L.marker([cafeLat, cafeLng], { icon: cafeIcon })
      .addTo(map)
      .bindPopup("Sip & Free")
      .openPopup(); */

    /*     L.marker([hospitalLat, hospitalLng], { icon: hospitalIcon })
      .addTo(map)
      .bindPopup("Health Care")
      .openPopup(); */

    L.marker([lat, lng], { icon: homeIcon })
      .addTo(map)
      .bindPopup(
        `
        <div style="width:250px; display:flex; justify-content: space-between; align-items: center; column-gap:10px;">
        <img style="width:50%" src=${propImg}/>
        <div style="width:50%">
        <h1 style=" font-size:14px; font-weight: 600;">${title}</h1>
        <h1 style="margin-top: 5px; font-size:14px; font-weight: 600; color:#7854F6"> ${price}  €</h1>
        </div> 
        </div>
        
        `
      )
      .openPopup();

    /* places.forEach((place) => {
      let icon;

      if (place.type === "home") {
        icon = homeIcon;
      } else if (place.type === "cafe") {
        icon = cafeIcon;
      }

      L.maker(place.position, { icon })
        .addTo(map)
        .bindPopup(`<b>${place.name}</b>`);
    }); */

    // Cleanup on unmount
    return () => map.remove();
  }, [lat, lng, title, price, propImg]);

  return (
    <div
      id="map"
      style={{ height: "400px", width: "100%", borderRadius: "12px" }}
    />
  );
};

export default Map;
