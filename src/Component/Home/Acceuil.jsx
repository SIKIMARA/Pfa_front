import { Box } from '@mui/material'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Enseignant from '../Enseignant/Enseignant'
import Panier from '../Enseignant/Panier'
import Etudiant from '../Etudiant/Etudiant'
import Header from '../Header/Header'
import Login from '../Login/Login'
import Register from '../Login/Register'
import MaterialDetails from '../Material/MaterialDetails'
import HomeInterface from './HomeInterface'

export default function Acceuil() {
  return (
    <Box >
        <Header/>
        <Routes>
        <Route path='/' exact element={<HomeInterface/>}/>
      <Route path='/Login' exact element={<Login/>}/>
      <Route path='/Register' exact element={<Register/>}/>
      <Route path='/Etudiant' element={<Etudiant/>}></Route>
      <Route path='/Enseignant' element={<Enseignant/>}></Route>
      <Route path='/Panier' element={<Panier/>}></Route>
      <Route path='/Material/:id' element={<MaterialDetails/>}></Route>
      
      </Routes>
    </Box>
    
  )
}
