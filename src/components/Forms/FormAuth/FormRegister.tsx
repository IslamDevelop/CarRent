import React, { useEffect } from 'react'
import { appendErrors, SubmitHandler, useForm } from 'react-hook-form';
import writeUserData from '../../../server/FornAuthDatabase/AuthDatabase';
import { Link, useNavigate } from 'react-router-dom';
import styles from "./FormAuth.module.css"

import lambaForma from '../../../assets/FormaRegistr/Orange Car.mp4'
import user from '../../../assets/FormaRegistr/user.svg'
import phone from '../../../assets/FormaRegistr/phone.svg'
import lock from '../../../assets/FormaRegistr/lock.svg'
import sobachka from '../../../assets/FormaRegistr/@.svg'


import { createUserWithEmailAndPassword, getAuth, signInAnonymously, SignInMethod } from 'firebase/auth';
import { auth } from '../../../firebase';
import Button from '../Form/Button/Button';

interface RegForm {
  username: string;
  email: string;
  phone: number;
  password: string;
  token: string
}

export const FormRegister = () => {
  const {register, handleSubmit, formState: {errors,isSubmitting,isSubmitSuccessful}} = useForm<RegForm>(
    {mode: "onBlur"}
  )
  const navigate = useNavigate()
  const  submit: SubmitHandler<RegForm> = async data => {
    console.log(data)
    const auth = await getAuth()
    
  const email = data.email
  const password = data.password
  await createUserWithEmailAndPassword(auth, email, password)
  .then (({user}) => {
    const userAuth = {
      
      username: data.username,
      email: data.email,
      password: data.password,
      phone: data.phone,
      token: user.accessToken
      
    }
   writeUserData(userAuth)
  
    localStorage.setItem('userAuth', JSON.stringify(userAuth))
   })

   }
console.log(user)
useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged((user) => {
    if (user) {
      navigate('/')
    }
  });
  return () => unsubscribe();
}, []);
  
  
  return (

  <div className={styles.registrFormContainer}>
    <div className={styles.authFormRegistr}>

      <div className={styles.authFormLeft}>
        <video loop muted src={ lambaForma } autoPlay controls/>
      </div>

     <form className={styles.formContain} onSubmit={handleSubmit(submit)}>
      <div className={styles.inputs}>
        <label htmlFor="login"></label>
        <input type="text" {...register('username', {required: true})}  placeholder='Name'/>
        <img src={ user } />
      </div>
      <div className={styles.inputs}>
        <label htmlFor="login"></label>
        <input
                    {...register('email', { required: true,  pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Некорректный email",
                    },})}
                    placeholder="Email"
                  /> 
                  {errors.email && <span style={{ color: "rgb(143, 14, 19)" }}>{errors.email.message}</span>}
        <img src={ sobachka } />
      </div>
      <div className={styles.inputs}>
        <label htmlFor="phone"></label>
        <input type="number" {...register('phone', {required: true, minLength: {value: 10, message: "Минимум 10 символов"}})} placeholder='Phone'/>
        {errors.phone && <span style={{ color: "red" }}>{errors.phone.message}</span>}
        <img src={ phone } />
      </div>

      <div className={styles.inputs}>
        <label htmlFor="pass"></label>
        <input type="password" {...register('password', {required: true})}  placeholder='Password'/>
        <img src={ lock } />
      </div>

      {isSubmitting ? <button type='button' className={styles.buttonRegister}>Loading...</button> : <button className={styles.buttonRegister} >Register</button>}
      <span>{isSubmitSuccessful ? "Вы успешно зарегестрировались" : false}</span>
     </form>
       <p>have an account <Link to='/Login'>Sign In</Link></p>
    </div>
  </div>
  )
}
