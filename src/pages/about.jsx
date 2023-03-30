import React from 'react'
import style from './about.module.css'
import advideo from '../../../../travel/videoo.mp4'



const About = () => {

  return (
    <div className={style.main}>
   
    <div  className={style.section}>
    <img src="https://free4kwallpapers.com/uploads/originals/2015/11/13/blue-curtain-wallpaper.jpg"/>
    </div>

  <div  className={style.section2}>
  <div className={style.vidd}>
  <video id="vidad"  src={advideo} type="video/mp4" autoPlay muted loop />
  </div>
  </div>
    </div >
  )
}

export default About