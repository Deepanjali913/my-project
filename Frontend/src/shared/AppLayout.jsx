import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import AboutUs from '../pages/AboutUs'
import Contact from '../pages/Contact'
import Home from '../pages/Home'

export default function AppLayout(props) {
  return (
    <div>
        <Header/>
        
        <Routes>
            <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutUs/>} />
        <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
        
        <Outlet/>
        <Footer  />
    </div>
  )
}