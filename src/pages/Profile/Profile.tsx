import { useEffect, useState } from "react";
import style from "./profile.module.scss";
import Button from "../../components/Forms/Form/Button/Button";
import img from "../../assets/Profile/7c15a2bafc0d0722be2b0d57a6be6c03.svg";
import { auth, db } from "../../firebase"; // Импортируйте ваш файл с настройками Firebase

import { SubmitHandler, useForm } from "react-hook-form";
import addProfile from "../../server/addProfile/addProfile";
import { onValue, ref } from "firebase/database";

interface FormData {
  name: string;
  surname: string;
  birthDate: string;
  phone: string;
  email: string;
  drivingExperience: string;
  citizenship: string;
  inn: string;
  userUID: string;
}

export const Profile = () => {
  const [profile, setProfile] = useState([]);
  const [currentUser, setCurrentUser] = useState("");

  const { register, handleSubmit, setValue } = useForm<FormData>();

  const submit: SubmitHandler<FormData> = async (data) => {
    try {
      await addProfile(data);

      data.userUID = auth.currentUser.uid;
    } catch (error) {
      console.error("Ошибка при добавлении автомобиля:", error);
    }
  };

  useEffect(() => {
    const dataBaseProfile = ref(db, `/UsersProfile/abubakr`);

    const unsubscribe = onValue(dataBaseProfile, (snapshot) => {
      const profiles = snapshot.val() || {};
      setProfile(profiles);

      // Найдите профиль текущего пользователя
      const currentUser = Object.values(profiles).find(
        (el) => el.userUID === auth.currentUser.uid
      );
      setCurrentUser(currentUser || null); // Установите состояние для текущего пользователя
      if (currentUser) {
        Object.keys(currentUser).forEach((key) =>
          setValue(key as keyof FormData, currentUser[key])
        );
      }
    });

    return () => unsubscribe(); // Очистите слушатель
  }, [setValue]);

  // console.log(currentUser.name);

  return (
    <div className="container">
      <form onSubmit={handleSubmit(submit)} className={style.profile}>
        <h4>Ваш профиль</h4>
        <h1>Базовые настройки</h1>
        <div className={style.info}>
          <div className={style.avatar}></div>
          <div className={style.settings}>
            <label htmlFor="file" className={style.settingsLabel}>
              <img src={img} alt="Добавить фотографию" />
              <input
                className={style.fileInput}
                id="file"
                type="file"
                placeholder="Добавить фотографию"
              />
              <span>Добавить фотографию</span>
            </label>
          </div>
        </div>
        <div className={style.personal}>
          <h2>Личная Информация</h2>
          <label className={style.label}>
            <input
              type="text"
              placeholder="Имя"
              {...register("name", { required: true })}
            />
          </label>
          <label className={style.label}>
            <input
              className="input"
              type="text"
              placeholder="Фамилия"
              {...register("surname", { required: true })}
            />
          </label>
          <label className={style.label}>
            <input type="date" {...register("birthDate", { required: true })} />
          </label>
        </div>
        <div className={style.personal}>
          <h2>Дополнительная Информация</h2>
          <label className={style.label}>
            <input
              type="number"
              placeholder="Телефон"
              {...register("phone", { required: true })}
            />
          </label>
          <label className={style.label}>
            <input
              type="email"
              placeholder="E-mail"
              {...register("email", { required: true })}
            />
          </label>
          <label className={style.label}>
            <input
              type="number"
              placeholder="Водительский стаж"
              {...register("drivingExperience", { required: true })}
            />
          </label>
          <label className={style.label}>
            <input
              type="text"
              placeholder="Гражданство"
              {...register("citizenship", { required: true })}
            />
          </label>
          <label className={style.label}>
            <input
              type="number"
              placeholder="ИНН"
              {...register("inn", { required: true })}
            />
          </label>
        </div>
        <Button variant="">Редактировать</Button>
      </form>
    </div>
  );
};
