import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMap, FiCode, FiFileText } from 'react-icons/fi'
import styles from './Skills.module.css'

const skillGroups = [
  {
    title: 'Engineering & GIS',
    icon: <FiMap />,
    skills: [
      { name: 'AutoCAD', level: 95 },
      { name: 'QGIS', level: 85 },
      { name: 'Civil 3D', level: 80 },
      { name: 'SW-DTM / SW-Road', level: 90 },
      { name: 'HEC-RAS', level: 75 },
      { name: 'Revit', level: 85 },
      { name: 'ETABS', level: 75 },
    ]
  },
  {
    title: 'Programming & AI',
    icon: <FiCode />,
    skills: [
      { name: 'Python', level: 90 },
      { name: 'PyTorch', level: 80 },
      { name: 'Pandas / NumPy', level: 85 },
      { name: 'Streamlit', level: 80 },
      { name: 'React / HTML / CSS', level: 70 },
    ]
  },
  {
    title: 'Documentation & Media',
    icon: <FiFileText />,
    skills: [
      { name: 'LaTeX (Overleaf)', level: 85 },
      { name: 'MS Office', level: 95 },
      { name: 'Canva', level: 90 },
    ]
  }
]

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })

  return (
    <section id="skills" className={styles.skills} ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-number">// 04. skills</span>
          <h2 className="section-title">Technical <span>Proficiency</span></h2>
          <div className="section-divider" />
        </motion.div>

        <div className={styles.grid}>
          {skillGroups.map((group, i) => (
            <motion.div
              key={i}
              className={styles.skillGroup}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <h3 className={styles.groupTitle}>
                <span className={styles.icon}>{group.icon}</span> {group.title}
              </h3>
              
              <div className={styles.skillList}>
                {group.skills.map((skill, j) => (
                  <div className={styles.skillItem} key={j}>
                    <div className={styles.skillHeader}>
                      <span className={styles.skillName}>{skill.name}</span>
                    </div>
                    <div className={styles.progressBar}>
                      <motion.div
                        className={styles.progressFill}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.3 + j * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
