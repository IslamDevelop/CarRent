import { onValue, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase'
import { rent } from '../../hooks/rent'
import styles from './SearchAuto.module.css'
export const SearchAuto = () => {
  const [allCars,setAllCars] = useState([])
  const [vsCars,setVsCars] = useState([])
  const dataBaseCars = ref(db,`/Cars`)
  useEffect(() => {
    onValue(dataBaseCars, (snapshot) => {
     setAllCars(snapshot.val() || [])
     
    })
  },[])
  

 
  return (

    <div className={styles.contain}>{allCars.map((item,index) => {
  
        return (
          <div key={item.carName + Math.random()} className={styles.cardContain}>
          <img src={item.carPhoto} alt="" />
          <p> Марка: {item.carName}</p>
          <p>Год: {item.carYear}</p>
          <p> Трансмиссия: {item.carTransmission}</p>
          {item.isRented == false ? <button onClick={(e) => rent(index,e)}>Арендовать</button> : <button>Арендовано</button>}
     
        </div>
        )
      })
    }</div>
  )
}
