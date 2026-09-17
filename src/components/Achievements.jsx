import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from './Achievements.module.css'

const achievements = [
  'IOE Rank 174 (Top 1%), 77.55/100',
  'Batch Topper: SEE (3.75 GPA) & Higher Secondary (3.59 GPA)',
  'Winner: 1st Inter-College AutoCAD Competition (awarded by Lalitpur Metro Mayor)',
  'President, Society of Eastern Engineering Students (SOEES) (July 2023 – July 2024)',
  'Languages: Nepali (Native), English (Fluent), Hindi (Conversational)'
]

export default function Achievements() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="achievements" className={styles.achievements} ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-number">// 06. achievements</span>
          <h2 className="section-title">Awards & <span>Honors</span></h2>
          <div className="section-divider" />
        </motion.div>

        <div className={styles.grid}>
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              className={styles.achievementItem}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <span className={styles.bullet}>▹</span>
              <p>{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
