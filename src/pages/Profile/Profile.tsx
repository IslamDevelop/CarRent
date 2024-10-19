import { useEffect, useState } from "react";
import style from "./profile.module.scss";
import Button from "../../components/Forms/Form/Button/Button";
import img from "../../assets/Profile/7c15a2bafc0d0722be2b0d57a6be6c03.svg";
import { auth, db } from "../../firebase";
import avatar from "../../assets/Profile/depositphotos_639712656-stock-illustration-add-profile-picture-icon-vector.jpg";
import { SubmitHandler, useForm } from "react-hook-form";
import addProfile from "../../server/addProfile/addProfile";
import { onValue, ref } from "firebase/database";
import addPhoto from "../../server/addProfile/addPhoto";

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
  profilePhoto: string; // Измените на string, если вы не используете FileList
}

export const Profile = () => {
  const [profile, setProfile] = useState<FormData | null>(null); // Измените тип на FormData | null
  const { register, handleSubmit, setValue } = useForm<FormData>();

  const submit: SubmitHandler<FormData> = async (data) => {
    try {
      data.userUID = auth.currentUser!.uid;

      if (data.profilePhoto) {
        await addPhoto(data); // Ждем загрузки фото
      }

      await addProfile(data); // Обновляем профиль
    } catch (error) {
      console.error("Ошибка при добавлении профиля:", error);
      console.error("Ошибка при добавлении профиля:", error);
    }
  };

  useEffect(() => {
    const dataBaseProfile = ref(db, `/UsersProfile/${auth.currentUser.uid}`);

    const unsubscribe = onValue(dataBaseProfile, (snapshot) => {
      const profiles = snapshot.val();
      setProfile(profiles);

      if (profiles) {
        Object.keys(profiles).forEach((key) => {
          setValue(key as keyof FormData, profiles[key]);
        });
      }
    });

    return () => unsubscribe(); // Очистите слушатель
  }, [setValue]);

  return (
    <div className="container">
      <form onSubmit={handleSubmit(submit)} className={style.profile}>
        <h4>Ваш профиль</h4>
        <h1>Базовые настройки</h1>
        <div className={style.info}>
          <div className={style.avatar}>
            {profile && profile.profilePhoto ? (
              <img src={profile.profilePhoto} alt="Аватар" />
            ) : (
              <img src={avatar} alt="Аватар по умолчанию" />
            )}
          </div>
          <div className={style.settings}>
            <label htmlFor="file" className={style.settingsLabel}>
              <img src={img} alt="Добавить фотографию" />
              <input
                className={style.fileInput}
                id="file"
                type="file"
                {...register("profilePhoto")}
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
              defaultValue={profile?.name} // Используем опциональную цепочку
            />
          </label>
          <label className={style.label}>
            <input
              type="text"
              placeholder="Фамилия"
              {...register("surname", { required: true })}
              defaultValue={profile?.surname}
            />
          </label>
          <label className={style.label}>
            <input
              type="date"
              {...register("birthDate", { required: true })}
              defaultValue={profile?.birthDate}
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
              defaultValue={profile?.phone}
            />
          </label>
          <label className={style.label}>
            <input
              type="email"
              placeholder="E-mail"
              {...register("email", { required: true })}
              defaultValue={profile?.email}
            />
          </label>
          <label className={style.label}>
            <input
              type="number"
              placeholder="Водительский стаж"
              {...register("drivingExperience", { required: true })}
              defaultValue={profile?.drivingExperience}
            />
          </label>
          <label className={style.label}>
            <input
              type="text"
              placeholder="Гражданство"
              {...register("citizenship", { required: true })}
              defaultValue={profile?.citizenship}
            />
          </label>
          <label className={style.label}>
            <input
              type="number"
              placeholder="ИНН"
              {...register("inn", { required: true })}
              defaultValue={profile?.inn}
            />
          </label>
        </div>
        <Button variant="">Редактировать</Button>
      </form>
    </div>
  );
};