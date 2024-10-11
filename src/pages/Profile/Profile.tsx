import { useState } from "react";
import style from "./profile.module.scss";
import Input from "../../components/Forms/Form/Input/Input";
import Button from "../../components/Forms/Form/Button/Button";
import img from "../../assets/Profile/7c15a2bafc0d0722be2b0d57a6be6c03.svg";

interface FormData {
  name: string;
  surname: string;
  birthDate: string;
  phone: string;
  email: string;
  drivingExperience: string;
  citizenship: string;
  inn: string;
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
        <div className={style.info}>
          <div className={style.avatar}></div>
          <div className={style.settings}>
            <label htmlFor="file" className={style.settingsLabel}>
              <img src={img} alt="Добавить фотографию" />
              <input
                id="file" // Добавляем id
                type="file"
                placeholder="Добавить фотографию"
                className={style.fileInput} // Добавим класс для стилизации, если нужно
              />
              <span>Добавить фотографию</span>
            </label>
          </div>
        </div>
        <div className={style.personal}>
          <h2>Личная Информация</h2>
          <label className={style.label}>
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
              type="text"
              placeholder="Фамилия"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
          </label>
          <label className={style.label}>
            <input
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
    </div>
  );
};
