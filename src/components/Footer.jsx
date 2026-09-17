import { FiLinkedin, FiGithub, FiYoutube, FiMail } from 'react-icons/fi'
import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.left}>
            <span className={styles.name}>Ajay Bhattarai</span>
            <span className={styles.separator}>|</span>
            <span className={styles.desc}>Civil Engineer & Water Resources Researcher</span>
          </div>

          <div className={styles.socials}>
            <a href="https://www.linkedin.com/in/ajaybhattarai360" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
            <a href="https://github.com/ajaybhattarai-123" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
            <a href="https://www.youtube.com/@ajaybhattarai360" target="_blank" rel="noreferrer" aria-label="YouTube"><FiYoutube /></a>
            <a href="mailto:ajaybhattarai986@gmail.com" aria-label="Email"><FiMail /></a>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>&copy; {year} Er. Ajay Bhattarai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
