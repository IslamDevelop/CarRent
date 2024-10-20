import React, { useEffect, useState } from "react";
import style from "./myCars.module.css";

import location from "../../assets/MyCar/location.svg";
import calendar from "../../assets/MyCar/calendar.svg";
import { SubmitHandler, useForm } from "react-hook-form";

import { addPhotoCar } from "../../server/addCarDatabase/addCarPhoto";
import { onValue, ref } from "firebase/database";
import { auth, db } from "../../firebase";
import { rent } from "../../hooks/rent";
import { acceptOrder } from "../../hooks/acceptOrder";
import { date } from "../../hooks/date";
import { IAddCar, MyCarsForm } from "./MyCarsForm";
import { Footer } from "../../components/Footer/Footer";



interface Icar {
  cars: IAddCar[]
}

export const MyCars: React.FC = () => {
  const [cars, setCars] = useState<Icar | []>([]);
  const [activeForm,setActiveForm] = useState(false)

  const [isauth, setAuth] = useState(false);
  
  
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


  const formActivate = () => {
    setActiveForm(!activeForm)
  }



  return (
    <div className={style.MyCars}>
  <div className={style.contain}>
      {!isauth ? <h2>Тут может быть ТВОЯ МАШЫЫНА</h2> : 
      <div className={style.buttonAndCardContain}>
    {!activeForm ? <button onClick={() => {
        formActivate()
      }} className={style.BtnCardContain}>Добавить автомобиль</button>
      : <MyCarsForm formActivate={formActivate}/>}
    <div>
      </div>

    <div className={!activeForm ? style.carContain : style.carContainFormActive}>
      {cars.map((item,index) => {
        if (item.carUid === auth.currentUser.uid) {
          return (
            <div className={style.cardCar} key={item.carName + Math.random()}>
              <div className={style.cardLeft}>
                <div className={style.cardHeader}>
                  <p className={style.carModel}>{item.carName} {item.carModel}</p>
                  <p className={style.carPrice}>Price: {item.rentPrice}&#8381;</p>
                </div>
                <img src={item.carPhoto} alt="Car" className={style.carImage} />
              </div>
              <div className={style.cardRight}>
                <div className={style.cardDetails}>
                 
                  <p>Год: {item.carYear}</p>
                  <p>Трансмиссия: {item.carTransmission}</p>
                </div>
               {item.isRented == true ? <button className={style.BtnCardContain} onClick={(e) => {
                      e.stopPropagation()
                      acceptOrder(index,item.carName)}}>{item.acceptOrder == true ? "Ордер принят" : "Принять Аренду"}</button> : false}
                   {item.isRented == true ? <button className={style.BtnCardContain} onClick={(e) => {
                    e.stopPropagation()
                    rent(index,item.carName) }}>Отменить ордер</button> : false} 
                    <p>добавлено {item.dateAdd}</p>
              </div>
            </div>
          );
        }
      })}
    </div>
      </div>
    }
  </div>
  <Footer/>
</div>
  );
};
