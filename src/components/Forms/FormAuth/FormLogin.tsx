import { Form, SubmitHandler, useForm } from 'react-hook-form';
import { getDatabase, onValue, ref } from 'firebase/database';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from "./FormAuth.module.css";

import lambaForma from '../../../assets/FormaRegistr/Orange Car.mp4';
import userIcon from '../../../assets/FormaRegistr/user.svg';
import lockIcon from '../../../assets/FormaRegistr/lock.svg';
import {  signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../../firebase';


interface LogForm {
  email: string;
  password: string;
}


interface UserAuth {
  token: string;
}




export const FormLogin = () => {

  const [users, setUsers] = useState<UserAuth[]>([]);
  const [data, setData] = useState<LogForm | null>(null);
  const [error, setError] = useState("");

  const navigate = useNavigate()
  const database = ref(db, `/authUsers/usersAuth`);


  const { register, handleSubmit,formState: {errors,isSubmitting} } = useForm<LogForm>({mode: "onBlur"});

 
  const userAuth: UserAuth | null = JSON.parse(localStorage.getItem('userAuth') || 'null');

  
 
 
  const submit: SubmitHandler<LogForm> = async (formData) => {
  
    console.log(formData);


   

   
    const email: string = formData.email.trim();
    const password: string = formData.password.trim();
    console.log(email)
    console.log(password)
     try {

      await signInWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      
      switch (error.code) {
        case "auth/wrong-password":
          setError("Неправильный пароль. Пожалуйста, попробуйте снова.");
          break;
        case "auth/user-not-found":
          setError("Пользователь с таким email не найден.");
          break;
        case "auth/too-many-requests":
          setError("Слишком много неудачных попыток входа. Попробуйте позже.");
          break;
        default:
          setError("Неправильный пароль или email.");
          break;
      }
    
  }};

 

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigate('/')
      }
    });
    return () => unsubscribe();
  }, []);


  
   console.log(auth)
   console.log(userAuth)
  return (
    <div className={styles.formContainer}>
      <div className={styles.authForm}>
        <div className={styles.authFormLeft}>
          <video loop muted src={lambaForma} autoPlay controls />
        </div>

        <div className={styles.authFormRight}>
          <form className={styles.formContain} onSubmit={handleSubmit(submit)}>
            <h1>Login</h1>

            <div className={styles.inputs}>
              <label htmlFor="email"></label>
              <input
                    {...register('email', { required: true,  pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Некорректный email",
                    },})}
                    placeholder="Email"
                  /> 
                  {errors.email && <span style={{ color: "rgb(143, 14, 19)" }}>{errors.email.message}</span>}
              <img src={userIcon} alt="User Icon" />
            </div>

            <div className={styles.inputs}>
              <label htmlFor="password"></label>
              <input
                type="password"
                {...register('password', { required: true })}
                placeholder="Password"
              />
              <img src={lockIcon} alt="Lock Icon" />
            </div>

            <div>
              {isSubmitting ? <button type='button' className={styles.btnLogin}>Loading...</button> : <button className={styles.btnLogin}>Login</button>}
            </div>
          </form>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <p>
            Don't have an account?
            <Link to='/Register'> Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};