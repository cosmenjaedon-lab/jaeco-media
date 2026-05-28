'use client'

import { useEffect, useRef } from 'react'

// Bear, Delaware (ZIP 19701)
const CENTER: [number, number] = [39.617, -75.688]
const RADIUS_MILES = 100
const RADIUS_METERS = RADIUS_MILES * 1609.344

const STATE_LABELS = [
  { code: 'DE', lat: 39.05, lng: -75.48 },
  { code: 'NJ', lat: 39.95, lng: -74.55 },
  { code: 'PA', lat: 40.25, lng: -76.00 },
  { code: 'MD', lat: 39.00, lng: -76.75 },
]

export default function ServiceAreaMap() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<{ remove: () => void } | null>(null)

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return

    // Inject Leaflet CSS once
    if (!document.querySelector('link[data-leaflet-css]')) {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
      link.setAttribute('data-leaflet-css', 'true')
      document.head.appendChild(link)
    }

    const init = async () => {
      const L = (await import('leaflet')).default

      if (!containerRef.current || mapRef.current) return

      const map = L.map(containerRef.current, {
        center: CENTER,
        zoom: 7,
        zoomControl: true,
        scrollWheelZoom: false,
        attributionControl: true,
      })

      mapRef.current = map

      // CartoDB Positron — clean, light, free, no API key
      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions" target="_blank">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19,
      }).addTo(map)

      // 100-mile radius circle
      const circle = L.circle(CENTER, {
        radius: RADIUS_METERS,
        color: '#0A0A0A',
        weight: 1.5,
        opacity: 0.45,
        fillColor: '#0A0A0A',
        fillOpacity: 0.06,
        dashArray: '7 5',
      }).addTo(map)

      // Fit map to show the full circle with padding
      map.fitBounds(circle.getBounds(), { padding: [24, 24] })

      // Center dot (Bear, DE)
      L.circleMarker(CENTER, {
        radius: 5,
        color: '#0A0A0A',
        fillColor: '#0A0A0A',
        fillOpacity: 1,
        weight: 0,
      })
        .bindTooltip('Bear, DE — Home Base', {
          permanent: false,
          direction: 'top',
          offset: [0, -6],
          className: 'leaflet-jaeco-tooltip',
        })
        .addTo(map)

      // State labels
      STATE_LABELS.forEach(({ code, lat, lng }) => {
        L.marker([lat, lng], {
          icon: L.divIcon({
            className: '',
            html: `<div style="font-size:10px;font-weight:800;letter-spacing:0.2em;color:#0A0A0A;opacity:0.35;white-space:nowrap;pointer-events:none;font-family:system-ui,sans-serif">${code}</div>`,
            iconAnchor: [16, 6],
          }),
          interactive: false,
        }).addTo(map)
      })
    }

    init()

    return () => {
      mapRef.current?.remove()
      mapRef.current = null
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="w-full border border-[#E0E0E0]"
      style={{ height: 'clamp(380px, 55vw, 560px)' }}
      aria-label="Interactive service area map showing 100-mile radius from Bear, Delaware"
    />
  )
}
