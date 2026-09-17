import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { FiLinkedin, FiGithub, FiYoutube, FiMail, FiArrowRight, FiDownload } from 'react-icons/fi'
import styles from './Hero.module.css'

const socials = [
  { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/ajaybhattarai360', label: 'LinkedIn' },
  { icon: <FiGithub />, href: 'https://github.com/ajaybhattarai-123', label: 'GitHub' },
  { icon: <FiYoutube />, href: 'https://www.youtube.com/@ajaybhattarai360', label: 'YouTube' },
  { icon: <FiMail />, href: 'https://mail.google.com/mail/?view=cm&fs=1&to=ajaybhattarai986@gmail.com', label: 'Email' },
]

export default function Hero() {
  const handleScroll = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 70
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section className={styles.hero} id="home">
      {/* Animated grid background */}
      <div className={styles.grid} aria-hidden="true" />

      {/* Glowing orbs */}
      <div className={styles.orb1} aria-hidden="true" />
      <div className={styles.orb2} aria-hidden="true" />

      <div className={`container ${styles.heroContent}`}>
        {/* Left — text */}
        <motion.div
          className={styles.textSide}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.p
            className={styles.greeting}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className={styles.promptSymbol}>$ </span>whoami
          </motion.p>

          <motion.h1
            className={styles.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            Ajay<br />
            <span className={styles.nameAccent}>Bhattarai</span>
          </motion.h1>

          <motion.div
            className={styles.designationsWrapper}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <span className={styles.promptSymbol}>&gt; </span>
            <div className={styles.designationList}>
              <span className={styles.designationItem}>Civil Engineer</span>
              <span className={styles.separator}>|</span>
              <span className={styles.designationItem}>Water Resources Researcher</span>
              <span className={styles.separator}>|</span>
              <span className={styles.designationItem}>Educator</span>
            </div>
          </motion.div>

          <motion.p
            className={styles.bio}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
          >
            Civil Engineer with research interests in <strong>watershed modeling</strong>,{' '}
            <strong>climate change impacts</strong>, and <strong>sustainable water resources</strong>.
            Applying ML &amp; DL to solve complex hydrological challenges.
          </motion.p>

          <motion.div
            className={styles.ctaRow}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <a
              href="#projects"
              className={`btn btn-primary ${styles.ctaBtn}`}
              onClick={(e) => handleScroll(e, '#projects')}
              id="hero-view-projects"
            >
              View Projects
              <FiArrowRight />
            </a>
            <a
              href="./pdfs/Ajay_Bhattarai_CV.pdf"
              className={`btn btn-outline ${styles.ctaBtn}`}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-download-cv"
            >
              <FiDownload />
              Download CV
            </a>
          </motion.div>

          <motion.div
            className={styles.socials}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95 }}
          >
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label={s.label}
                id={`hero-social-${s.label.toLowerCase()}`}
              >
                {s.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — profile photo */}
        <motion.div
          className={styles.imageSide}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          <div className={styles.imageWrapper}>
            <div className={styles.imageGlow} aria-hidden="true" />
            <div className={styles.imageRing} aria-hidden="true" />
            <img
              src="./HERO.png"
              alt="Ajay Bhattarai — Civil Engineer & Water Resources Researcher"
              className={styles.profileImg}
            />
          </div>

          {/* Mini info card */}
          <motion.div
            className={styles.infoCard}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2 }}
          >
            <span className={styles.infoLine}>
              <span className={styles.dot} />
              Available for opportunities
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Wave */}
      <div className={styles.wave} aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path
            d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
            fill="var(--secondary)"
          />
        </svg>
      </div>
    </section>
  )
}
