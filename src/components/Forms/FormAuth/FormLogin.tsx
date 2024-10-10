import { Form, SubmitHandler, useForm } from 'react-hook-form';
import writeUserData from '../../../server/FornAuthDatabase/AuthDatabase';
import { getDatabase, onValue, ref } from 'firebase/database';
import { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { FormRegister } from './FormRegister';
import styles from "./FormAuth.module.css"
import lambaForma from '../../../assets/FormaRegistr/Orange Car.mp4'
import user from '../../../assets/FormaRegistr/user.svg'
import lock from '../../../assets/FormaRegistr/lock.svg'

import telegram from '../../../assets/FormaRegistr/Telegram.png'
import instagram from '../../../assets/FormaRegistr/instagram.svg'
import facebook from '../../../assets/FormaRegistr/facebook.svg'
import twit from '../../../assets/FormaRegistr/twitt.svg'


interface LogForm {
  username: string;
  password: string | number
}

export const FormLogin = ({authLogin}) => {
  const [users,setUsers] = useState([])
  const [data,setData] = useState({})
  const db = getDatabase()
  const database = ref(db,`/authUsers/users`)

  const {register, handleSubmit} = useForm<LogForm>({
   
  })

  const submit: SubmitHandler<LogForm> = data => {
    console.log(data)
    onValue(database,(snapshot) => {
      setUsers(snapshot.val())
      setData(data)
   
    })
  }
  useEffect(() => {
   users.map(user => {
    user.username == data.username && user.password == data.password ? authLogin() : alert("Неверный логин или пароль")
   })
  },[users])
  return (
  <div className={styles.formContainer}>

   <div className={styles.authForm}>

    <div className={styles.authFormLeft}>
      <video loop muted src={ lambaForma } autoPlay controls/>
    </div>

    <div className={styles.authFormRight}>

    <form className={styles.formContain} onSubmit={handleSubmit(submit)}>
      <h1>Login</h1>

       <div>
        <label htmlFor="username"></label>
         <input  type="text" {...register('username', {required: true})} placeholder='Email'/>
        <img src={ user } />
      </div>

      <div>
       <label htmlFor="password"></label>
        <input type="password" {...register('password', {required: true})}  placeholder='Password'/>
       <img src={ lock } />
      </div>

      <div>
       <button className={styles.btnLogin}>Login</button>
      </div>
  </form>
  
     <p>
       don't have an account?
       <Link to='/Register'> Sign Up</Link>
     </p>
 
    </div>
   </div>
  </div>
  )
}