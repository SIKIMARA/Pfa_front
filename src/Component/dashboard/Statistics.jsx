import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Authenticated from '../Login/Authenticated';
import GroupsIcon from '@mui/icons-material/Groups';
import PersonIcon from '@mui/icons-material/Person';
import InventoryIcon from '@mui/icons-material/Inventory';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import { Typography } from '@mui/material';
export default function Statistics() {
  const Data=[
    {
      titre:"Etudiant",
      nombre:10,
      icone:<GroupsIcon fontSize='large'  color='primary'/>
    },
    {
      titre:"Professeur",
      nombre:20,
      icone:<PersonIcon fontSize='large'  color='primary'/>
    },
    {
      titre:"Materiel",
      nombre:100,
      icone:<InventoryIcon fontSize='large'  color='primary'/>
    },
    {
      titre:"Reservation",
      nombre:200,
      icone:<ShowChartIcon fontSize='large'  color='primary'/>
    },
  ]
  return (
    
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent:"center",
        '& > :not(style)': {
          m: 1,
          width: 220,
          height: 150,
        },
      }}
    >
      
      
      {Data.map((e)=>{
        return  <Paper
                   elevation={3} 
                   sx={{
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"center",
                    alignItems:"center",
                    
                   }}
                >
                  {e.icone}
                  <Typography variant='h6' sx={{fontWeight:"bold"}}>{e.titre}</Typography>
                  <Typography variant='h6' sx={{fontWeight:"bold",color:"green"}}>{e.nombre}</Typography>
                </Paper>
      })}
    </Box>
   
  );
}