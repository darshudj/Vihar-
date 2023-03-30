import React,{useState} from 'react'
import style from './header.module.css'
import {useRecoilValue,useRecoilState } from 'recoil'
import { PlacesInfo } from '../../assets/constdata'
import { StickState } from '../../assets/constdata'


const Header = () => {
    const [completed,Setcompleted] =useState(true)
    function Completed(){
        Setcompleted(true)
    }
    function Notcompleted(){
        Setcompleted(false)
    }
    const Places = useRecoilValue(PlacesInfo)
    const data1=Places.filter((item)=>item.catogory === "falls")


    const [details,Setdetails]=useState(false)


    const [cart, Setcart]=useRecoilState(StickState)
   function Addtocart(ele){
     Setcart([...cart ,...Places.filter((item,i)=>item.id == ele.id)])
      console.log(Places.filter((item,i)=>item.id == ele.id))
   }
   console.log(cart)
    
    return (
        <div className={style.main}>
            <div className={style.container}>
                <div onClick={Completed} className={style.icons}>
                    <h1>Places</h1></div>
                <div onClick={Notcompleted} className={style.icons2}>
                    <h1>Hotels</h1>
                </div>
                <div onClick={Notcompleted} className={style.icons3}>
                    <h1>Tickets</h1>
                </div>

            </div>
            <div className={style.container2}>
            <div onClick={Completed} className={style.icons4}>
                <h1>All</h1></div>
            <div onClick={Notcompleted} className={style.icons5}>
                <h1>Catogory</h1>
            </div>

        </div>
            {completed==true?
                <div className={style.section}>
                <div  className={style.title}>
                <h1>Falls</h1>
                </div>
                <div  className={style.boxcontainer}>
                {
                data1.map((ele)=>(
                    <div key={ele.id} className={style.box}>
                    
                       <img src={ele.src} />
                       <h1 onClick={()=>Setdetails(!details)}>{ele.name}.. </h1>
                       {
                        details===true ?
                        <p>{ele.details}</p>
                        :
                        null
                       }
                       <button onClick={()=>Addtocart(ele)}>add</button>
                    </div>
                ))
             }
                </div>
            </div> 
            :
            <div className={style.section2}>
            lkjhngbghjhljkhb
            </div>
            }
           
        </div>
    )
}

export default Header