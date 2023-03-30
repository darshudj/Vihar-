import React from 'react'
import style from './navbar.module.css'
import { Link } from 'react-router-dom'
import logo from '../../../../../travel/logo2.png'
import book from '../../../../../travel/bookmark2.png'

const Navbar = () => {
  return (
    <div className={style.main}>
    <div className={style.navlogo}>
    
     <img className={style.logo} src={logo} />
    </div>
    <div className={style.navlist}>
    <ul >
    <li className={style.list}><Link style={{color:"red"}}  to="/" ><u>Home</u></Link></li>
    <li  className={style.list}><Link style={{color:"red"}}   to="/about" ><u>About</u></Link></li>
    <li  className={style.list}><Link style={{color:"red"}}   to="/service" ><u>Service</u></Link></li>
    <li  className={style.list}><Link to="/places" ><img className={style.book} src={book}/></Link></li>
    </ul>
    </div>
    </div>
  )
}

export default Navbar