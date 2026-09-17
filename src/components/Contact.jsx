import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMail, FiLinkedin, FiGithub, FiYoutube, FiMapPin } from 'react-icons/fi'
import styles from './Contact.module.css'

const contactInfo = [
  { icon: <FiMail />, label: 'Email', value: 'ajaybhattarai986@gmail.com', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=ajaybhattarai986@gmail.com' },
  { icon: <FiLinkedin />, label: 'LinkedIn', value: 'ajaybhattarai360', href: 'https://www.linkedin.com/in/ajaybhattarai360' },
  { icon: <FiYoutube />, label: 'YouTube', value: "Er. Ajay's Engineering Insights", href: 'https://www.youtube.com/@ajaybhattarai360' },
  { icon: <FiGithub />, label: 'GitHub', value: 'ajaybhattarai-123', href: 'https://github.com/ajaybhattarai-123' },
  { icon: <FiMapPin />, label: 'Location', value: 'Biratnagar, Koshi Province, Nepal' },
]

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="contact" className={styles.contact} ref={ref}>
      <div className="container">
        <motion.div
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-number" style={{ justifyContent: 'center' }}>// 08. contact</span>
          <h2 className="section-title">Get In <span>Touch</span></h2>
          <div className="section-divider mx-auto" style={{ margin: '1rem auto 2rem auto' }} />
        </motion.div>

        <div className={styles.wrapper}>
          <motion.div
            className={styles.infoCards}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {contactInfo.map((info, i) => (
              <div className={styles.card} key={i}>
                <div className={styles.icon}>{info.icon}</div>
                <div className={styles.details}>
                  <div className={styles.label}>{info.label}</div>
                  {info.href ? (
                    <a href={info.href} target="_blank" rel="noopener noreferrer" className={styles.value}>
                      {info.value}
                    </a>
                  ) : (
                    <div className={styles.value}>{info.value}</div>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            className={styles.ctaBox}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3>Ready to Collaborate?</h3>
            <p>
              Whether you're interested in research collaborations, engineering consultations, 
              or training programs, I'm always open to discussing new opportunities.
            </p>
            <div className={styles.ctaButtons}>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ajaybhattarai986@gmail.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <FiMail /> Say Hello
              </a>
              <a href="https://www.linkedin.com/in/ajaybhattarai360" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <FiLinkedin /> Connect
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
