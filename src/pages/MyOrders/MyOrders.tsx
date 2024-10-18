import { onValue, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../firebase'
import { rent } from '../../hooks/rent'
import style from './MyOrders.module.css'
import { IAddCar } from '../MyCars/MyCars'




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

{!carUid ? <div>У вас нет арендованного автомобиля</div> :

<div>{orders.map((item) => {
  
  return (
    <div>

          <div key={item.carName + Math.random()}>
          <img src={item.carPhoto} alt="" />
          <p> Марка: {item.carName}</p>
          <p>Год: {item.carYear}</p>
          <p> Трансмиссия: {item.carTransmission}</p>
          <p>{item.isRented == true ? item.acceptOrder == true ? item.carPhone : false : "Ордер отменен"}</p>
     
    </div>

    <button onClick={() => {
      remove()
     
    }}>Убрать ордер</button>
        </div>
        )
      })
    }</div>
  </div>
  )
}
