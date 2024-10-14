import React, { useEffect, useState } from "react";
import style from "./myCars.module.css";

import location from "../../assets/MyCar/location.svg";
import calendar from "../../assets/MyCar/calendar.svg";
import { SubmitHandler, useForm } from "react-hook-form";
import addCarDatabase from "../../server/addCarDatabase/addCarDatabase";
import { addPhotoCar } from "../../server/addCarDatabase/addCarPhoto";
import { onValue, ref } from "firebase/database";
import { auth, db } from "../../firebase";
import { rent } from "../../hooks/rent";
import { acceptOrder } from "../../hooks/acceptOrder";

export interface IAddCar {
  carUid: string;
  carPhoto: string;
  carName: string;
  carModel: string; // Добавляем carModel в интерфейс
  carYear: number;
  carTransmission: string;
  isRented: boolean;
  carPhone: string
  acceptOrder: boolean
}

export const MyCars: React.FC = () => {
  const [cars, setCars] = useState([]);
  const { register, handleSubmit } = useForm<IAddCar>();
  const submit: SubmitHandler<IAddCar> = async (data) => {
    try {
      await addPhotoCar(data);
      console.log(data.carPhoto);
      console.log('Автомобиль добавлен успешно');
    } catch (error) {
      console.error('Ошибка при добавлении автомобиля:', error);
    }
  };
  const carUser = auth.currentUser.uid;
  const dataBaseCars = ref(db, `/Cars`);
  useEffect(() => {
    onValue(dataBaseCars, (snapshot) => {
      setCars(snapshot.val() || []);
    });
  }, []);

  return (
    <div className={style.MyCars}>
      <div className={style.contain}>
        <form className={style.formMyCars} onSubmit={handleSubmit(submit)}>
          <div className={style.formRow}>
            <div>
              <label htmlFor="carPhoto">Фото автомобиля</label>
              <label className={style.fileLabel} htmlFor="carPhoto">Выберите файл</label>
              <input type="file" id="carPhoto" {...register('carPhoto')} />
            </div>

            <div>
              <label htmlFor="carName">Марка автомобиля</label>
              <input type="text" id="carName" {...register('carName', { required: true })} />
            </div>

            <div>
              <label htmlFor="carModel">Модель автомобиля</label> {/* Исправлено */}
              <input type="text" id="carModel" {...register('carModel', { required: true })} />
            </div>

            <div>
              <label htmlFor="carYear">Год выпуска</label>
              <input type="number" id="carYear" {...register('carYear', { required: true })} />
            </div>

            <div>
              <label htmlFor="carTransmission">Коробка передач</label>
              <select id="carTransmission" {...register('carTransmission')}>
                <option value="Не известно">Коробка передач</option>
                <option value="AT">AT</option>
                <option value="MT">MT</option>
              </select>
            </div>

            <div className={style.checkboxContainer}>
              <label htmlFor="isRented">Аренда</label>
              <input type="checkbox" id="isRented" {...register('isRented')} />
            </div>

            <button className={style.BtnFormaMyCars} type="submit">Добавить</button>
          </div>
        </form>

        <div className={style.carContain}>
          {cars.map((item, index) => {
            if (item.carUid === auth.currentUser.uid) {
              return (
                <div className={style.cardCar} key={item.carUid}>
                  
                  <div>
                  <p>150$</p>
                  <img src={item.carPhoto} alt="" />
                  </div>

                  <div className={style.cardText}>
                    <p>Марка: {item.carName}</p>
                    <p>Модель: {item.carModel}</p>
                    <p>Год: {item.carYear}</p>
                    <p>Трансмиссия: {item.carTransmission}</p>
                    {item.isRented == true ? <button onClick={() => acceptOrder(index)}> Принять арендатора</button> : false}
                   {item.isRented == true ? <button onClick={() => rent(index)}>Отменить ордер</button> : false} 
                  </div>
                  
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};