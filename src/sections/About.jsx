import { useReveal } from '../hooks/useReveal'
import styles from './About.module.css'

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" className={styles.about} ref={ref}>
      <div className="container">
        <div className={styles.layout}>
          {/* Left: image + ornament */}
          <div className={`${styles.visual} reveal-left`}>
            <div className={styles.imageWrap}>
              <img src="/me.png" alt="Avanish Grampurohit" className={styles.imagePlaceholder} />
              <div className={styles.imageFrame} />
              <div className={styles.badge}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2l2.09 5.26L18 8.27l-4 3.89.94 5.5L10 15l-4.94 2.66.94-5.5-4-3.89 5.91-.01z" fill="var(--gold)" />
                </svg>
                <span>Open to opportunities</span>
              </div>
            </div>
            <div className={styles.orb} />
          </div>

          {/* Right: text */}
          <div className={styles.text}>
            <p className={`section-label reveal delay-1`}>About Me</p>

            <h2 className={`reveal delay-2 ${styles.heading}`}>
              Teaching computers<br />
              to <em>see, read, decide</em>.
            </h2>

            <p className={`reveal delay-3 ${styles.para}`}>
              I'm an ML engineer and researcher with a background in computer vision, NLP, and deep learning. I've spent two years at Penn State training models on hundreds of hours of video data and millions of social media posts — and turning those findings into real systems
            </p>

            <p className={`reveal delay-4 ${styles.para}`}>
              Based in India, My work lives at the edge of research and engineering, where a well-trained model meets a well-built product.
            </p>

            <div className={`reveal delay-5 ${styles.details}`}>
              {[
                { label: 'Location', value: 'Bengaluru, Karnataka' },
                { label: 'Education', value: 'B.S Computer Science, Penn State' },
                { label: 'Languages', value: 'English, Hindi, Kannada' },
                { label: 'Availability', value: 'Freelance, Full-time and Consultations' },
              ].map((d) => (
                <div key={d.label} className={styles.detail}>
                  <span className={styles.detailLabel}>{d.label}</span>
                  <span className={styles.detailValue}>{d.value}</span>
                </div>
              ))}
            </div>

            <a href="/resumelatest.pdf" className={`reveal delay-6 ${styles.resumeLink}`} data-hover>
              Download Résumé
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 2v8M3 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
