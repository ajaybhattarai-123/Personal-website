import { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import styles from './Navbar.module.css'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Resources', href: '#resources' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = document.querySelectorAll('section[id]')
      let current = 'home'
      sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 120) {
          current = section.getAttribute('id')
        }
      })
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      const offset = 70
      const top = target.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`} id="navbar">
      <div className={`container ${styles.navContainer}`}>
        <a
          href="#home"
          className={styles.logo}
          onClick={(e) => handleLinkClick(e, '#home')}
        >
          <span className={styles.logoCode}>&lt;</span>
          Ajay
          <span className={styles.logoDot}>.</span>
          <span className={styles.logoBhattarai}>Bhattarai</span>
          <span className={styles.logoCode}>/&gt;</span>
        </a>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
          {navLinks.map((link, i) => (
            <li key={i}>
              <a
                href={link.href}
                className={`${styles.navLink} ${activeSection === link.href.replace('#', '') ? styles.active : ''}`}
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                <span className={styles.navNum}>0{i + 1}.</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={styles.menuBtn}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className={styles.mobileOverlay} onClick={() => setMenuOpen(false)} />
      )}
    </nav>
  )
}
