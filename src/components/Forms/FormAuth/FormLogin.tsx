import { Form, SubmitHandler, useForm } from 'react-hook-form';
import {  onValue, ref } from 'firebase/database';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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


interface FormLoginProps {
  authLogin: () => void;
}

export const FormLogin: React.FC<FormLoginProps> = ({ authLogin }) => {

  const [users, setUsers] = useState<UserAuth[]>([]);
  const [data, setData] = useState<LogForm | null>(null);



  const database = ref(db, `/authUsers/usersAuth`);


  const { register, handleSubmit } = useForm<LogForm>();

 
  const userAuth: UserAuth | null = JSON.parse(localStorage.getItem('userAuth') || 'null');


  const submit: SubmitHandler<LogForm> = async (formData) => {
  
    console.log(formData);


    onValue(database, (snapshot) => {
      setUsers(snapshot.val() || []);
      setData(formData);
    });

   
    const email = formData.email;
    const password = formData.password;
    await signInWithEmailAndPassword(auth, email, password);
  };


  useEffect(() => {
    onValue(database, (snapshot) => {
      setUsers(snapshot.val() || []);
    });

  
   console.log(auth)
   console.log(auth.currentUser)
   auth.currentUser !== null ? authLogin() : false
  }, [auth.currentUser]);

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
                type="text"
                {...register('email', { required: true })}
                placeholder="Email"
              />
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
              <button className={styles.btnLogin}>Login</button>
            </div>
          </form>

          <p>
            Don't have an account?
            <Link to='/Register'> Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};