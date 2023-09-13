import React from 'react'
import { Banner } from '../../assets/images';
import "./styles.css";

export const BannerComponent = () => {
  return (
    <div className="banner">
      <img src={Banner} width="100%" />
      <div className="banner-content">
        <p className="title">The best IT servicefor your security</p>
        <p className="content">Hub IT allows your business and technology computers to store and manipulate big data in the digital world.</p>
        <div className="banner-footer">
          <button className="discover-btn">
            <p className="text-btn">DISCOVER HUB</p>
          </button>
          <a href="#!" className="hotline">Hotline: (733)865-5485</a>
        </div>
      </div>
    </div>
  )
}
