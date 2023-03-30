import React from 'react'
import style from './home.module.css'
import hero from '../../../../../travel/hero.png'
import heroin from '../../../../../travel/heroin.png'
import Adventure from '../../atoms/adventures/adventure'
import Nature from '../../atoms/nature/nature'
import Footer from '../../atoms/footer/footer'

const Home = () => {
  return (
    <div className={style.main}>
    <div className={style.section}>
    <div className={style.heading}>
    <h1>Vihar...</h1>
    <h3>Lifelong Memories Just </h3>
    <h3>A Few Days Away</h3>
    </div>
    <div className={style.hero}>
    <div  className={style.content} >
    <img src={hero}/>
    </div>
    </div>
    <div className={style.heroin}>
    <div  className={style.content} >
    <img  className={style.heroinimg} src={heroin}/>
    </div>

    </div>
    </div>
    <Adventure/>
    <Nature/>
    <Footer/>
   
   
    </div>
  )
}

export default Home