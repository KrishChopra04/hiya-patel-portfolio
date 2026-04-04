export default function Contact() {
  return (
    <div style={{ padding: '64px 48px' }}>

      <div style={{ borderTop: '1px solid var(--light)', paddingTop: '24px', marginBottom: '80px' }}>
        <p style={{ fontSize: '11px', color: 'var(--mid)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          Contact
        </p>
      </div>

      <h1 style={{ fontSize: '48px', fontWeight: 300, lineHeight: 1.2, marginBottom: '80px' }}>
        Get in touch.
      </h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', maxWidth: '400px' }}>
        <div>
          <p style={{ fontSize: '11px', color: 'var(--mid)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' }}>
            Email
          </p>
          
            <a href="mailto:hiyapatel0411@gmail.com"
            style={{ fontSize: '14px', color: 'var(--black)', borderBottom: '1px solid var(--black)', paddingBottom: '2px' }}
          >
            hiyapatel0411@gmail.com
          </a>
        </div>

        <div>
          <p style={{ fontSize: '11px', color: 'var(--mid)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' }}>
            Location
          </p>
          <p style={{ fontSize: '14px' }}>New York, NY</p>
          <p style={{ fontSize: '14px' }}>Mumbai, India</p>
        </div>
      </div>

      <div style={{ marginTop: '120px', borderTop: '1px solid var(--light)', paddingTop: '24px' }}>
        <p style={{ fontSize: '11px', color: 'var(--mid)', letterSpacing: '0.02em' }}>
          Content shared for creative and portfolio purposes only.
        </p>
      </div>

    </div>
  )
}