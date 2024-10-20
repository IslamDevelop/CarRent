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
  const [profile, setProfile] = useState<FormData | null>(null);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  const submit: SubmitHandler<FormData> = async (data) => {
    try {
      data.userUID = auth.currentUser!.uid;

      if (data.profilePhoto) {
        await addPhoto(data); // Ждем загрузки фото
      }

      await addProfile(data); // Обновляем профиль
    } catch (error) {
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

  console.log(profile);

  return (
    <div className="container">
      <form onSubmit={handleSubmit(submit)} className={style.profile}>
        <h4>Ваш профиль</h4>
        <h1>Базовые настройки</h1>
        <div className={style.info}>
          <div className={style.avatar}>
            {profile && profile.profilePhoto ? (
              <img src={profile.profilePhoto} alt=""/>
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
              {...register("name", {
                required: "Имя обязательно",
                maxLength: { value: 20, message: "Максимум 20 символов" },
              })}
              defaultValue={profile?.name}
            />
            {errors.name && <span >{errors.name.message}</span>}
          </label>
          <label className={style.label}>
            <input
              type="text"
              placeholder="Фамилия"
              {...register("surname", { required: "Фамилия обязательна" })}
              defaultValue={profile?.surname}
            />
            {errors.surname && <span>{errors.surname.message}</span>}
          </label>
          <label className={style.label}>
            <input
              type="date"
              {...register("birthDate", {
                required: "Дата рождения обязательна",
              })}
              defaultValue={profile?.birthDate}
            />
            {errors.birthDate && <span>{errors.birthDate.message}</span>}
          </label>
        </div>
        <div className={style.personal}>
          <h2>Дополнительная Информация</h2>
          <label className={style.label}>
            <input
              type="tel" // Используйте tel для телефонных номеров
              placeholder="Телефон"
              {...register("phone", {
                required: "Телефон обязателен",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Допустимы только цифры",
                },
              })}
              defaultValue={profile?.phone}
            />
            {errors.phone && <span>{errors.phone.message}</span>}
          </label>
          <label className={style.label}>
            <input
              type="email"
              placeholder="E-mail"
              {...register("email", {
                required: "E-mail обязателен",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Некорректный E-mail",
                },
              })}
              defaultValue={profile?.email}
            />
            {errors.email && <span>{errors.email.message}</span>}
          </label>
          <label className={style.label}>
            <input
              type="number"
              placeholder="Водительский стаж"
              {...register("drivingExperience", {
                required: "Стаж обязателен",
                min: { value: 0, message: "Стаж не может быть отрицательным" },
              })}
              defaultValue={profile?.drivingExperience  +  "лет"}
            />
            {errors.drivingExperience && (
              <span>{errors.drivingExperience.message}</span>
            )}
          </label>
          <label className={style.label}>
            <input
              type="text"
              placeholder="Гражданство"
              {...register("citizenship", {
                required: "Гражданство обязательно",
              })}
              defaultValue={profile?.citizenship}
            />
            {errors.citizenship && <span>{errors.citizenship.message}</span>}
          </label>
          <label className={style.label}>
            <input
              type="number"
              placeholder="ИНН"
              {...register("inn", {
                required: "ИНН обязателен",
                minLength: {
                  value: 10,
                  message: "ИНН должен содержать минимум 10 символов",
                },
              })}
              defaultValue={profile?.inn}
            />
            {errors.inn && <span>{errors.inn.message}</span>}
          </label>
        </div>
        <Button variant="">Редактировать</Button>
      </form>
    </div>
  );
};
