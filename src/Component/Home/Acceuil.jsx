import { Box } from '@mui/material'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../Header/Header'
import Login from '../Login/Login'
import Register from '../Login/Register'

export default function Acceuil() {
  return (
    <Box >
        <Header/>
        <Routes>
      <Route path='/Login' exact element={<Login/>}/>
      <Route path='/Register' exact element={<Register/>}/>
      
      </Routes>
    </Box>
    
  )
}
