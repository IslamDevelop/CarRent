import { useEffect, useState } from "react";
import style from "./profile.module.scss";
<<<<<<< HEAD
import Button from "../../components/Forms/Form/Button/Button";
import img from "../../assets/Profile/7c15a2bafc0d0722be2b0d57a6be6c03.svg";
import { auth, db } from "../../firebase"; // Импортируйте ваш файл с настройками Firebase

import { SubmitHandler, useForm } from "react-hook-form";
import addProfile from "../../server/addProfile/addProfile";
import { onValue, ref } from "firebase/database";
=======
import Input from "../../components/Forms/Form/Input/Input";
import Button from "../../components/Forms/Form/Button/Button";
import img from "../../assets/Profile/7c15a2bafc0d0722be2b0d57a6be6c03.svg";
>>>>>>> f05b1e6cd33b74c489ee3886f1079e7f41a3c8e3

interface FormData {
  name: string;
  surname: string;
  birthDate: string;
  phone: string;
  email: string;
  drivingExperience: string;
  citizenship: string;
  inn: string;
<<<<<<< HEAD
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
=======
}

export const Profile = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [drivingExperience, setDrivingExperience] = useState("");
  const [citizenship, setCitizenship] = useState("");
  const [inn, setInn] = useState("");

  return (
    <div className="container">
      <div className={style.profile}>
        <h4>Ваш профиль</h4>
        <h1> Базовые настройки</h1>
>>>>>>> f05b1e6cd33b74c489ee3886f1079e7f41a3c8e3
        <div className={style.info}>
          <div className={style.avatar}></div>
          <div className={style.settings}>
            <label htmlFor="file" className={style.settingsLabel}>
              <img src={img} alt="Добавить фотографию" />
              <input
<<<<<<< HEAD
                className={style.fileInput}
                id="file"
                type="file"
                placeholder="Добавить фотографию"
=======
                id="file" // Добавляем id
                type="file"
                placeholder="Добавить фотографию"
                className={style.fileInput} // Добавим класс для стилизации, если нужно
>>>>>>> f05b1e6cd33b74c489ee3886f1079e7f41a3c8e3
              />
              <span>Добавить фотографию</span>
            </label>
          </div>
        </div>
        <div className={style.personal}>
          <h2>Личная Информация</h2>
          <label className={style.label}>
<<<<<<< HEAD
            <input
=======
            <Input
              type="text"
              placeholder="Имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className={style.label}>
            <Input
              className="input"
>>>>>>> f05b1e6cd33b74c489ee3886f1079e7f41a3c8e3
              type="text"
              placeholder="Имя"
              {...register("name", { required: true })}
            />
          </label>
          <label className={style.label}>
            <input
<<<<<<< HEAD
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
=======
              type="date"
              placeholder="День Рождения"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
            />
          </label>
        </div>
        <div className={style.personal}>
          <h2>Дополнительная Информация</h2>
          <label className={style.label}>
            <Input
              type="number"
              placeholder="Телефон"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>
          <label className={style.label}>
            <Input
              className="input"
              type="text"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className={style.label}>
            <Input
              className="input"
              type="text"
              placeholder="Водительский стаж"
              value={drivingExperience}
              onChange={(e) => setDrivingExperience(e.target.value)}
            />
          </label>
          <label className={style.label}>
            <Input
              className="input"
              type="text"
              placeholder="Гражданство"
              value={citizenship}
              onChange={(e) => setCitizenship(e.target.value)}
            />
          </label>
          <label className={style.label}>
            <Input
              className="input"
              type="text"
              placeholder="ИНН"
              value={inn}
              onChange={(e) => setInn(e.target.value)}
            />
          </label>
        </div>
        <Button variant="">Редактировать</Button>
      </div>
>>>>>>> f05b1e6cd33b74c489ee3886f1079e7f41a3c8e3
    </div>
  );
};
