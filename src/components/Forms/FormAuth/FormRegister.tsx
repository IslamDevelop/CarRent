import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import writeUserData from '../../../server/FornAuthDatabase/AuthDatabase';
import { Link } from 'react-router-dom';
import styles from "./FormAuth.module.css"

import lambaForma from '../../../assets/FormaRegistr/Orange Car.mp4'
import user from '../../../assets/FormaRegistr/user.svg'
import phone from '../../../assets/FormaRegistr/phone.svg'
import lock from '../../../assets/FormaRegistr/lock.svg'

interface RegForm {
  username: string;
  phone: number;
  password: string | number
}

export const FormRegister = () => {
  const {register, handleSubmit} = useForm<RegForm>({
   
  })

  const submit: SubmitHandler<RegForm> = data => {
    console.log(data)
    writeUserData(data)
  }
  return (

  <div className={styles.registrFormContainer}>
    <div className={styles.authFormRegistr}>

      <div className={styles.authFormLeft}>
        <video loop muted src={ lambaForma } autoPlay controls/>
      </div>

     <form className={styles.formContain} onSubmit={handleSubmit(submit)}>
      <div className={styles.inputs}>
        <label htmlFor="login"></label>
        <input type="text" {...register('username', {required: true})}  placeholder='Email'/>
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

      <button>Sign Up</button>
     </form>
       <p>have an account <Link to='/'>Sign In</Link></p>
    </div>
  </div>
  )
}
