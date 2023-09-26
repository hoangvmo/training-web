import React from 'react';
import styles from './card.module.css'
import { FixIcon } from '../../assets/svg';

export const CardItem = () => {
  return (
    <div className={styles.body}>
      <img src={FixIcon} alt="fix-icon" />
      <h2>Core WordPress</h2>
      <p className="content">Hub IT allows your business and technology computers to store, analyze, and manipulate big data in the digital world.</p>
    </div>
  )
}
