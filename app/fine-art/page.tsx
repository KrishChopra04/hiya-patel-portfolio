'use client'

import Image from 'next/image'
import Link from 'next/link'

const projects = [
  { slug: 'dream', hero: '/images/1_dream.png' },
  { slug: 'vibrant', hero: '/images/2_vibrant.png' },
  { slug: 'untitled', hero: '/images/3_untitled.png' },
  { slug: 'strings', hero: '/images/4_strings.png' },
  { slug: 'mixed', hero: '/images/5_mixed.png' },
  { slug: 'krodh', hero: '/images/6_krodh_v2.png' },
]

export default function FineArt() {
  return (
    <div style={{ padding: '64px 48px' }}>
      <div style={{
        borderTop: '1px solid var(--light)',
        paddingTop: '24px',
        marginBottom: '48px',
      }}>
        <p style={{ fontSize: '11px', color: 'var(--mid)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          Fine Art
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '48px',
        padding: '0 80px',
      }}>
        {projects.map((p) => (
          <Link key={p.slug} href={`/fine-art/${p.slug}`}>
            <div
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              style={{
                position: 'relative',
                aspectRatio: '1/1',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'opacity 0.2s ease',
              }}
            >
              <Image
                src={p.hero}
                alt={p.slug}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}