import React, { useState } from "react";
import style from "./myCars.module.scss";


import location from "../../assets/MyCar/location.svg";
import calendar from "../../assets/MyCar/calendar.svg";
import { SubmitHandler, useForm } from "react-hook-form";
import addCarDatabase from "../../server/addCarDatabase/addCarDatabase";

export interface IAddCar {
  carPhoto: string;
  carName: string;
  carYear: number;
  carTransmission: string;
  isRented: boolean;
}

export const MyCars: React.FC = () => {
  const {register, handleSubmit} = useForm<IAddCar>()
  const submit: SubmitHandler<IAddCar> = async (data) => {
    try {
      await addCarDatabase(data);
      console.log('Автомобиль добавлен успешно');
    } catch (error) {
      console.error('Ошибка при добавлении автомобиля:', error);
    }
  }
  return (

    <div>

      <div><img src="" alt="" /></div>

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
