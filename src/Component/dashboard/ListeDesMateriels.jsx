import { Alert, Avatar, Box, Button, Grid, IconButton, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import image1 from '../../Images/ensaf.jpg';
import { width } from '@mui/system';
import emailjs from '@emailjs/browser';
import { RawOff } from '@mui/icons-material';
import StringAvatar from '../StringAvatar';

export default function ListeDesMateriels() {
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
            Image:image1,
            Sku:"12365489",
            Titre:"Arduino",
            Description:"arduino mrigl",
            Departement:"informatique",
            disponibilité:true,
        },
        
    ];
    const columns =[
        {
            name:"Photo",
            width:"250px",
            selector:row=><Avatar src={row.Image}  style={{width:"150px",height:"150px",margin:1}} />,
        },
        {
            name:"SKU",
            selector:row=>row.Sku,
        },
        {
            name:"Titre",
            selector:row=>row.Titre,
        },
        {
            name:"Description",
            selector:row=>row.Description,
            
        },
        {
            name:"Departement",
            selector:row=>row.Departement,
            
        },
        {
            name:"Disponibilité",
            selector:row=>{return row.disponibilité ? "disponible":"indisponible"; },
            
        },
        {
            name:"Action",
            width:"300px",
            selector:row=>
            (<Box sx={{display:"flex"}}>
            <Button color='success' variant='contained' sx={{marginX:"20px"}}>Modifier</Button>
            <Button color='error' variant='contained'>Supprimer</Button>
            </Box>
            )
        },
        
        
    ]
   
  return (
    
    <Grid container spacing={1} style={{width:"100vw",height:"100vh"}} >
    
    <Grid xs={12}>
    <Paper style={{padding:"20px",borderRadius:"20px"}}>
        <Typography  variant='h5' m={3} style={{textAlign:"center"}}> <ManageAccountsIcon sx={{scale:1.2}}/> LES DEMANDES D'INSCRIPTIONS</Typography>
        
        {message && 
            (<>
            
            <Alert sx={{m:2}} variant="outlined" severity="success"> {message}</Alert>
           
            </>)
            }
    
        <DataTable columns={columns} data={Data} pagination fixedHeader responsive striped customStyles={tableCustomStyles} />
    </Paper>
       
    </Grid>
    
    
    
   
    </Grid>
  )
}