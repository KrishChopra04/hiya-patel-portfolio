import Image from 'next/image'

export default function About() {
  return (
    <div style={{ padding: '64px 48px' }}>

      {/* TOP SECTION */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', marginBottom: '80px' }}>
        
        {/* LEFT -- TEXT */}
        <div>
          <p style={{ fontSize: '11px', color: 'var(--mid)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '32px' }}>
            About
          </p>
          <p style={{ fontSize: '24px', fontWeight: 300, lineHeight: 1.4, marginBottom: '40px' }}>
            Growing up in Mumbai, India, and now living in New York City, I've learned to read the stories embedded in the built environment.
          </p>
          <p style={{ fontSize: '11px', lineHeight: 1.9, color: 'var(--mid)', marginBottom: '24px' }}>
            As an architecture student at Parsons School of Design, I'm less interested in form for its own sake and more in what space actually does. How it shapes identity, reflects culture, and influences the way people live and interact.
          </p>
          <p style={{ fontSize: '11px', lineHeight: 1.9, color: 'var(--mid)' }}>
            My creative portfolio sits between critical and intuitive. I'm drawn to projects that engage real conditions — housing, adaptive reuse, systems that aren't perfect but are full of potential. Through my journey as a BFA Architectural Design student at Parsons, my work is shaped by the identities of the cities I've grown up in, questioning who gets represented and how. Across this broad range of focus, the driving question remains the same: what does a space do, and why does it matter.
          </p>
        </div>

        {/* RIGHT -- IMAGE */}
        <div style={{ position: 'relative', aspectRatio: '3/4' }}>
          <Image
            src="/images/hero_about.jpeg"
            alt="Hiya Patel"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>

      {/* FACTS */}
      <div style={{ borderTop: '1px solid var(--light)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '1px solid var(--light)', padding: '16px 0' }}>
          <p style={{ fontSize: '11px', color: 'var(--mid)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Currently</p>
          <p style={{ fontSize: '11px' }}>New York, NY</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '1px solid var(--light)', padding: '16px 0' }}>
          <p style={{ fontSize: '11px', color: 'var(--mid)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>From</p>
          <p style={{ fontSize: '11px' }}>Mumbai, India</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '1px solid var(--light)', padding: '16px 0' }}>
          <p style={{ fontSize: '11px', color: 'var(--mid)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Education</p>
          <p style={{ fontSize: '11px' }}>BFA Architectural Design, Parsons School of Design</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '1px solid var(--light)', padding: '16px 0' }}>
          <p style={{ fontSize: '11px', color: 'var(--mid)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Contact</p>
          <a href="mailto:hiyapatel0411@gmail.com" style={{ fontSize: '11px', color: 'var(--black)', borderBottom: '1px solid var(--black)', paddingBottom: '2px' }}>
            hiyapatel0411@gmail.com
          </a>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '16px 0' }}>
          <p style={{ fontSize: '11px', color: 'var(--mid)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Resume</p>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" style={{ fontSize: '11px', color: 'var(--black)', borderBottom: '1px solid var(--black)', paddingBottom: '2px' }}>
            Download
          </a>
        </div>
      </div>

    </div>
  )
}