import { useEffect, useRef, useState } from 'react'
import { FiUsers, FiAward, FiBriefcase, FiYoutube } from 'react-icons/fi'
import styles from './StatsBar.module.css'

const stats = [
  { icon: <FiUsers />, value: 500, suffix: '+', label: 'Students Trained' },
  { icon: <FiAward />, value: 174, suffix: '', label: 'IOE Rank (Top 1%)' },
  { icon: <FiBriefcase />, value: 5, suffix: '+', label: 'Training Partners' },
  { icon: <FiYoutube />, value: 7500, suffix: '+', label: 'Content Followers' },
]

function AnimatedNumber({ value, suffix, run }) {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!run) return
    let start = 0
    const duration = 1800
    const steps = 60
    const increment = value / steps
    const interval = duration / steps
    const timer = setInterval(() => {
      start += increment
      if (start >= value) {
        setDisplay(value)
        clearInterval(timer)
      } else {
        setDisplay(Math.floor(start))
      }
    }, interval)
    return () => clearInterval(timer)
  }, [run, value])

  return <span>{display.toLocaleString()}{suffix}</span>
}

export default function StatsBar() {
  const [run, setRun] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setRun(true); observer.disconnect() } },
      { threshold: 0.4 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.statsBar} ref={ref} aria-label="Key statistics">
      <div className="container">
        <div className={styles.statsGrid}>
          {stats.map((stat, i) => (
            <div className={styles.statItem} key={i}>
              <span className={styles.statIcon}>{stat.icon}</span>
              <div className={styles.statNumber}>
                <AnimatedNumber value={stat.value} suffix={stat.suffix} run={run} />
              </div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
