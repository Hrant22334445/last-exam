import React from 'react'
import styles from './AboutUs.module.css'

const AboutUs = () => {
  return (
    <div  className={styles.allAboutUs}>
        <div>
            <h1 className={styles.first}>Wellcome to Trello</h1>
        </div>
        <div className={styles.second}>
            This site was created as the latest exam in ACA React.js
        </div>
    </div>
  )
}

export default AboutUs