import { Alert, Box, Button, Divider, Grid, IconButton, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { width } from '@mui/system';
import emailjs from '@emailjs/browser';
import ImageUploader from './ImageUploader';
import DropzoneAreaExample from './ImageUploader';
import AddMaterial from './AddMaterial';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import store from '../Redux/store';
import ListeDesMateriels from './ListeDesMateriels';

export default function G_Materials() {
    const [message, setmessage] = React.useState('');
    const [pendingUsers, setpendingUsers] = React.useState([]);
    const tableCustomStyles = {
        headCells: {
          style: {
            
            fontWeight: 'bold',
            backgroundColor: '#97adc7'
          },
        },}
   

    const Data=[
        {
            Nom:"Bougarrani",
            Prenom:"Idriss",
            Email:"bougarrani.idriss@usmba.ac.ma",
            Role:"Professeur"
        },
        {
            Nom:"Bougarrani",
            Prenom:"Idriss",
            Email:"bougarrani.idriss@usmba.ac.ma",
            Role:"Etudiant"
        }
    ];
    const columns =[
        {
            name:"Nom",
            selector:row=>row.firstname,
        },
        {
            name:"Prenom",
            selector:row=>row.lastname,
        },
        {
            name:"Email",
            selector:row=>row.email,
            
        },
        {
            name:"Role",
            selector:row=>row.role,
        },
        {
            name:"Action",
            selector:row=>
            (<Box >
            <IconButton color='success' onClick={(e)=>{}}><CheckCircleIcon/></IconButton>
            <IconButton color='error' onClick={(e)=>{}}><RemoveCircleIcon/></IconButton>
            </Box>
            )
        },
        
        
    ]
    
    
  return (
    
    <Box >
        <Typography variant='h6' style={{textAlign:"center",fontWeight:"bold",margin:"10px auto"}}>Gestion Des Materiels</Typography>
    
    <Paper elevation={6} style={{padding:"20px",margin:20}} >

        <Typography  variant='h4' m={3} style={{textAlign:"center",fontWeight:"bold"}}>Ajouter Materielle </Typography>       
        {message && 
            (<>
            
            <Alert sx={{m:2}} variant="outlined" severity="success"> {message}</Alert>
           
            </>)
            } 
        <Grid container xs={12}>
            <Grid item xs={5}><ImageUploader/></Grid>
            <Divider/>
            <Grid item xs={7}><AddMaterial /></Grid>
            <Grid item xs={12} style={{display:"flex",justifyContent:"center"}}>
                <Button sx={{margin:5}} variant="contained" size='large' endIcon={<PrecisionManufacturingIcon />} onClick={(e)=>{console.log(store.getState().Material)}}> Ajouter Materiel</Button>
            </Grid>
        </Grid>
       
    </Paper>   

    <Paper elevation={6} style={{padding:"20px",margin:20}}>
        <ListeDesMateriels/>
    </Paper>
    
    
    
   
    </Box>
  )
}