import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import styles from './Contact.module.css'

const socials = [
  {
    name: 'GitHub',
    handle: '@Avanishx05',
    href: 'https://github.com/Avanishx05',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    handle: 'in/avanishmg',
    href: 'https://www.linkedin.com/in/avanishmg/',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
]

export default function Contact() {
  const ref = useReveal()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className={styles.contact} ref={ref}>
      <div className="container">
        <div className={styles.layout}>
          {/* Left */}
          <div className={styles.left}>
            <p className={`section-label reveal`}>Contact</p>
            <h2 className={`reveal delay-1 ${styles.heading}`}>
              Let's create<br />
              something <em>extraordinary</em>
            </h2>
            <p className={`reveal delay-2 ${styles.sub}`}>
              Whether you have a project in mind, an opportunity to discuss,
              or just want to connect — my inbox is always open.
            </p>

            <a href="mailto:avanishmg05@gmail.com" className={`reveal delay-3 ${styles.email}`} data-hover>
              avanishmg05@gmail.com
            </a>

            <div className={`reveal delay-4 ${styles.socials}`}>
              {socials.map((s) => (
                <a key={s.name} href={s.href} className={styles.social} data-hover>
                  <span className={styles.socialIcon}>{s.icon}</span>
                  <div>
                    <div className={styles.socialName}>{s.name}</div>
                    <div className={styles.socialHandle}>{s.handle}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className={`reveal delay-2 ${styles.formWrap}`}>
            {sent ? (
              <div className={styles.success}>
                <div className={styles.successIcon}>✦</div>
                <h3>Message sent!</h3>
                <p>I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.field}>
                  <label className={styles.label}>Name</label>
                  <input
                    className={styles.input}
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    required
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Email</label>
                  <input
                    className={styles.input}
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@company.com"
                    required
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Message</label>
                  <textarea
                    className={`${styles.input} ${styles.textarea}`}
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>
                <button type="submit" className={styles.submit} data-hover>
                  Send Message
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className={styles.footer}>
        <div className="container">
          <div className={styles.footerInner}>
            <span className={styles.footerName}>Avanish Grampurohit</span>
            <span className={styles.footerCopy}>© 2026 — Crafted with care</span>
            <span className={styles.footerBack}>
              <a href="#hero" data-hover>Back to top ↑</a>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
