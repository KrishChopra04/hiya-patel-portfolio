import Image from 'next/image'
import Link from 'next/link'

export default function Untitled() {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'var(--black)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    }}>
      <Link href="/fine-art" style={{
        position: 'absolute',
        top: '24px',
        left: '32px',
        fontSize: '11px',
        color: 'rgba(255,255,255,0.5)',
        letterSpacing: '0.05em',
        zIndex: 10,
      }}>
        ← Fine Art
      </Link>
      <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
        <Image src="/images/3_untitledinner.png" alt="Untitled" fill style={{ objectFit: 'contain' }} priority />
      </div>
    </div>
  )
}