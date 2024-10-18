
import { Route, Routes } from 'react-router-dom'
import { Profile } from '../pages/Profile/Profile'
import { SearchAuto } from '../pages/SearchAuto/SearchAuto'
import { MyCars } from '../pages/MyCars/MyCars'
import { MyOrders } from '../pages/MyOrders/MyOrders'
import { AboutUs } from '../pages/AboutUs/AboutUs'
import { Home } from '../pages/Home/Home'
import { FormLogin } from '../components/Forms/FormAuth/FormLogin'
import { FormRegister } from '../components/Forms/FormAuth/FormRegister'

export const Routing = () => {
 
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Profile' element={<Profile/>}/>
        <Route path='/SearchAuto' element={<SearchAuto/>}/>
        <Route path='/MyCars' element={<MyCars/>}/>
        <Route path='/MyOrders' element={<MyOrders/>}/>
        <Route path='/AboutUs' element={<AboutUs/>}/>
        <Route path='/Login' element={<FormLogin/>}/>
        <Route path='/Register' element={<FormRegister/>}/>
    </Routes>
  )
}
