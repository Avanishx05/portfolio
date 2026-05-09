import { useReveal } from '../hooks/useReveal'
import styles from './Skills.module.css'

const skillGroups = [
  {
    label: 'AI & Machine Learning',
    icon: '◈',
    skills: [
      { name: 'PyTorch', level: 95 },
      { name: 'Scikit-Learn', level: 90 },
      { name: 'HuggingFace', level: 88 },
      { name: 'Tensorflow', level: 75 },
    ],
  },
  {
    label: 'Computer Vision & NLP',
    icon: '◉',
    skills: [
      { name: 'OpenCV', level: 90 },
      { name: 'NLTK', level: 82 },
      { name: 'Yolo', level: 85 },
      { name: 'LLMs', level: 78 },
    ],
  },
  {
    label: 'Engineering and Web',
    icon: '◎',
    skills: [
      { name: 'Python/C/C++', level: 90 },
      { name: 'React.js/Node.js', level: 60 },
      { name: 'MongoDB/mySQL', level: 80 },
      { name: 'Linux', level: 90 },
    ],
  },
]

const tools = [
  'C#', 'Git', 'RestfulAPI', 'Rust', 'Matplotlib', 'Seaborn',
  'NumPy', 'Pandas', 'Vercel', 'Computational Biology', 'BeautifulSoup4', 'Selenium', 'Express.js',
]

export default function Skills() {
  const ref = useReveal()

  return (
    <section id="skills" className={styles.skills} ref={ref}>
      <div className="container">
        <div className={`reveal ${styles.header}`}>
          <p className="section-label">Skills</p>
          <h2 className={styles.heading}>Technical expertise</h2>
        </div>

        <div className={styles.groups}>
          {skillGroups.map((group, gi) => (
            <div key={group.label} className={`reveal delay-${gi + 2} ${styles.group}`}>
              <div className={styles.groupHeader}>
                <span className={styles.icon}>{group.icon}</span>
                <h3 className={styles.groupLabel}>{group.label}</h3>
              </div>
              <div className={styles.bars}>
                {group.skills.map((skill, si) => (
                  <div key={skill.name} className={styles.barItem}>
                    <div className={styles.barMeta}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillPct}>{skill.level}%</span>
                    </div>
                    <div className={styles.barTrack}>
                      <div
                        className={styles.barFill}
                        style={{
                          '--target': `${skill.level}%`,
                          animationDelay: `${0.1+gi * 0.2 + si * 0.1}s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={`reveal delay-5 ${styles.toolsSection}`}>
          <p className={styles.toolsLabel}>Also familiar with</p>
          <div className={styles.tools}>
            {tools.map((tool) => (
              <span key={tool} className={styles.tool} data-hover>{tool}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
