import React, { useEffect, useState } from "react";
import style from "./myCars.module.scss";


import location from "../../assets/MyCar/location.svg";
import calendar from "../../assets/MyCar/calendar.svg";
import { SubmitHandler, useForm } from "react-hook-form";
import addCarDatabase from "../../server/addCarDatabase/addCarDatabase";
import { addPhotoCar } from "../../server/addCarDatabase/addCarPhoto";
import { onValue, ref } from "firebase/database";
import { auth, db } from "../../firebase";

export interface IAddCar {
  carUid: string;
  carPhoto: string;
  carName: string;
  carYear: number;
  carTransmission: string;
  isRented: boolean;
}

export const MyCars: React.FC = () => {
  const [cars,setCars] = useState([])
  const {register, handleSubmit} = useForm<IAddCar>()
  const submit: SubmitHandler<IAddCar> = async (data) => {
    try {
      
    
      await addPhotoCar(data)
      console.log(data.carPhoto)
      

      console.log('Автомобиль добавлен успешно');
    } catch (error) {
      console.error('Ошибка при добавлении автомобиля:', error);
    }
  }
  const carUser = auth.currentUser.uid
  const dataBaseCars = ref(db,`/Cars`)
useEffect(() => {
  onValue(dataBaseCars, (snapshot) => {
    setCars(snapshot.val() || [])
  })
},[])
 
  return (

    <div className={style.contain}>

      <div className={style.carContain}>{cars.map((item) => {

    if(item.carUid == auth.currentUser.uid) {

      return (
        <div className={style.cardCar}>
            <img src={item.carPhoto} alt="" />
            <p> Марка: {item.carName}</p>
            <p>Год: {item.carYear}</p>
            <p> Трансмиссия: {item.carTransmission}</p>
          </div>
        )
      }
      })}</div>
      
    <form onSubmit={handleSubmit(submit)}>
      <div>
      <input type="file" {...register('carPhoto')}/>
      </div>

      <div>
        <label htmlFor="carName">Марка автомобиля</label>
      <input type="text" {...register('carName', {required: true})}/>
      </div>

      <div>    
      <label htmlFor="carYear">Год выпуска</label>
      <input type="number" {...register('carYear', {required: true})}/>
      </div>

      <div>      
      <select {...register('carTransmission')}>
        <option value="Не известно">Коробка передач</option>
        <option value="AT">AT</option>
        <option value="MT">MT</option>
      </select>
      </div>

      <div>    
      <input type="checkbox"{...register('isRented')} />
      </div>

      <button>Добавить</button>
          </form>
    </div>
  );
};
