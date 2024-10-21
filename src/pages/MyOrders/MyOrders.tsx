import { onValue, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../firebase'
import { rent } from '../../hooks/rent'
import style from './MyOrders.module.css'
import { IAddCar } from '../MyCars/MyCars'
import { Footer } from '../../components/Footer/Footer'




export const MyOrders = () => {
  
  const [orders,setOrders] = useState([])
  const uid:string = localStorage.getItem('orderUid') || ''
const carUid:string = localStorage.getItem('carUid') || ''
if(localStorage.getItem('carUid') == auth.currentUser.uid) {
  localStorage.removeItem('carUid')
}

  console.log(carUid)
  console.log(uid)
  const dataBaseCars = ref(db,`/Orders/${carUid}${uid}`)
  useEffect(() => {
    onValue(dataBaseCars, (snapshot) => {
      setOrders([snapshot.val() || []])
      console.log(snapshot.val())

    })
  },[carUid])
  
  

const remove = () => {
  localStorage.removeItem('carUid')
  localStorage.removeItem('orderUid')
  setOrders([])
}
console.log(orders)
 
  return (
    <div>

{!carUid ? <div className={style.Orders}></div> :

<div>{orders.map((item) => {
  
  return (
    <div>
      <div className={style.Orders}>
        <div className={style.title}>
          <h1>Your orders</h1>
        </div>
        <div className={style.OrdersContain}>

      <div className={item.isRented == true ? item.acceptOrder == true ? style.OrderCardCarsComplete : style.OrderCardCars : style.OrderCardCarsNone}>

        <div className={style.OrderCard} key={item.carName + Math.random()}>

        <div className={style.OrderImage}>
          <img src={item.carPhoto} alt="" />
        </div>

        <div className={style.OrderCardInfo}>
          <p> {item.carName} {item.carModel} {item.carYear} {item.carTransmission}</p>
         
         
          <p>{item.isRented == true ? item.acceptOrder == true ? item.carPhone : "Ожидание" : "Ордер отменен"}</p>
          
        </div>
          <button onClick={() => {remove()}}>Убрать ордер</button>

      </div>
    </div>


      <div className={style.orderCardsRight}>

        <h2>Order info</h2>

        <div className={style.orderCardsInfo}>
          <p>Time</p>
          <p>1 day</p>
        </div>


        <div className={style.orderCardsInfo}>
          <p>Time left</p>
          <p>16h 25m</p>
        </div>

        <div className={style.orderCardsInfo}>
          <p>Subtotal</p>
          <p>4000р</p>
        </div>

        <div className={style.orderCardsInfo}>
          <p>Estimated Shipping</p>
          <p>From 0р</p>
        </div>

        <div className={style.orderCardsInfo}>
          <p>Estimated Total</p>
          <p>4000р</p>
        </div>

        <button>Checkout now</button>

     </div>
    </div>
    </div>

        </div>
        )
      })
    }</div>
  }
  </div>
  )
}