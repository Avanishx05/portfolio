import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import styles from './Experience.module.css'

const jobs = [
  {
    company: 'Penn State University | Dr. Huijuan Xu',
    role: 'Independent Researcher',
    period: '2024 — 2025',
    location: 'State College, PA',
    desc: 'Benchmarked 5+ state-of-the-art action recognition models — including InternVideo2, ViViT, and VideoSwin — across 500+ hours of instructional video. Built a scraping pipeline with async functions and BeautifulSoup4 that cut data processing time by 85%.',
    tech: ['Python', 'PyTorch', 'OpenCV', 'NumPy', 'Pandas', 'Matplotlib'],
  },
  {
    company: 'Reasearch Assistant',
    role: 'Penn State University | Dr. Mahfuza Farooque',
    period: '2023 — 2024',
    location: 'State College, PA',
    desc: 'Analyzed 100M+ social media posts to study depression and mental health. Engineered an open-closed vocabulary NLP pipeline using BERT that hit 86% sentiment accuracy across 3 datasets. Built a content recommendation tool with 100% accuracy filtering sensitive content for at-risk users. Presented at the Sigma Xi conference.',
    tech: ['Python', 'NumPy', 'Pandas', 'Scikit-learn', 'Matplotlib', 'MySQL', 'NLTK', 'Microsoft PowerPoint'],
  },
  {
    company: 'ACM | PSU Chapter',
    role: 'President',
    period: '2023 — 2024',
    location: 'State College, PA',
    desc: 'Led a 15-member team to run 28+ technical workshops and 3 collaborative events per semester. Organized ICPC contest prep and managed end-to-end event logistics for one of Penn State\'s largest CS student organizations.',
    tech: ['Leadership', 'Team Management', 'Hiring', 'Event Ops'],
  },
  {
    company: 'ACM | PSU Chapter',
    role: 'DevPSU Captain',
    period: '2022 — 2023',
    location: 'State College, PA',
    desc: 'Assissted and help develop 28+ technical workshops per semester. Built and taught students new technologies and skills to provide an entry way to explore all possibilites in computer science from ML to Software development to making bots and games.',
    tech: ['Learning', 'Organization', 'Teaching', 'Troubleshooting'],
  },
]

export default function Experience() {
  const [active, setActive] = useState(0)
  const ref = useReveal()

  return (
    <section id="experience" className={styles.experience} ref={ref}>
      <div className="container">
        <div className={`reveal ${styles.header}`}>
          <p className="section-label">Experience</p>
          <h2 className={styles.heading}>Where I've worked</h2>
        </div>

        <div className={styles.layout}>
          {/* Sidebar tabs */}
          <div className={`reveal delay-2 ${styles.tabs}`}>
            {jobs.map((job, i) => (
              <button
                key={job.company}
                className={`${styles.tab} ${active === i ? styles.tabActive : ''}`}
                onClick={() => setActive(i)}
                data-hover
              >
                <span>{job.company}</span>
                <span className={styles.tabPeriod}>{job.period}</span>
              </button>
            ))}
            <div className={styles.tabIndicator} style={{ top: `${active * 80}px` }} />
          </div>

          {/* Content panel */}
          <div className={`reveal delay-3 ${styles.panel}`}>
            {jobs.map((job, i) => (
              <div
                key={job.company}
                className={`${styles.entry} ${active === i ? styles.entryActive : ''}`}
              >
                <div className={styles.roleRow}>
                  <h3 className={styles.role}>{job.role}</h3>
                  <span className={styles.at}>@</span>
                  <span className={styles.company}>{job.company}</span>
                </div>

                <div className={styles.meta}>
                  <span>{job.period}</span>
                  <span className={styles.metaDot}>·</span>
                  <span>{job.location}</span>
                </div>

                <p className={styles.desc}>{job.desc}</p>

                <div className={styles.tech}>
                  {job.tech.map((t) => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
