import React from 'react'
import SideNav from './SideNav'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Professeurs from './Professeurs'
import Home from './Home'
import { Box } from '@mui/material'
import Utilisateurs from './Utilisateurs'
import Historique from './Historique'
import Authenticated from '../Login/Authenticated'
import G_Materials from './G_Materials'
import Utilisateurs_PE from './Utilisateurs_PE'
import Material_disp from './Material_disp'
export default function Dashboard() {
  return (
    <Authenticated>
    <Box sx={{display:"flex"}}>
    <SideNav/>
    <Box component="main" sx={{flexGrow:1,p:1,paddingTop:"70px",backgroundColor:"#dfe8f2"}}>

      <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/Invitations' exact element={<Utilisateurs/>}/>
      <Route path='/Historique' exact element={<Historique/>}/>
      <Route path='/Materiels' exact element={<G_Materials/>}/>
      <Route path='/Utilisateurs' element={<Utilisateurs_PE/>}></Route>
      <Route path='/Indisponible' element={<Material_disp/>}></Route>
      
      </Routes>
    </Box>
    </Box>
    </Authenticated>
  )
}
