import React from 'react'
import "./styles.css"
import { LIST_DIFFERENT, LIST_NEWS } from '../../constants/data'
import { LearnMore } from '../../assets/svg'
import { Avatar, ImonialsImage } from '../../assets/images'

export const DifferentComponent = () => {
  return (
    <>
      <div className="different-container">
        <p className="solution-title">Why our product are different</p>
        <div className="item-container">
          {LIST_DIFFERENT.map((item, idx) => {
            return (
              <div className="different-item" style={idx === 1 ? { marginLeft: 80, marginRight: 80 } : {}} key={`${item}${idx}`}>
                <img src={item.iconPath} width={64} className="different-icon" />
                <p className="item-title">{item.title}</p>
                <p className="item-content">{item.content}</p>
                <a href="#!" className="learn-more-link">
                  <img src={LearnMore} width={113} />
                </a>
              </div>
            )
          })}
        </div>
      </div>
      <div style={{ paddingLeft: '10%' }}>
        <img src={ImonialsImage} className="imonials-image" />
      </div>
      <div className="news-container">
        <p className="solution-title">Latest News</p>
        <div className="item-news-container">
          {LIST_NEWS.map((item, idx) => {
            return (
              <div className="item-news" key={`${item}${idx}`}>
                <img src={item.imagePath} className="news-img" />
                <p className="item-title title-mobile">{item.title}</p>
                <div className="infor-owner">
                  <a href="" className="news-owner">
                    <img src={Avatar} alt="avatar" width={21} height={21} />
                    <p className="full-name">Alexander Samokhin</p>
                  </a>
                  <p className="create-at">- July 18, 2018</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
