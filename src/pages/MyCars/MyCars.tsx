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
  carModel: string; 
  carYear: number;
  rentPrice: number;
  carTransmission: string;
  isRented: boolean;
  carPhone: string
  acceptOrder: boolean
}

export const MyCars: React.FC = () => {
  const [cars, setCars] = useState([]);
  const { register, handleSubmit } = useForm<IAddCar>();
  const [isauth, setAuth] = useState(false);
  const submit: SubmitHandler<IAddCar> = async (data) => {
    try {
      await addPhotoCar(data);
      console.log(data.carPhoto);
      console.log("Автомобиль добавлен успешно");
    } catch (error) {
      console.error("Ошибка при добавлении автомобиля:", error);
    }
  };
  
  const dataBaseCars = ref(db, `/Cars`);
  useEffect(() => {
    onValue(dataBaseCars, (snapshot) => {
      setCars(snapshot.val() || []);
    });
  }, []);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setAuth(true);
      } else {
        setAuth(false)
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className={style.MyCars}>
  <div className={style.contain}>
      {!isauth ? <h2>Тут может быть ТВОЯ МАШЫЫНА</h2> : 
      <div>

    <form className={style.formMyCars} onSubmit={handleSubmit(submit)}>
      <div className={style.formRow}>
        <div>
          <label className={style.fileLabel} htmlFor="carPhoto">Фото автомобиля</label>
          <input type="file" id="carPhoto" {...register('carPhoto')} />
        </div>
        <div>
          <label htmlFor="carName"></label>
          <input type="text" id="carName" placeholder="Марка автомобиля" {...register('carName', { required: true })} />
        </div>
        <div>
          <label htmlFor="carModel"></label>
          <input type="text" id="carModel" placeholder="Модель автомобиля"{...register('carModel', { required: true })} />
        </div>
        <div>
          <label htmlFor="carYear"></label>
          <input type="number" id="carYear" placeholder="Год выпуска"{...register('carYear', { required: true })} />
        </div>
        <div>
          <label htmlFor="carTransmission"></label>
          <select id="carTransmission" {...register('carTransmission')}>
            <option value="Не известно">Коробка передач</option>
            <option value="AT">AT</option>
            <option value="MT">MT</option>
          </select>
        </div>
        <div>
          <label htmlFor="rentPrice"></label>
          <input type="number" id="rentPrice" placeholder="Цена в сутки"{...register('rentPrice', { required: true })} />
        </div>
        <button className={style.BtnFormaMyCars} type="submit">Добавить</button>
      </div>
    </form>

    <div className={style.carContain}>
      {cars.map((item,index) => {
        if (item.carUid === auth.currentUser.uid) {
          return (
            <div className={style.cardCar} key={item.carName + Math.round()}>
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
               {item.isRented == true ? <button className={style.BtnCardContain} onClick={(e) => {
                      e.stopPropagation()
                      acceptOrder(index,e)}}>{item.acceptOrder == true ? "Ордер принят" : "Принять Аренду"}</button> : false}
                   {item.isRented == true ? <button className={style.BtnCardContain} onClick={(e) => {
                    e.stopPropagation()
                    rent(index,e) }}>Отменить ордер</button> : false} 
              </div>
            </div>
          );
        }
      })}
    </div>
      </div>
    }
  </div>
</div>
  );
};
