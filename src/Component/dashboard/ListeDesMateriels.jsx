import { Alert, Avatar, Box, Button, Grid, IconButton, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
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
    const [Materials, setMaterials] = React.useState([]);
    const tableCustomStyles = {
        headCells: {
          style: {
            
            fontWeight: 'bold',
            backgroundColor: '#97adc7'
          },
        },}

        useEffect(() => {
            fetch('http://localhost:8080/api/v1/auth/GetMaterials', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    //message
                    //setmessage(data.message)
                    console.log('Success:', data);
                    setMaterials(data);
                }
                )
                .catch((error) => {
                    console.error('Error:', error);
                }
                );
          }, []);
        

    // const Data=[
    //     {
    //         Image:image1,
    //         Sku:"12365489",
    //         Titre:"Arduino",
    //         Description:"arduino mrigl",
    //         Departement:"informatique",
    //         disponibilité:true,
    //     },
        
    // ];
    const columns =[
        {
            name:"Photo",
            width:"250px",
            selector:row=><Avatar src={row.images[0].image}  style={{width:"150px",height:"150px",margin:1}} />,
        },
        {
            name:"SKU",
            selector:row=>row.sku,
        },
        {
            name:"Titre",
            selector:row=>row.titre,
        },
        {
            name:"Description",
            selector:row=>row.description,
            
        },
        {
            name:"Departement",
            selector:row=>row.departement,
            
        },
        {
            name:"Disponibilité",
            selector:row=>{return row.disponible ? "disponible":"indisponible"; },
            
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
        <Typography  variant='h5' m={3} style={{textAlign:"center"}}> <ManageAccountsIcon sx={{scale:1.2}}/> Les Materiels</Typography>
        
        {message && 
            (<>
            
            <Alert sx={{m:2}} variant="outlined" severity="success"> {message}</Alert>
           
            </>)
            }
    
        <DataTable columns={columns} data={Materials} pagination fixedHeader responsive striped customStyles={tableCustomStyles} />
    </Paper>
       
    </Grid>
    
    
    
   
    </Grid>
  )
}