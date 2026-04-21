"use client";

import type { GeoJsonObject } from "geojson";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { GeoJSON, MapContainer, Marker, Popup } from "react-leaflet";

/** Natural Earth 110m admin boundaries (public domain). */
const WORLD_GEOJSON_URL =
  "https://raw.githubusercontent.com/nvkelso/natural-earth-vector/v4.1.0/geojson/ne_110m_admin_0_countries.geojson";

const COUNTRY_STYLE = {
  fillColor: "#95D4FF",
  fillOpacity: 1,
  color: "#7ec4f0",
  weight: 0.6,
  opacity: 1,
} as const;

const markerIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const OFFICES = [
  { title: "Bangalore, India", lat: 12.9716, lng: 77.5946 },
  { title: "Singapore", lat: 1.3521, lng: 103.8198 },
  { title: "London, United Kingdom", lat: 51.5074, lng: -0.1278 },
  { title: "United States", lat: 38.9072, lng: -77.0369 },
] as const;

export default function GlobalPresenceMapInner() {
  const [worldData, setWorldData] = useState<GeoJsonObject | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(WORLD_GEOJSON_URL);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = (await res.json()) as GeoJsonObject;
        if (!cancelled) setWorldData(data);
      } catch {
        if (!cancelled) setLoadError("Could not load map data.");
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  if (loadError) {
    return (
      <div className="flex h-[420px] w-full items-center justify-center rounded-2xl bg-white font-['Plus_Jakarta_Sans'] text-sm text-[#0B1F2D]/60 sm:h-[480px] lg:h-[520px]">
        {loadError}
      </div>
    );
  }

  if (!worldData) {
    return (
      <div className="flex h-[420px] w-full items-center justify-center rounded-2xl bg-white font-['Plus_Jakarta_Sans'] text-sm text-[#0B1F2D]/50 sm:h-[480px] lg:h-[520px]">
        Loading map…
      </div>
    );
  }

  return (
    <MapContainer
      center={[22, 40]}
      zoom={2}
      minZoom={2}
      zoomControl={false}
      maxBounds={[
        [-85, -200],
        [85, 200],
      ]}
      maxBoundsViscosity={0.85}
      scrollWheelZoom
      className="isolate z-0 h-[420px] w-full rounded-2xl sm:h-[480px] lg:h-[520px]"
      style={{ background: "#ffffff" }}
    >
      <GeoJSON data={worldData} style={() => COUNTRY_STYLE} />
      {OFFICES.map((o) => (
        <Marker key={o.title} position={[o.lat, o.lng]} icon={markerIcon}>
          <Popup className="font-['Plus_Jakarta_Sans'] text-sm">
            {o.title}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
