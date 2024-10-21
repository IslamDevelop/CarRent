import { useEffect, useState } from "react";
import style from "./profile.module.css";

import Button from "../../components/Forms/Form/Button/Button";
import img from "../../assets/Profile/7c15a2bafc0d0722be2b0d57a6be6c03.svg";
import { auth, db } from "../../firebase";
import avatar from "../../assets/Profile/depositphotos_639712656-stock-illustration-add-profile-picture-icon-vector.jpg";
import { SubmitHandler, useForm } from "react-hook-form";
import addProfile from "../../server/addProfile/addProfile";
import { onValue, ref } from "firebase/database";
import addPhoto from "../../server/addProfile/addPhoto";
import { Footer } from "../../components/Footer/Footer";
import ava from '../../assets/Profile/Avatar.png'

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
  profilePhoto: string;
}

export const Profile = () => {
  const [profile, setProfile] = useState<FormData | null>(null);
  const [isEditing, setIsEditing] = useState(false); 
  const { register, handleSubmit, setValue } = useForm<FormData>();

  const submit: SubmitHandler<FormData> = async (data) => {
    try {
      data.userUID = auth.currentUser!.uid;

      if (data.profilePhoto) {
        await addPhoto(data);
      }

      await addProfile(data); 
    } catch (error) {
      console.error("Ошибка при добавлении профиля:", error);
    }
    setIsEditing(false); 
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

    return () => unsubscribe();
  }, [setValue]);

  console.log(profile);

  return (
    <div className={style.Profile}>
      <div className="container">
        <form onSubmit={handleSubmit(submit)} className={style.profile}>
          <h4>Profile</h4>
          <div className={style.avatar}>
          <input type="file" id="lads" {...register('profilePhoto')} />
            {profile && profile.profilePhoto ? (
              <img src={profile.profilePhoto} alt=""/>
            ) : (
              <img src={ ava } alt="Аватар по умолчанию" />
            )}
          </div>
          <div className={style.nameLabel}>
            <p>{profile?.name || "Имя"} {profile?.surname || "Фамилия"}</p>
          </div>
          
          {isEditing && ( 
            <div className={style.personal}>

              <div className={style.personalLeft}>
              <input
                type="text"
                placeholder="Имя"
                {...register("name", { required: true })}
                defaultValue={profile?.name}
              />
              <input
                type="text"
                placeholder="Фамилия"
                {...register("surname", { required: true })}
                defaultValue={profile?.surname}
              />
              <input
                type="date"
                {...register("birthDate", { required: true })}
                defaultValue={profile?.birthDate}
              />
              <input
                type="number"
                placeholder="Телефон"
                {...register("phone", { required: true })}
                defaultValue={profile?.phone}
              />
              </div>

              <div className={style.personalRight}>
              <input
                type="email"
                placeholder="E-mail"
                {...register("email", { required: true })}
                defaultValue={profile?.email}
              />
              <input
                type="number"
                placeholder="Водительский стаж"
                {...register("drivingExperience", { required: true })}
                defaultValue={profile?.drivingExperience}
              />
              <input
                type="text"
                placeholder="Гражданство"
                {...register("citizenship", { required: true })}
                defaultValue={profile?.citizenship}
              />
              <input
                type="number"
                placeholder="ИНН"
                {...register("inn", { required: true })}
                defaultValue={profile?.inn}
              />
              </div>

            </div>
          )}

          <div className={style.profileBtn}>

             <Button variant="" onClick={() => setIsEditing(!isEditing)}
>
             {isEditing ? "Save" : "Edit"}
             </Button>

          </div>

        </form>
      </div>
      <Footer/>
    </div>
  );
};
