import { onValue, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../firebase'
import { rent } from '../../hooks/rent'

export const MyOrders = () => {
const uid = localStorage.getItem('orderUid') || ''
  const [orders,setOrders] = useState([])
const [carUid, setCarUid] = useState(uid || undefined)


  
  const dataBaseCars = ref(db,`/Orders/${auth.currentUser.uid + uid}`)
  useEffect(() => {
    onValue(dataBaseCars, (snapshot) => {
      setOrders([snapshot.val() || []])
      
    })
  },[])
  

 
  return (

    <div>{orders.map((item) => {
  
        return (
          <div key={item.carName}>
          <img src={item.carPhoto} alt="" />
          <p> Марка: {item.carName}</p>
          <p>Год: {item.carYear}</p>
          <p> Трансмиссия: {item.carTransmission}</p>
          <p>{item.acceptOrder == true ? item.carPhone : false}</p>
     
        </div>
        )
      })
    }</div>
  )
}
