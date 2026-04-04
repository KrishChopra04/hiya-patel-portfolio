'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const images = [
  '/images/pages/hook-1.png',
  '/images/pages/hook-2.png',
  '/images/pages/hook-3.png',
  '/images/pages/hook-4.png',
  '/images/pages/hook-5.png',
]

export default function HookForge() {
  const [lightbox, setLightbox] = useState<number | null>(null)
  const [zoomed, setZoomed] = useState(false)

  return (
    <div style={{ padding: '64px 48px' }}>

      <Link href="/architecture" style={{ fontSize: '11px', color: 'var(--mid)', letterSpacing: '0.05em' }}>
        ← Architecture
      </Link>

      <div style={{ borderTop: '1px solid var(--light)', marginTop: '32px', paddingTop: '24px', marginBottom: '48px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '16px' }}>
          <h1 style={{ fontSize: '11px', fontWeight: 400, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            The Hook Forge
          </h1>
        </div>
        <div style={{ display: 'flex', gap: '48px' }}>
          <div>
            <p style={{ fontSize: '11px', color: 'var(--mid)', marginBottom: '4px' }}>Location</p>
            <p style={{ fontSize: '11px' }}>Red Hook, Brooklyn, NY</p>
          </div>
          <div>
            <p style={{ fontSize: '11px', color: 'var(--mid)', marginBottom: '4px' }}>Programme</p>
            <p style={{ fontSize: '11px' }}>Incubator for Marine Materials and Skill Training</p>
          </div>
          <div>
            <p style={{ fontSize: '11px', color: 'var(--mid)', marginBottom: '4px' }}>Design Studio</p>
            <p style={{ fontSize: '11px' }}>4</p>
          </div>
          <div>
            <p style={{ fontSize: '11px', color: 'var(--mid)', marginBottom: '4px' }}>Professor</p>
            <p style={{ fontSize: '11px' }}>Martina Kohler</p>
          </div>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '2px',
      }}>
        {images.map((src, i) => (
          <div
            key={i}
            onClick={() => setLightbox(i)}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            style={{
              position: 'relative',
              aspectRatio: '18/7',
              cursor: 'pointer',
              overflow: 'hidden',
              background: 'var(--white)',
              transition: 'opacity 0.2s ease',
            }}
          >
            <Image
              src={src}
              alt={`Hook Forge page ${i + 1}`}
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        ))}
      </div>

      {lightbox !== null && (
  <div
    onClick={() => { setLightbox(null); setZoomed(false) }}
    style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,0.92)',
      zIndex: 200,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <button
      onClick={e => { e.stopPropagation(); setZoomed(false); setLightbox(i => i !== null && i > 0 ? i - 1 : i) }}
      style={{
        position: 'absolute',
        left: '32px',
        background: 'none',
        border: 'none',
        color: 'white',
        fontSize: '24px',
        cursor: 'pointer',
        padding: '16px',
      }}
    >
      ←
    </button>

    <div
      onClick={e => { e.stopPropagation(); setZoomed(z => !z) }}
      style={{
        position: 'relative',
        width: zoomed ? '160vw' : '80vw',
        height: zoomed ? '160vh' : '80vh',
        cursor: zoomed ? 'zoom-out' : 'zoom-in',
        transition: 'width 0.3s ease, height 0.3s ease',
        overflow: zoomed ? 'auto' : 'hidden',
      }}
    >
      <Image
        src={images[lightbox]}
        alt={`Dobbs Ferry page ${lightbox + 1}`}
        fill
        style={{ objectFit: 'contain' }}
      />
    </div>

    <button
      onClick={e => { e.stopPropagation(); setZoomed(false); setLightbox(i => i !== null && i < images.length - 1 ? i + 1 : i) }}
      style={{
        position: 'absolute',
        right: '32px',
        background: 'none',
        border: 'none',
        color: 'white',
        fontSize: '24px',
        cursor: 'pointer',
        padding: '16px',
      }}
    >
      →
    </button>

    <button
      onClick={e => { e.stopPropagation(); setZoomed(z => !z) }}
      style={{
        position: 'absolute',
        top: '32px',
        left: '32px',
        background: 'none',
        border: 'none',
        color: 'white',
        fontSize: '18px',
        cursor: 'pointer',
        padding: '8px',
      }}
    >
      {zoomed ? '−' : '+'}
    </button>

    <div style={{
      position: 'absolute',
      bottom: '32px',
      fontSize: '11px',
      color: 'rgba(255,255,255,0.5)',
      letterSpacing: '0.08em',
    }}>
      {lightbox + 1} / {images.length}
    </div>

    <button
      onClick={() => { setLightbox(null); setZoomed(false) }}
      style={{
        position: 'absolute',
        top: '32px',
        right: '32px',
        background: 'none',
        border: 'none',
        color: 'white',
        fontSize: '18px',
        cursor: 'pointer',
        padding: '8px',
      }}
    >
      ✕
    </button>
  </div>
)}

    </div>
  )
}