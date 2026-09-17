import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiBook, FiMonitor, FiFileText, FiAward } from 'react-icons/fi'
import styles from './Resources.module.css'

const resources = [
  {
    title: 'AutoCAD Notes',
    description: 'Comprehensive guide for Beginners of AutoCAD.',
    icon: <FiFileText />,
    link: '/Autocad_Pdf.html',
    linkText: 'View Notes',
  },
  {
    title: 'Bimba Raag Book',
    description: 'A personal creative project typeset in LaTeX. Featuring custom graphics and dedicated to my beloved Father and Mother.',
    icon: <FiBook />,
    link: '/pdfs/01_Book_Raag.pdf',
    linkText: 'View PDF',
  },
]

export default function Resources() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="resources" className={styles.resources} ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-number">// 05. resources</span>
          <h2 className="section-title">Learning <span>Hub</span></h2>
          <div className="section-divider" />
          <p className="section-subtitle">Curated learning materials for engineering students and professionals.</p>
        </motion.div>

        <div className={styles.grid}>
          {resources.map((res, i) => (
            <motion.div
              key={i}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className={styles.icon}>{res.icon}</div>
              <h3 className={styles.title}>{res.title}</h3>
              <p className={styles.description}>{res.description}</p>
              <a href={res.link} target="_blank" rel="noopener noreferrer" className={`btn btn-outline ${styles.btn}`}>
                {res.linkText}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
