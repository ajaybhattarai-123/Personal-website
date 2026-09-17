import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiExternalLink } from 'react-icons/fi'
import styles from './Experience.module.css'

const experiences = [
  {
    role: 'Research Assistant — Bagmati River Basin Plan (ADB & WECS)',
    company: 'Center for Applied Research and Development (CARD)',
    location: 'Tribhuvan University, Nepal',
    date: 'January 2026 - Present',
    description: [
      'Assisting in the design of future basin-wide water development scenarios to establish a national water security strategy updated for the year 2050.',
      'Processing climate, population, hydropower, and irrigation data and projecting future water demand under different scenarios.',
      'Contributing to water balance and demand analysis for irrigated agriculture and drinking water to evaluate future climate change impacts.'
    ]
  },
  {
    role: 'Research Assistant — Chure Region River System Atlas (PCTMCDB)',
    company: 'Center for Applied Research and Development (CARD)',
    location: 'Tribhuvan University, Nepal',
    date: 'January 2026 - Present',
    description: [
      'Delineated and classified 220 hydrologically consistent river systems (32 watersheds and 188 sub-watersheds) to support the national Chure Conservation Master Plan.',
      'Analyzed and corrected river network datasets using ALOS AW3D30 digital elevation models (DEM), stream burning techniques, and QGIS terrain analysis.',
      'Contributed to the technical writing of the final atlas report and prepared publication-ready maps.',
      'Developed a React-based web application to digitally visualize the project\'s river systems, maps, and spatial data.'
    ],
    link: 'https://ajaybhattarai-123.github.io/River_Basin_Atlas/'
  },
  {
    role: 'Founder & CEO (CADVERSE) | Engineering Software Instructor',
    company: 'CADVERSE (Software Training Institute), GyanHub Academy, Sikaune EduTech, Universal Engineering College',
    location: 'Nepal',
    date: 'October 2023 - Present',
    description: [
      'Trained 500+ students and professionals in AutoCAD, Revit, SW-DTM, and Google Earth Pro from basic to advanced levels across multiple institutions.',
      'Taught comprehensive modules on contour creation, spatial data collection, and road alignment design.',
      'Developed and currently delivering an online/recorded curriculum for Engineering Applied Mechanics and Engineering Drawings.'
    ]
  }
]

export default function Experience() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="experience" className={styles.experience} ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-number">// 02. experience</span>
          <h2 className="section-title">Professional <span>Experience</span></h2>
          <div className="section-divider" />
        </motion.div>

        <div className={styles.timeline}>
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className={styles.timelineItem}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <div className={styles.timelineDot} />
              <div className={styles.timelineContent}>
                <div className={styles.timelineHeader}>
                  <h3 className={styles.role}>{exp.role}</h3>
                  <span className={styles.date}>{exp.date}</span>
                </div>
                <div className={styles.company}>
                  {exp.company} <span className={styles.location}>— {exp.location}</span>
                </div>
                <ul className={styles.description}>
                  {exp.description.map((desc, j) => (
                    <li key={j}>{desc}</li>
                  ))}
                </ul>
                {exp.link && (
                  <a href={exp.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    <FiExternalLink /> View Related Project
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
