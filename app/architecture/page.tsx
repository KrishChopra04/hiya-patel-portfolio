'use client'

import Link from 'next/link'
import Image from 'next/image'

const projects = [
  {
    slug: 'ecoweave',
    title: 'Ecoweave',
    location: 'Safford, Arizona',
    programme: 'Production and Residency',
    hero: '/images/ecoweave-hero.jpg',
  },
  {
    slug: 'dobbs-ferry',
    title: 'Dobbs Ferry Maritime Institute',
    location: 'Dobbs Ferry, NY',
    programme: 'Boat Building Academy and Residency',
    hero: '/images/dobbs-hero.jpg',
  },
  {
    slug: 'hook-forge',
    title: 'The Hook Forge',
    location: 'Red Hook, Brooklyn, NY',
    programme: 'Incubator for Marine Materials and Skill Training',
    hero: '/images/hook-hero.jpg',
  },
]

export default function Architecture() {
  return (
    <div style={{ padding: '64px 48px' }}>
      {projects.map((project) => (
        <section key={project.slug} style={{ marginBottom: '120px' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            borderTop: '1px solid var(--light)',
            paddingTop: '24px',
            marginBottom: '24px',
          }}>
            <h2 style={{
              fontSize: '11px',
              fontWeight: 400,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}>
              {project.title}
            </h2>
            <span style={{ fontSize: '11px', color: 'var(--mid)' }}>
              {project.location} — {project.programme}
            </span>
          </div>

          <Link href={`/architecture/${project.slug}`}>
            <div style={{ position: 'relative', width: '60%', aspectRatio: '16/9', cursor: 'pointer', overflow: 'hidden', margin: '0 auto' }}>
              <Image
                src={project.hero}
                alt={project.title}
                fill
                style={{ objectFit: 'cover', transition: 'opacity 0.3s ease' }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              />
            </div>
          </Link>
        </section>
      ))}
    </div>
  )
}
