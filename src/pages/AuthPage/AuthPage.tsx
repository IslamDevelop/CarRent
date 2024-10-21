import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { FormLogin } from '../../components/Forms/FormAuth/FormLogin'
import { FormRegister } from '../../components/Forms/FormAuth/FormRegister'
import { Home } from '../Home/Home'
import { AboutUs } from '../AboutUs/AboutUs'
import { SearchAuto } from '../SearchAuto/SearchAuto'
import { MyCars } from '../MyCars/MyCars'
import { Profile } from '../Profile/Profile'

export const AuthPage = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<FormLogin/>}/>
        <Route path='/Register' element={<FormRegister/>}/>
        <Route path='/AboutUs' element={<AboutUs/>}/>
        <Route path='/SearchAuto' element={<SearchAuto/>}/>
        <Route path='/MyCars' element={<MyCars/>}/>
    </Routes>
  )
}
