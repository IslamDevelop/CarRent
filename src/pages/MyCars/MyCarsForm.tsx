import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import style from "./myCars.module.css";
import { date } from '../../hooks/date';
import { addPhotoCar } from '../../server/addCarDatabase/addCarPhoto';

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
    dateAdd: string
    rentDays: number
  }

export const MyCarsForm = ({formActivate}) => {
    const { register, handleSubmit,formState: {errors,isSubmitting,isSubmitSuccessful},reset } = useForm<IAddCar>({mode: "onSubmit"});

    const submit: SubmitHandler<IAddCar> = async (data) => {
        try {
          
          data.dateAdd = date()
          await addPhotoCar(data);
          console.log(data.carPhoto);
          console.log("Автомобиль добавлен успешно");
        } catch (error) {
          console.error("Ошибка при добавлении автомобиля:", error);
        }
    reset()
    formActivate()
      };
  return (
      <div>
        <form className={style.formMyCars} onSubmit={handleSubmit(submit)}>
      <div className={style.formRow}>
        <button className={style.formClose} type='button' onClick={() => formActivate()}>X</button>
        <div>
          <label className={style.fileLabel} htmlFor="carPhoto">Фото автомобиля</label>
          <input type="file" id="carPhoto" {...register('carPhoto')} />
        </div>
        <div>
          <label htmlFor="carName"></label>
          <input type="text" id="carName" placeholder="Марка автомобиля" {...register('carName', { required: true })} />
          {errors.carName && <span>Вы не выбрали марку</span>}
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
          <label htmlFor="rentDays"></label>
          <select id="rentDays" {...register('rentDays')}>
            <option value="1">1 день</option>
            <option value="2">2 дня</option>
            <option value="3">3 дня</option>
          </select>
        </div>
        <div>
          <label htmlFor="rentPrice"></label>
          <input type="number" id="rentPrice" placeholder="Цена в сутки"{...register('rentPrice', { required: true })} />
          {errors.rentPrice && <span>Ты бесплатно собираешься отдать?</span>}
        </div>
        {isSubmitting ? <button className={style.BtnFormaMyCars} type="button">Отправка</button> : <button className={style.BtnFormaMyCars} type="submit">Добавить</button>}
      </div>
    </form>
    </div>
  )
}
