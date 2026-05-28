import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0A0A0A',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Thin top accent line */}
        <div
          style={{
            position: 'absolute',
            top: 5,
            left: 7,
            right: 7,
            height: 1.5,
            background: 'rgba(255,255,255,0.35)',
          }}
        />
        {/* J lettermark */}
        <span
          style={{
            color: '#FFFFFF',
            fontSize: 20,
            fontWeight: 900,
            letterSpacing: '-0.04em',
            lineHeight: 1,
            fontFamily: 'serif',
          }}
        >
          J
        </span>
        {/* Thin bottom accent line */}
        <div
          style={{
            position: 'absolute',
            bottom: 5,
            left: 7,
            right: 7,
            height: 1.5,
            background: 'rgba(255,255,255,0.35)',
          }}
        />
      </div>
    ),
    { ...size }
  )
}
