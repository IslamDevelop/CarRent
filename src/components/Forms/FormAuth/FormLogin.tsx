import { Form, SubmitHandler, useForm } from 'react-hook-form';
import writeUserData from '../../../server/FornAuthDatabase/AuthDatabase';
import { getDatabase, onValue, ref } from 'firebase/database';
import { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { FormRegister } from './FormRegister';
import styles from "./FormAuth.module.css"
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
    <div className={styles.authForm}>

    <form className={styles.formContain} onSubmit={handleSubmit(submit)}>
      <div>
      <label htmlFor="username"> Логин </label>
    <input  type="text" {...register('username', {required: true})} placeholder='Введите логин'/>
      </div>
      <div>
    <label htmlFor="password"> Пароль </label>
    <input type="password" {...register('password', {required: true})}  placeholder='Введите пароль'/>
      </div>
      <div>

    <button>Войти</button>
      </div>
  </form>
  <p>
Нет аккаунта? 
  <Link to='/Register'>Зарегестрируйся</Link>
  </p>
 
    </div>
  )
}