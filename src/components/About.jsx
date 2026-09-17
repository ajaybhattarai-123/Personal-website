import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from './About.module.css'

const interests = [
  'Hydrological Modeling',
  'Watershed Analysis',
  'Climate Change Impact',
  'GIS & Remote Sensing',
  'Water Quality Analysis',
  'ML in Hydrology',
  'Irrigation Engineering',
  'Sustainable Infrastructure',
  'Data-Driven Engineering',
  'Flood Risk Assessment',
]

const highlights = [
  { label: 'Degree', value: 'B.E. Civil Engineering', sub: 'IOE, Pulchowk Campus' },
  { label: 'Percentage', value: '77.55 / 100', sub: 'IOE Rank 174 — Top 1%' },
  { label: 'Location', value: 'Biratnagar, Nepal', sub: 'Koshi Province' },
  { label: 'Focus', value: 'Water Resources', sub: 'ML/DL Applications' },
]

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })

  return (
    <section id="about" className={styles.about} ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-number">// 01. about</span>
          <h2 className="section-title">About <span>Me</span></h2>
          <div className="section-divider" />
        </motion.div>

        <div className={styles.grid}>
          {/* Left — bio */}
          <motion.div
            className={styles.bioSide}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              I am a Civil Engineer with a strong academic background and research interests in{' '}
              <strong>watershed modeling</strong>, <strong>extreme events</strong>, and{' '}
              <strong>sustainable water resources management</strong>. I graduated from the{' '}
              Institute of Engineering (IOE), Pulchowk Campus — Nepal's most prestigious
              engineering institution — with a score of 77.55% and an IOE Rank of 174 (Top 1%).
            </p>
            <p>
              I am currently working as a <strong>Research Assistant at CARD, Tribhuvan University</strong>,
              contributing to national-level water resource projects including the{' '}
              <strong>Bagmati River Basin Plan</strong> (ADB &amp; WECS) and the{' '}
              <strong>Chure Region River System Atlas</strong>.
            </p>
            <p>
              I am highly motivated to apply advanced <strong>Machine Learning (ML)</strong> and{' '}
              <strong>Deep Learning (DL)</strong> to develop tools that solve complex hydrological
              and climate-driven water challenges. I also enjoy sharing knowledge and have trained{' '}
              <strong>500+ students</strong> across multiple institutions.
            </p>

            <div className={styles.interestTitle}>Areas of Interest</div>
            <div className={styles.tags}>
              {interests.map((tag, i) => (
                <motion.span
                  key={i}
                  className="tag"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.05 }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Right — info cards */}
          <motion.div
            className={styles.infoSide}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className={styles.highlightCards}>
              {highlights.map((h, i) => (
                <div className={styles.highlightCard} key={i}>
                  <span className={styles.highlightLabel}>{h.label}</span>
                  <span className={styles.highlightValue}>{h.value}</span>
                  <span className={styles.highlightSub}>{h.sub}</span>
                </div>
              ))}
            </div>

            <div className={styles.futureGoals}>
              <h3>Future Aspirations</h3>
              <p>
                Planning to pursue a <strong>Master's and Ph.D. in Civil / Water Resources Engineering</strong> in
                the United States. Goal: conduct meaningful research integrating ML/AI with
                hydrological systems to solve real-world water challenges and climate adaptation.
              </p>
              <div className={styles.goalTags}>
                <span className="tag tag-accent">MS in USA</span>
                <span className="tag tag-accent">Hydrology Research</span>
                <span className="tag tag-accent">ML + Water Systems</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
