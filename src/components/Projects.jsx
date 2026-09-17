import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink, FiFileText } from 'react-icons/fi'
import styles from './Projects.module.css'

const projects = [
  {
    title: 'River Basin Atlas',
    description: 'Delineated 220 river systems across Chure of Nepal using ALOS DEM + QGIS. Stream burning, terrain analysis, watershed classification. Built React web visualization app.',
    tech: ['QGIS', 'React', 'HTML/CSS'],
    category: 'Water Resources',
    links: { live: 'https://ajaybhattarai-123.github.io/River_Basin_Atlas/' },
  },
  {
    title: 'Bagmati River Basin Plan',
    description: 'Future water demand/supply scenarios to 2050. Climate change, irrigation, hydropower, drinking water analysis.',
    tech: ['Data Analysis', 'Modeling'],
    category: 'Water Resources',
    badge: 'In Progress',
  },
  {
    title: 'Groundwater Dynamics Research',
    description: 'Drivers of groundwater depletion: rainfall, tube wells, LULC change, policy. Spatio-temporal analysis using in-situ data. Sustainable groundwater management recommendations.',
    tech: ['Research', 'Spatio-temporal Analysis'],
    category: 'Water Resources',
    badge: 'Under Review',
  },
  {
    title: 'Road Design & Hydrology',
    description: 'Engineering surveys, alignment design, 3D visualization. Maximum drainage discharge calculation, retaining wall design. Grading & estimation for hydropower project.',
    tech: ['Civil 3D', 'SW-ROAD', 'AutoCAD'],
    category: 'Water Resources',
  },
  {
    title: 'Concrete Strength Prediction (ANN)',
    description: 'Fully connected ANN regression model, 7 mix-design parameters. Predicting compressive strength.',
    tech: ['PyTorch', 'Python', 'ANN', 'Streamlit'],
    category: 'ML/AI',
  },
  {
    title: 'Real-Time Bidirectional Vehicle Counting',
    description: 'YOLOv8 + ByteTrack, multi-class vehicle detection. Automated Excel data export.',
    tech: ['YOLOv8', 'Python', 'OpenCV'],
    category: 'ML/AI',
    links: { 
      github: 'https://github.com/ajaybhattarai-123/Automatic_Vehicle_Classification_-_Counting',
      docs: '/pdfs/Documentation_YOLO.pdf'
    },
  },
  {
    title: 'Structural Crack Detection (CNN)',
    description: 'Custom CNN, PyTorch, >98% accuracy binary classification. Non-destructive infrastructure surface assessment.',
    tech: ['PyTorch', 'Python', 'CNN'],
    category: 'ML/AI',
    links: {
      github: 'https://github.com/ajaybhattarai-123/CONCRETE_CRACK_DETECTION',
      docs: '/pdfs/Documentation_CNN.pdf'
    }
  }
]

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const categories = ['All', 'Water Resources', 'ML/AI']

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <div className="section-header">
          <span className="section-number">// 03. projects</span>
          <h2 className="section-title">Selected <span>Work</span></h2>
          <div className="section-divider" />
        </div>

        <div className={styles.filters}>
          {categories.map(cat => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${filter === cat ? styles.active : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className={styles.grid}>
          <AnimatePresence>
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={styles.card}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.folderIcon}>📁</div>
                  <div className={styles.links}>
                    {project.links?.github && (
                      <a href={project.links.github} target="_blank" rel="noreferrer" aria-label="GitHub Link">
                        <FiGithub />
                      </a>
                    )}
                    {project.links?.docs && (
                      <a href={project.links.docs} target="_blank" rel="noreferrer" aria-label="Documentation">
                        <FiFileText />
                      </a>
                    )}
                    {project.links?.live && (
                      <a href={project.links.live} target="_blank" rel="noreferrer" aria-label="External Link">
                        <FiExternalLink />
                      </a>
                    )}
                  </div>
                </div>

                <div className={styles.cardBody}>
                  <h3 className={styles.title}>
                    {project.title}
                    {project.badge && (
                      <span className={`tag ${styles.badge}`}>{project.badge}</span>
                    )}
                  </h3>
                  <p className={styles.description}>{project.description}</p>
                </div>

                <div className={styles.techList}>
                  {project.tech.map((t, idx) => (
                    <span key={idx}>{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
