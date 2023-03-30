import React from 'react'
import style from './adventure.module.css'

const Adventure = () => {
  return (
    <div className={style.main}>
    <div className={style.section}>
    <h1><u>Adventures</u></h1>
    <div  className={style.content}>
    <div className={style.picture}>
    </div>
    <div className={style.features}>
    <div className={style.activity}>
    <div className={style.left}></div>
    <div className={style.right}>
    <h1>Trekking</h1>
    <h5>Climbing the big hills for perfect view of nature</h5>
    </div>
    </div>
    <div className={style.activity}>
    <div className={style.left1}></div>
    <div className={style.right}>
    <h1>Rafting</h1>
    <h5>let's met the wildest river and rafting them!</h5>
    </div>
    </div>
    <div className={style.activity}>
    <div className={style.left2}></div>
    <div className={style.right}>
    <h1>View point</h1>
    <h5>let's explore the beauty of malenadu</h5>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Adventure