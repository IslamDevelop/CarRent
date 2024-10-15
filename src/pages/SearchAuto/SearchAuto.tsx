import { onValue, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase'

import { rent } from '../../hooks/rent'
import style from './SearchAuto.module.css'

export const SearchAuto = () => {
  const [allCars,setAllCars] = useState([])
  const [vsCars,setVsCars] = useState([])
  const dataBaseCars = ref(db,`/Cars`)
  useEffect(() => {
    onValue(dataBaseCars, (snapshot) => {
     setAllCars(snapshot.val() || [])
     
    })
  },[])
  
console.log(allCars)
 
  return (

    <div className={style.Find} >
      
      <div  className={style.FindContainer}>
      {allCars.map((item,index) => {
      
      return (
        
        

          <div key={item.carName + Math.random()}  className={style.cardCar} >
          <div className={style.cardLeft}>
            <div className={style.cardHeader}>
              <p className={style.carModel}>{item.carModel}</p>
              <p className={style.carPrice}>от 150$ в сутки</p>
            </div>
            <img src={item.carPhoto} alt="Car" className={style.carImage} />
          </div>
          <div className={style.cardRight}>
            <div className={style.cardDetails}>
              <p>Марка: {item.carName}</p>
              <p>Год: {item.carYear}</p>
              <p>Трансмиссия: {item.carTransmission}</p>
            </div>
             {item.isRented == false ? <button className={style.BtnCardContain} onClick={(e) => rent(index,e)}>Арендовать</button> : <button>Арендовано</button>}
          </div>

        </div>



)
})
}</div>
</div>
  )
}
