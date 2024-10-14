import { onValue, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase'
import { rent } from '../../hooks/rent'

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

    <div>{allCars.map((item,index) => {
  
        return (
          <div key={item.carName}>
          <img src={item.carPhoto} alt="" />
          <p> Марка: {item.carName}</p>
          <p>Год: {item.carYear}</p>
          <p> Трансмиссия: {item.carTransmission}</p>
          {item.isRented == false ? <button onClick={() => rent(index)}>Арендовать</button> : <button>Арендовано</button>}
     
        </div>
        )
      })
    }</div>
  )
}
