import { ImageResponse } from 'next/og'
import fs from 'fs'
import path from 'path'

export const alt = 'Jaeco Real Estate Media — Homes that sell.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  const imgPath = path.join(process.cwd(), 'public/images/portfolio/interior/interior-06.png')
  const imgData = fs.readFileSync(imgPath)
  const base64 = `data:image/png;base64,${imgData.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          backgroundColor: '#0A0A0A',
          position: 'relative',
        }}
      >
        {/* Background photo */}
        <img
          src={base64}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.55,
          }}
        />

        {/* Dark overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.25)',
            display: 'flex',
          }}
        />

        {/* Top-right tagline */}
        <div
          style={{
            position: 'absolute',
            top: 48,
            right: 72,
            fontSize: 11,
            letterSpacing: '0.22em',
            color: 'rgba(255,255,255,0.38)',
            textTransform: 'uppercase',
            display: 'flex',
          }}
        >
          Photos that do it.
        </div>

        {/* Bottom headline */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '0 72px 64px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Thin rule above text */}
          <div
            style={{
              width: 48,
              height: 1,
              backgroundColor: 'rgba(255,255,255,0.25)',
              marginBottom: 28,
              display: 'flex',
            }}
          />
          <div
            style={{
              fontSize: 128,
              fontWeight: 900,
              color: 'white',
              lineHeight: 0.85,
              letterSpacing: '-4px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <span>Homes</span>
            <span>that sell.</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
