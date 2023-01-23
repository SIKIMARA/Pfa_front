import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Authenticated from '../Login/Authenticated';
import GroupsIcon from '@mui/icons-material/Groups';
import PersonIcon from '@mui/icons-material/Person';
import InventoryIcon from '@mui/icons-material/Inventory';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import { Grid, Typography } from '@mui/material';
import Statistics from './Statistics';
import { Chart } from './Chart';
import RecentUser from './Recent-Users';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import RecentMateriel from './Recent-Material';
export default function Home() {
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
    <Authenticated>
      <Statistics/>
      <Grid container xs={12} spacing={2} my={2} >
        <Grid item xs={4}>
          <Paper elevation={6}  sx={{background:"white",padding:5}}>
            <Typography variant='h5' style={{fontWeight:"bold",textAlign:"center",marginBottom:"20px"}}>Chart</Typography>
             <Chart/>
          </Paper>
        </Grid>
        <Grid item xs={8}>
        <Paper elevation={6}  sx={{background:"white",padding:5}}>
          <Box style={{display:"flex",justifyContent:"space-between"}}>
          <Typography variant='h5' style={{fontWeight:"bold",textAlign:"start",marginBottom:"20px"}}>Utilisateurs Recents</Typography>
          <Typography  sx={{color:"Primary",textDecoration:'underline',cursor:"pointer",color:"blue"}}  style={{fontWeight:"bold",textAlign:"End",marginBottom:"20px"}}>Voir Plus  </Typography>
          </Box>
          <RecentUser/>
        </Paper>
        </Grid>
      </Grid>
      <Grid container xs={12} spacing={2} my={2} >
        <Grid item xs={6}>
          <Paper elevation={6}  sx={{background:"white",padding:5}}>
          <Box style={{display:"flex",justifyContent:"space-between"}}>
          <Typography variant='h5' style={{fontWeight:"bold",textAlign:"start",marginBottom:"20px"}}>Materiel Recents</Typography>
          <Typography  sx={{color:"Primary",textDecoration:'underline',cursor:"pointer",color:"blue"}}  style={{fontWeight:"bold",textAlign:"End",marginBottom:"20px"}}>Voir Plus  </Typography>
          </Box>
          <RecentMateriel/>
          </Paper>
        </Grid>
        <Grid item xs={6}>
        <Paper elevation={6}  sx={{background:"white",padding:5}}>
          <Box style={{display:"flex",justifyContent:"space-between"}}>
          <Typography variant='h5' style={{fontWeight:"bold",textAlign:"start",marginBottom:"20px"}}>Reservation Recents</Typography>
          <Typography  sx={{color:"Primary",textDecoration:'underline',cursor:"pointer",color:"blue"}}  style={{fontWeight:"bold",textAlign:"End",marginBottom:"20px"}}>Voir Plus  </Typography>
          </Box>
          <RecentUser/>
        </Paper>
        </Grid>
      </Grid>
    
    </Authenticated>
  );
}