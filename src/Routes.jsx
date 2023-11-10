import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';


const Routes = () => {
  return (
    <Routes>
    <Route path="/" exact element={<Home/>} />

  
  </Routes>
  )
}

export default Routes