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
    const dataBaseProfile = ref(db, `/UsersProfile/${auth.currentUser.uid}`);

    const unsubscribe = onValue(dataBaseProfile, (snapshot) => {
      const profiles = snapshot.val() || [];
      setProfile(profiles);

      console.log(profile);

      // Найдите профиль текущего пользователя
      // const User = profiles.find((el) => el.userUID === auth.currentUser.uid);
      // setCurrentUser(User || null);

      // if (User) {
      //   Object.keys(User).forEach((key) =>
      //     setValue(key as keyof FormData, User[key])
      //   );
      // }
    });

    return () => unsubscribe(); // Очистите слушатель
  }, [setValue]);


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
              defaultValue={profile.name}
            />
          </label>
          <label className={style.label}>
            <input
              className="input"
              type="text"
              placeholder="Фамилия"
              {...register("surname", { required: true })}
              defaultValue={profile.surname}
            />
          </label>
          <label className={style.label}>
            <input
              type="date"
              defaultValue={profile.birthDate}
              {...register("birthDate", { required: true })}
            />
          </label>
        </div>
        <div className={style.personal}>
          <h2>Дополнительная Информация</h2>
          <label className={style.label}>
            <input
              type="number"
              placeholder="Телефон"
              {...register("phone", { required: true })}
              defaultValue={profile.phone}
            />
          </label>
          <label className={style.label}>
            <input
              type="email"
              placeholder="E-mail"
              {...register("email", { required: true })}
              defaultValue={profile.email}
            />
          </label>
          <label className={style.label}>
            <input
              type="number"
              placeholder="Водительский стаж"
              {...register("drivingExperience", { required: true })}
              defaultValue={profile.drivingExperience}
            />
          </label>
          <label className={style.label}>
            <input
              type="text"
              placeholder="Гражданство"
              {...register("citizenship", { required: true })}
              defaultValue={profile.citizenship}
            />
          </label>
          <label className={style.label}>
            <input
              type="number"
              placeholder="ИНН"
              {...register("inn", { required: true })}
              defaultValue={profile.inn}
            />
          </label>
        </div>
        <Button variant="">Редактировать</Button>
      </form>
    </div>
  );
};
