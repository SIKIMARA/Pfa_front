import React from 'react'
import SideNav from './SideNav'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Professeurs from './Professeurs'
import Home from './Home'
import { Box } from '@mui/material'
import Utilisateurs from './Utilisateurs'
import Historique from './Historique'

export default function Dashboard() {
  return (
    
    <Box sx={{display:"flex"}}>
    <SideNav/>
    <Box component="main" sx={{flexGrow:1,p:1,paddingTop:"50px",backgroundColor:"#dfe8f2"}}>

      <Routes>
      <Route path='/home' exact element={<Home/>}/>
      <Route path='/Utilisateurs' exact element={<Utilisateurs/>}/>
      <Route path='/Historique' exact element={<Historique/>}/>
      </Routes>
    </Box>
    </Box>
  )
}
