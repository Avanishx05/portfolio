import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const orbRef = useRef(null)

  useEffect(() => {
    const handleMouse = (e) => {
      if (!orbRef.current) return
      const x = (e.clientX / window.innerWidth - 0.5) * 30
      const y = (e.clientY / window.innerHeight - 0.5) * 30
      orbRef.current.style.transform = `translate(${x}px, ${y}px)`
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  return (
    <section id="hero" className={styles.hero}>
      {/* Ambient orbs */}
      <div className={styles.orbs} ref={orbRef}>
        <div className={styles.orb1} />
        <div className={styles.orb2} />
        <div className={styles.orb3} />
      </div>

      {/* Grid overlay */}
      <div className={styles.grid} />

      <div className={`container ${styles.content}`}>
        <div className={styles.badge}>
          <span className={styles.dot} />
          Available for work
        </div>

        <p className={styles.greeting}>Hello, I'm</p>

        <h1 className={styles.name}>
          <span className={styles.nameLine1}>Avanish</span>
          <span className={styles.nameLine2}>Grampurohit</span>
        </h1>

        <div className={styles.titleRow}>
          <div className={styles.divider} />
          <p className={styles.title}>AI/ML Research &amp; Software Engineer</p>
        </div>

        <p className={styles.bio}>
          Where research meets real-world engineering.<br/>
          Leveraging research to engineer projects that make impact
        </p>

        <div className={styles.actions}>
          <a href="#projects" className={styles.btnPrimary} data-hover>
            View Projects
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#contact" className={styles.btnSecondary} data-hover>
            Get in touch
          </a>
        </div>

        <div className={styles.stats}>
          {[
            { num: '2+', label: 'Research Projects' },
            { num: '28+', label: 'Workshops Led' },
            { num: '100M+', label: 'Data Points Analysed' },
          ].map((s) => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statNum}>{s.num}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.scrollHint}>
        <div className={styles.scrollLine} />
        <span>Scroll</span>
      </div>
    </section>
  )
}
