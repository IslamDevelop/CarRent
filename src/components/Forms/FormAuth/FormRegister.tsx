import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import writeUserData from '../../../server/FornAuthDatabase/AuthDatabase';
import { Link } from 'react-router-dom';
import styles from "./FormAuth.module.css"

import lambaForma from '../../../assets/FormaRegistr/Orange Car.mp4'
import user from '../../../assets/FormaRegistr/user.svg'
import phone from '../../../assets/FormaRegistr/phone.svg'
import lock from '../../../assets/FormaRegistr/lock.svg'
import { createUserWithEmailAndPassword, getAuth, signInAnonymously, SignInMethod } from 'firebase/auth';

interface RegForm {
  username: string;
  email: string;
  phone: number;
  password: string;
  token: string
}

export const FormRegister = () => {
  const {register, handleSubmit} = useForm<RegForm>({
   
  })
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
  
  
  return (

  <div className={styles.registrFormContainer}>
    <div className={styles.authFormRegistr}>

      <div className={styles.authFormLeft}>
        <video loop muted src={ lambaForma } autoPlay controls/>
      </div>

     <form className={styles.formContain} onSubmit={handleSubmit(submit)}>
      <div className={styles.inputs}>
        <label htmlFor="login"></label>
        <input type="text" {...register('username', {required: true})}  placeholder='Login'/>
        <img src={ user } />
      </div>
      <div className={styles.inputs}>
        <label htmlFor="login"></label>
        <input type="text" {...register('email', {required: true})}  placeholder='Email'/>
        <img src={ user } />
      </div>
      <div className={styles.inputs}>
        <label htmlFor="phone"></label>
        <input type="number" {...register('phone', {required: true})} placeholder='Phone'/>
        <img src={ phone } />
      </div>

      <div className={styles.inputs}>
        <label htmlFor="pass"></label>
        <input type="password" {...register('password', {required: true})}  placeholder='Password'/>
        <img src={ lock } />
      </div>

      <button className={styles.buttonRegister} >Register</button>
     </form>
       <p>have an account <Link to='/Login'>Sign In</Link></p>
    </div>
  </div>
  )
}
