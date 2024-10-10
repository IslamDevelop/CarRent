import { useState } from "react";
import style from "./profile.module.scss";
import Input from "../../components/Forms/Form/Input/Input";

export const Profile = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [birthDate, setBirthDate] = useState("");

  return (
    <div className="container">
      <div className={style.profile}>
        <h3>Ваш профиль</h3>
        <h1> Базовые настройки</h1>
        <div className={style.info}>
          <div className={style.avatar}></div>
          <div className={style.settings}></div>
        </div>
        <div className={style.personal}>
          <h2>Личная Информация</h2>
          <label className={style.label}>
            <Input type="text" placeholder="Имя" />
          </label>
          <label className={style.label}>
            <Input
              type="text"
              placeholder="Фамилия"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
          </label>
          <label className={style.label}>
            <Input
              type="date"
              placeholder="День Рождения"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
            />
          </label>
        </div>
        {/* <button>Редактировать</button> */}
      </div>
    </div>
  );
};
