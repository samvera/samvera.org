import Map from "./leaflet-map/Map";
import React from "react";

const DEFAULT_CENTER = [38.907132, -77.036546];

const PartnersMap = ({ partners }) => {
  if (partners.length === 0) return;

  return (
    <>
      <Map width="800" height="400" center={DEFAULT_CENTER} zoom={3}>
        {({ TileLayer, Marker, Popup }) => (
          <>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {partners.map((partner) => (
              <Marker key={partner.id} position={[partner.lat, partner.lon]}>
                <Popup>
                  <strong>{partner.name}</strong>
                </Popup>
              </Marker>
            ))}
          </>
        )}
      </Map>
    </>
  );
};

export default PartnersMap;
