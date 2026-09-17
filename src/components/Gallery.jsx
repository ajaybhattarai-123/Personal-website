import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX } from 'react-icons/fi'
import styles from './Gallery.module.css'

const galleryData = {
  software: [
    { src: '/GALLERY/AT-P-01.png', alt: 'AutoCAD Training at F-Hall, Pulchowk Campus' },
    { src: '/GALLERY/AT-P-02.png', alt: 'AutoCAD Training at F-Hall, Pulchowk Campus' },
    { src: '/GALLERY/AT-P-03.png', alt: 'AutoCAD Training at F-Hall, Pulchowk Campus' },
    { src: '/GALLERY/AT-P-04.png', alt: 'Completion of AutoCAD Training by PDSC and FSU Pulchowk' },
    { src: '/GALLERY/AT-P-06.png', alt: 'Organizing Inter-College AutoCAD Competition' },
    { src: '/GALLERY/AT-P-07.png', alt: 'SW-DTM and AutoCAD Training at Universal Engineering College' },
    { src: '/GALLERY/AT-P-08.png', alt: 'SW-DTM and AutoCAD Training at Universal Engineering College' },
    { src: '/GALLERY/AT-P-09.png', alt: 'SW-DTM and AutoCAD Training at Universal Engineering College' },
  ],
  field: [
    { src: '/GALLERY/SUR-01.png', alt: 'Final Year Project Team, Engineering Survey, Pilot Baba Ashram' },
    { src: '/GALLERY/SUR-02.png', alt: 'Road Section Khalchowk to Bhaisepati' },
    { src: '/GALLERY/SUR-04.png', alt: 'Hair pin bend, Road Section Khalchowk to Bhaisepati' },
    { src: '/GALLERY/SUR-06.png', alt: 'Engineering Survey Project, Khalchowk to Bhaisepati' },
    { src: '/GALLERY/SUR-07.png', alt: 'Engineering Survey Project, Khalchowk to Bhaisepati' },
    { src: '/GALLERY/SUR-08.png', alt: 'Topographical Survey, Kirtipur' },
    { src: '/GALLERY/SUR-09.png', alt: 'Topographical Survey, Kirtipur' },
    { src: '/GALLERY/SUR-03.png', alt: 'Crack in Masonry Building, Gundu, Bhaktapur' },
    { src: '/GALLERY/SUR-05.png', alt: 'Crack in Masonry Building, Gundu, Bhaktapur' },
  ],
  programs: [
    { src: '/GALLERY/SOE-01.png', alt: 'Elected as President of SOEES' },
    { src: '/GALLERY/SOE-02.png', alt: 'Anchoring and hosting a SOEES program' },
    { src: '/GALLERY/SOE-03.png', alt: 'Conclusion of the Art Competition' },
    { src: '/GALLERY/SOE-04.png', alt: 'Online Art Competition Organized by SOEES' },
    { src: '/GALLERY/SOE-05.png', alt: 'Prize Distribution ceremony' },
    { src: '/GALLERY/SOE-06.png', alt: 'Invited as a Guest in a SOEES Program' },
    { src: '/GALLERY/SOE-07.png', alt: 'Coordinated the Grand Saraswati Puja Celebration' },
    { src: '/GALLERY/SOE-08.png', alt: 'Honored with the Program Coordinator Award' },
  ],
  others: [
    { src: '/GALLERY/OT-01.png', alt: 'Presentation on Nepal’s Energy Scenario at LDC, Syuchatar' },
    { src: '/GALLERY/OT-03.png', alt: 'Syllabus Development for AutoCAD and Civil 3D at Sikaune' },
    { src: '/GALLERY/OT-05.png', alt: 'Field Visit to Tanahun Hydropower' },
    { src: '/GALLERY/OT-06.png', alt: 'Receiving the AutoCAD Competition Winner Award' },
    { src: '/GALLERY/RET-01.png', alt: 'Conducting a Retrofitting Workshop, Changunarayan-4' },
    { src: '/GALLERY/RET-02.png', alt: 'Training on Retrofitting RC Framed Structures' },
    { src: '/GALLERY/OT-11.png', alt: 'Field Visit to Tanahun Hydropower' },
    { src: '/GALLERY/OT-12.png', alt: 'Irrigation Field Visit at Bagmati River' },
    { src: '/GALLERY/RET-03.png', alt: 'Using Profoscope to Locate Reinforcing Steel' },
    { src: '/GALLERY/RET-05.png', alt: 'Conducting Concrete Strength Assessment with Rebound Hammer' },
    { src: '/GALLERY/RET-04.png', alt: 'Ultrasonic Pulse Velocity (UPV) Testing Techniques' },
    { src: '/GALLERY/OT-02.png', alt: 'Attended TEDx, Organized by IOE Pulchowk' },
    { src: '/GALLERY/OT-07.png', alt: 'Undergraduate Civil Engineering Student Group — 2076BCEAB' },
    { src: '/GALLERY/OT-10.png', alt: 'CESS Exhibition 2080' },
  ]
}

const tabs = [
  { id: 'software', label: 'Software Training' },
  { id: 'field', label: 'Field Visit & Survey' },
  { id: 'programs', label: 'Programs Organized' },
  { id: 'others', label: 'Others' },
]

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('software')
  const [lightboxImg, setLightboxImg] = useState(null)

  const currentImages = galleryData[activeTab]

  return (
    <section id="gallery" className={styles.gallery}>
      <div className="container">
        <div className="section-header text-center">
          <span className="section-number">// 07. gallery</span>
          <h2 className="section-title">Photo <span>Gallery</span></h2>
          <div className="section-divider mx-auto" style={{ margin: '1rem auto 2rem auto' }} />
        </div>

        <div className={styles.tabs}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`${styles.tabBtn} ${activeTab === tab.id ? styles.active : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <motion.div layout className={styles.masonryGrid}>
          <AnimatePresence mode="popLayout">
            {currentImages.map((img, i) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                key={img.src}
                className={styles.galleryItem}
                onClick={() => setLightboxImg(img)}
              >
                <img src={img.src} alt={img.alt} loading="lazy" />
                <div className={styles.overlay}>
                  <p>{img.alt}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            className={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImg(null)}
          >
            <button className={styles.closeBtn} onClick={() => setLightboxImg(null)}>
              <FiX />
            </button>
            <motion.div
              className={styles.lightboxContent}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={e => e.stopPropagation()}
            >
              <img src={lightboxImg.src} alt={lightboxImg.alt} />
              <p>{lightboxImg.alt}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
