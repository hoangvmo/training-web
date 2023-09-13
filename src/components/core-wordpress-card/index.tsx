import React from 'react';
import "./styles.css";
import { CORE_WORDPRESS_DATA, LIST_SOLUTION } from '../../constants/data'
import { SolutionImage } from '../../assets/images';

export const CoreWordPressCard = () => {
  return (
    <>
      <div className="core-wp-card">
        {CORE_WORDPRESS_DATA.map((cardData, idx) => {
          return <div className="core-wp-card-container" key={`${cardData}${idx}`}>
            <img src={cardData.iconPath} width={70} />
            <p className="card-wp-title">{cardData.title}</p>
            <p className="card-wp-content">{cardData.content}</p>
          </div>
        })}
      </div>
      <div className="solution-container">
        <img src={SolutionImage} className="solution-img" />
        <div className="company-solution">
          <p className="company-text">Company’s vision</p>
          <p className="solution-title">IT solutions foryour business.</p>
          <p className="solution-content">Hub IT allows your business and technology computers to store, transmit, analyze, and manipulate big data in the digital world.</p>
          <button className="readmore-btn">
            <p className="text-btn">Read More</p>
          </button>
        </div>
      </div>
      <div className="solution-business-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: 711 }}>
        <p className="solution-title" style={{ textAlign: 'center' }}>IT solutions foryour business.</p>
        <p className="solution-content" style={{ textAlign: 'center' }}>Hub IT allows your business and technology computers to store, transmit, analyze,and manipulate big data in the digital world.</p>
      </div>

      <div className="core-wp-card">
        {LIST_SOLUTION.map((cardData, idx) => {
          return <div className="solution-item" key={`${cardData}${idx}`}>
            <img src={cardData.iconPath} width={361} className="card-solution-img" />
            <p className="solution-content">{cardData.content}</p>
          </div>
        })}
      </div>
    </>
  )
}
