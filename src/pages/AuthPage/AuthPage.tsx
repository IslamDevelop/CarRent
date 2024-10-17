import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { FormLogin } from '../../components/Forms/FormAuth/FormLogin'
import { FormRegister } from '../../components/Forms/FormAuth/FormRegister'
import { Home } from '../Home/Home'

export const AuthPage = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<FormLogin/>}/>
        <Route path='/Register' element={<FormRegister/>}/>
    </Routes>
  )
}
