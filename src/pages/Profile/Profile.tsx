import { useState } from "react";
import style from "./profile.module.css";
import Button from "../../components/Forms/Form/Button/Button";
import img from "../../assets/Profile/7c15a2bafc0d0722be2b0d57a6be6c03.svg";
import { auth } from "../../firebase"; 
import { useForm, SubmitHandler } from "react-hook-form";
import addProfile from "../../server/addProfile/addProfile";

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
  const [isEditing, setIsEditing] = useState(false);
  const { register, handleSubmit, setValue } = useForm<FormData>();

  const submit: SubmitHandler<FormData> = async (data) => {
    try {
      await addProfile(data);
      data.userUID = auth.currentUser?.uid || "";
    } catch (error) {
      console.error("Ошибка при добавлении профиля:", error);
    }
  };

  const toggleEdit = () => setIsEditing(!isEditing);

  return (
    <div className={style.Profile}>
      <div className={style.container}>
        <form onSubmit={handleSubmit(submit)} className={style.profile}>
          <h4>Profile</h4>
          <div className={style.topRow}>
            <div className={style.avatar}>
              <label htmlFor="file" className={style.fileLabel}>
                <img src={img} alt="Добавить фотографию" />
                <input
                  className={style.fileInput}
                  id="file"
                  type="file"
                  placeholder="Добавить фотографию"
                />
              </label>
            </div>
            <div className={style.nameLabel}>
              <p>Yusuf</p>
            </div>
            <Button variant="" onClick={toggleEdit}>
              {isEditing ? "Save" : "Edit"}
            </Button>
          </div>

          {isEditing && (
            <div className={style.additionalInfo}>
              <div className={style.personal}>
                <label className={style.label}>
                  <input
                    type="text"
                    placeholder="Фамилия"
                    {...register("surname", { required: true })}
                  />
                </label>
                <label className={style.label}>
                  <input
                    type="date"
                    {...register("birthDate", { required: true })}
                  />
                </label>
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
            </div>
          )}

          {/* <div className={style.footer}>
            <Button variant="">Выйти</Button>
            <Button variant="">Мои машины</Button>
          </div> */}
        </form>
      </div>
    </div>
  );
};