import React from 'react'
import { LearnMore } from '../../assets/svg';

export const DifferentItem = ({ icon, title }: { icon: string; title: string }) => {
  return (
    <div className="flex col items-start" style={{justifyContent: 'flex-start'}}>
      <div className="w-full ml-0 flex justify-start"><img src={icon} alt="different-icon" className="ml-0" /></div>
      <h2 className="text-bold mt-8">{title}</h2>
      <p className="content mt-2 text-left" style={{maxWidth: 260}}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
      <a href="#!" className="ml-0 mt-8"><img src={LearnMore} alt="learn-more-icon" /></a>
    </div>
  )
}
