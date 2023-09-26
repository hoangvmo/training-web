import React from 'react'
import styles from './solution.module.css';

export const SolutionItem = ({ imagePath }: { imagePath: string; }) => {
  return (
    <div className={styles.body}>
      <div className={styles.img_container}>
        <img src={imagePath} alt="solution-item" style={{ objectFit: 'cover', height: "100%" }} />
      </div>
      <p className={`content ${styles.description}`}>Hub IT allows your business and technology computers to store, transmit, analyze, and manipulate big data in the digital world.</p>
    </div>
  )
}
