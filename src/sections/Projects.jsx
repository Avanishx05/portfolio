import { useReveal } from '../hooks/useReveal'
import styles from './Projects.module.css'

const projects = [
  {
    num: '01',
    name: 'AR-Cooking App for Snap Spectacles',
    category: 'AR Application',
    desc: 'Achieved 2nd place at HackPSU Snap AR Challenge by building a recipe-generation app integrating Snap Lens Studio assets and LLMs to deliver real-time, interactive cooking instructions, streamlining the user experience.',
    tech: ['Lens Studio', 'typescript', 'Open AI LLM'],
    color: '#7c3aed',
    code: 'https://github.com/Avanishx05/AR-Recipie-Consultatnt',
    featured: true,
  },
  {
    num: '02',
    name: 'Nutrition Tracking Web App',
    category: 'Web Application',
    desc: 'Built a full-stack Nutrition Web App using ReactJS, C# and MySQL to track nutrition, offering features like calorie tracking, fitness suggestions, and CRUD operations, with a Python script to populate test data for system validation.',
    tech: ['ReactJS', 'C#', 'MySql', 'Python'],
    color: '#a78bfa',
    code: 'https://github.com/ThomasWatson123/MealManagementApp',
    featured: true,
  },
  {
    num: '03',
    name: 'CCTV based Home Security Software',
    category: 'Deep learning and Security',
    desc: 'Developed a real-time CCTV security system using machine learning and computer vision, integrating OpenCV, Mediapipe, and Face-Recognition API to track and register faces and actions in a CSV database, with a 95%-accurate neural network to detect suspicious behavior and enhance home security.',
    tech: ['Python', 'TensorFlow', 'Pandas', 'Numpy', 'Mediapipe', 'OpenCV', 'RESTful API'],
    color: '#f59e0b',
    featured: false,
  },
  
  {
    num: '04',
    name: 'Malloc Lab',
    category: 'Systems Programming',
    desc: 'Built a dynamic memory allocator in C implementing malloc, realloc, and free with full heap management. Used a best-fit allocation strategy with free block coalescing to minimize fragmentation, achieving memory utilization and throughput comparable to glibc\'s native allocator. Built as part of an OS course, one of those projects that makes you genuinely appreciate what happens a layer below the code you normally write.',
    tech: ['C', 'Systems Programming', 'Memory Management', 'OS'],
    code: 'https://github.com/ThomasWatson123/MealManagementApp',
    color: '#f59e0b',
    featured: false,
  },
  
]

export default function Projects() {
  const ref = useReveal()

  return (
    <section id="projects" className={styles.projects} ref={ref}>
      <div className="container">
        <div className={`reveal ${styles.header}`}>
          <p className="section-label">Projects</p>
          <h2 className={styles.heading}>Selected work</h2>
        </div>

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <div
              key={project.name}
              className={`reveal delay-${i + 1} ${styles.card} ${project.featured ? styles.featured : ''}`}
              data-hover
            >
              <div className={styles.cardTop}>
                <span className={styles.num}>{project.num}</span>
                <div className={styles.links}>
                  <a href={project.code} className={styles.iconLink} aria-label="View code" data-hover>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                  </a>
                  <a href={project.link} className={styles.iconLink} aria-label="View live" data-hover>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className={styles.glow} style={{ background: `radial-gradient(circle at 30% 50%, ${project.color}20 0%, transparent 60%)` }} />

              <h3 className={styles.name}>{project.name}</h3>
              <p className={styles.category}>{project.category}</p>
              <p className={styles.desc}>{project.desc}</p>

              <div className={styles.tech}>
                {project.tech.map((t) => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
