import React from 'react'
import style from './nature.module.css'

const Nature = () => {
  return (
    <div className={style.main}>
    <div className={style.heading}>
    <h1>Discover The Touch Of Nature</h1>
    </div>
    <div className={style.container}>
    <div className={style.card1}>
     <h1><u>Waterfalls</u> </h1>
    </div>
    <div className={style.card2}>
    <h1> <u>Forest</u></h1>
    </div>
    <div className={style.card3}>
    <h1> <u>Temples</u></h1>
    </div>
    <div className={style.card4}>
    <h1><u>Reserviours</u></h1>
    </div>
    </div>
    </div>
  )
}

export default Nature