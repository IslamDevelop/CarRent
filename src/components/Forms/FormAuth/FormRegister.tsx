import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import writeUserData from '../../../server/FornAuthDatabase/AuthDatabase';
import { Link } from 'react-router-dom';
import styles from "./FormAuth.module.css"
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
    <div className={styles.authForm}>

    <form className={styles.formContain} onSubmit={handleSubmit(submit)}>
    <div>
      <label htmlFor="login">Логин</label>
      <input type="text" {...register('username', {required: true})}  placeholder='Введите логин'/>
      </div>
      <div>
      <label htmlFor="phone">Телефон</label>
      <input type="number" {...register('phone', {required: true})}  placeholder='+7***-**-**'/>
      </div>
      <div>
        <label htmlFor="pass">Пароль</label>
      <input type="password" {...register('password', {required: true})}  placeholder='Введите пароль'/>
      </div>
      <button>Зарегистрироваться</button>
     
    </form>
    <p>
Есть аккаунт? <Link to='/'>Войди</Link>
    </p>
    </div>
  )
}
