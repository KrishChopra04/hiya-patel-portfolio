'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home'},
  { href: '/architecture', label: 'Architecture' },
  { href: '/fine-art', label: 'Fine Art' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 100,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      padding: '24px 48px',
      background: 'var(--bg)',
      borderBottom: '1px solid var(--light)',
    }}>
      <Link href="/" style={{
        fontSize: '11px',
        fontWeight: 400,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
      }}>
        Hiya Patel
      </Link>

      <div style={{ display: 'flex', gap: '40px' }}>
        {links.map(({ href, label }) => (
          <Link 
            key={href} 
            href={href} 
            onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.1)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
            style={{
            fontSize: '11px',
            fontWeight: 300,
            letterSpacing: '0.05em',
            color: pathname === href ? 'var(--black)' : 'var(--mid)',
            borderBottom: pathname === href ? '1px solid var(--black)' : 'none',
            paddingBottom: '2px',
          }}
        >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  )
}