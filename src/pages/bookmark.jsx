import React, { useState } from 'react'
import style from './bookmark.module.css'
import './marking.css'
import map from '../../../../travel/map.png'
import pin from '../../../../travel/pin.png'
import car from '../../../../travel/4.png'
import sedan from '../../../../travel/5.png'
import crista from '../../../../travel/7.png'
import force from '../../../../travel/12.png'
import tt from '../../../../travel/14.png'
import minibus from '../../../../travel/15.png'
import stick from '../../../../travel/stick.png'
import {useRecoilValue } from 'recoil'
import { StickState } from '../assets/constdata'
import kmstone from '../../../../travel/kmstone.png'
import notice from '../../../../travel/notice.png'

const Bookmark = () => {
  let vehicalarr = [
    {
      name: "car",
      pic: car,
      seat: 4,
      cost: "21/km",
    },
    {
      name: "sedan",
      pic: sedan,
      seat: 5,
      cost: "24/km",
    },
    {
      name: "crista",
      pic: crista,
      seat: 7,
      cost: "28/km",
    },
    {
      name: "force",
      pic: force,
      seat: 12,
      cost: "29/km",
    },
    {
      name: "tt",
      pic: tt,
      seat: 14,
      cost: "30/km",

    },
    {
      name: "minibus",
      pic: minibus,
      seat: 15,
      cost: "35/km",
    },
  ]
  const [data, setData] = useState([{
    name: "car",
    pic: car,
    seat: 4,
    cost: "21/km",
  }])
  const [book, Setbook] = useState("")
  const [booked, Setbooked] = useState(false)

  function Cardata() {
    const item = vehicalarr.filter((e) => e.name == "car")
    setData(item)
    Setbook("Car")

  }
  function Sedandata() {
    const item = vehicalarr.filter((e) => e.name == "sedan")
    setData(item)
    Setbook("Sedan")
  }
  function Cristadata() {
    const item = vehicalarr.filter((e) => e.name == "crista")
    setData(item)
    Setbook("Crista")
  }
  function Forcedata() {
    const item = vehicalarr.filter((e) => e.name == "force")
    setData(item)
    Setbook("Force")
  }
  function TTdata() {
    const item = vehicalarr.filter((e) => e.name == "tt")
    setData(item)
    Setbook("TT")
  }
  function Busdata() {
    const item = vehicalarr.filter((e) => e.name == "minibus")
    setData(item)
    Setbook("Minibus")
  }
  function Bookedvehical() {
    Setbooked(true)
  }
  const [display, Setdisplay] = useState("none")

  const Items =useRecoilValue(StickState)
  const [list , Setlist]=useState(Items)
  
  function Removeitem(id) {
    const updatedcart= list.filter((item)=>(item.id!==id))
   Setlist(updatedcart); 
}

  return (
    <div className={style.main}>
      <div className={style.section}>
      <h4  onClick={()=>Setdisplay("block")}>KM </h4>
      <img className={style.kmstone}  src={kmstone}/>
        <img src={map} />
        <div className={style.pointers}>
          {list.map((ele) => (
            <div>
              <img id={ele.name} onClick={()=>Removeitem(ele.id)}  src={pin} />

              <div id={ele.name} onClick={()=>Removeitem(ele.id)}style={{ display: display }}>{ele.name}-{ele.km}km</div>
            </div>
          ))}
        </div>
        <img className={style.notice} src={notice}/>
        <div className={style.noticept}>
         *click on the KM board for Distance from shimoga.<br/>
         *click on the Mark for Pointing The places.
        </div>
      </div>
      <div className={style.note}>
        <div className={style.top}>

          {booked === true ?
            <div className={style.points} >
              <p><u>vehical</u>:-{book}</p>
              {list.map((el) => (
                <ul>
                  <li>{el.name}</li>
                </ul>
              ))}
            </div>

            : null
          }

          <img src={stick} />
          <button>Confirm</button>
        </div>
        <div className={style.bottom}>
          <h3><u>Book Your Vehical</u></h3>
          <div className={style.dataa}>
            {data.map((e, index) => (
              <div className={style.vehicalcontent} key={index}>
                <h5>cost - {e.cost}</h5>
                <img src={e.pic} />
                <br />
                <button onClick={Bookedvehical}>Book</button>
              </div>

            ))}
          </div>
          <div className={style.seats}>
            <div className={style.vehical} onClick={(idx) => Cardata(idx)}>4</div>
            <div className={style.vehical} onClick={(idx) => Sedandata(idx)}>5</div>
            <div className={style.vehical} onClick={(idx) => Cristadata(idx)}>7</div>
            <div className={style.vehical} onClick={(idx) => Forcedata(idx)}>12</div>
            <div className={style.vehical} onClick={(idx) => TTdata(idx)}>14</div>
            <div className={style.vehical} onClick={(idx) => Busdata(idx)}>15+</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bookmark