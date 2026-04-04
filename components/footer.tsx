import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--light)',
      padding: '24px 48px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginTop: '120px',
    }}>
      <p style={{ fontSize: '11px', color: 'var(--mid)' }}>
        Hiya Patel
      </p>
      <div style={{ display: 'flex', gap: '32px' }}>
        <Link href="/about" style={{ fontSize: '11px', color: 'var(--mid)' }}>
          About
        </Link>
        <Link href="/contact" style={{ fontSize: '11px', color: 'var(--mid)' }}>
          Contact
        </Link>
      </div>
      <p style={{ fontSize: '11px', color: 'var(--mid)' }}>
        © 2026
      </p>
    </footer>
  )
}