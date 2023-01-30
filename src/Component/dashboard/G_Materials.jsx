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
    const [message, setmessage] = React.useState({type:'',message:''});
    
   const submitHandler=()=>{
    const b=Object.values(store.getState().Material).every(value => {
      if (value==="") {
        setmessage({type:'warning',message:'field is empty'})
       return false;
      }
      return true;
      });
    if(b){
    fetch('http://localhost:8080/api/v1/auth/AddMaterials', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([store.getState().Material]),
    })
      .then((data) => {
        //message
        setmessage({type:'success',message:'materiel est ajouté'})
        console.log('Success:', data);
      }
      )
      .catch((error) => {
        console.error('Error:', error);
      }
      );
   }}
    
  return (
    
    <Box >
        <Typography variant='h6' style={{textAlign:"center",fontWeight:"bold",margin:"10px auto"}}>Gestion Des Materiels</Typography>
    
    <Paper elevation={6} style={{padding:"20px",margin:20}} >

        <Typography  variant='h4' m={3} style={{textAlign:"center",fontWeight:"bold"}}>Ajouter Materielle </Typography>       
        {message && 
            (<>
            
            <Alert sx={{m:2}} variant="outlined" severity={message.type}> {message.message}</Alert>
           
            </>)
            } 
        <Grid container xs={12}>
            <Grid item xs={5}><ImageUploader/></Grid>
            <Divider/>
            <Grid item xs={7}><AddMaterial /></Grid>
            <Grid item xs={12} style={{display:"flex",justifyContent:"center"}}>
                <Button sx={{margin:5}} variant="contained" size='large' endIcon={<PrecisionManufacturingIcon />} onClick={submitHandler}> Ajouter Materiel</Button>
            </Grid>
        </Grid>
       
    </Paper>   

    
        <ListeDesMateriels/>
    
    
    
    
   
    </Box>
  )
}