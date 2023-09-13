import React from 'react'
import "./styles.css"
import { Logo, Menu } from '../../assets/svg'

export const MenuComponent = () => {
  return (
    <div className="header">
      <a href="#">
        <img src={Logo} />
      </a>
      <ul className="menu">
        <li className="menu-item"><a href="#!" className="menu-link">Home</a></li>
        <li className="menu-item"><a href="#!" className="menu-link">Service</a></li>
        <li className="menu-item"><a href="#!" className="menu-link">About</a></li>
        <li className="menu-item"><a href="#!" className="menu-link">Contact</a></li>
      </ul>
      <div className="header-right">
        <a href="#!" className="btn menu-link" style={{marginRight: 25}}>Login</a>
        <a href="#!" className="btn menu-link">
          <img src={Menu} width={25} />
        </a>
      </div>
    </div>
  )
}
