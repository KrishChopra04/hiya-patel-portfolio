import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div style={{
      minHeight: 'calc(100vh - 80px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: '0 48px 64px',
    }}>
      <div style={{ flex: 1, position: 'relative', marginBottom: '48px' }}>
        <Image
          src="/images/hero.png"
          alt="Hiya Patel"
          fill
          style={{ objectFit: 'contain', objectPosition: 'left bottom' }}
          priority
        />
      </div>

      <h1 style={{
        fontSize: '11px',
        fontWeight: 300,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: 'var(--mid)',
        marginBottom: '16px',
      }}>
        Hiya Patel
      </h1>
      <p style={{
        fontSize: '32px',
        fontWeight: 300,
        lineHeight: 1.3,
        maxWidth: '600px',
        marginBottom: '48px',
      }}>
        Architecture Student.<br />
        Parsons School of Design, BFA, Architectural Design.
      </p>
      <div style={{ display: 'flex', gap: '32px' }}>
        <Link href="/architecture" style={{
          fontSize: '11px',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          borderBottom: '1px solid var(--black)',
          paddingBottom: '2px',
        }}>
          Architecture
        </Link>
        <Link href="/about" style={{
          fontSize: '11px',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: 'var(--mid)',
        }}>
          About
        </Link>
      </div>
    </div>
  )
}
