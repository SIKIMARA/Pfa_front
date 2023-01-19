import { Button, Grid, IconButton, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { width } from '@mui/system';

export default function Utilisateurs() {
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
            selector:row=>row.Nom,
        },
        {
            name:"Prenom",
            selector:row=>row.Prenom,
        },
        {
            name:"Email",
            selector:row=>row.Email,
            
        },
        {
            name:"Role",
            selector:row=>row.Role,
        },
        {
            name:"Accepter",
            selector:row=><IconButton color='success' onClick={(e)=>{console.log("accept"+row.Nom)}}><CheckCircleIcon/></IconButton>
        },
        {
            name:"Refuser",
            selector:row=><IconButton color='error' onClick={(e)=>{console.log("reject"+row.Nom)}}><RemoveCircleIcon/></IconButton>
        }
        
    ]


  return (
    
    <Grid container spacing={1} style={{width:"100vw",height:"100vh"}} >
    
    <Grid xs={12}>
    <Paper style={{padding:"20px",borderRadius:"20px"}}>
        <Typography  variant='h5' m={3} style={{textAlign:"center"}}> <ManageAccountsIcon sx={{scale:1.2}}/> LES DEMANDES D'INSCRIPTIONS</Typography>
        
    
    
        <DataTable columns={columns} data={Data} pagination fixedHeader responsive striped customStyles={tableCustomStyles} />
    </Paper>
       
    </Grid>
    
    
    <Grid item xs={6} >
        <Paper style={{padding:"20px",borderRadius:"20px"}}>

        </Paper>
    </Grid>
    <Grid item xs={6} >
        <Paper style={{padding:"20px",borderRadius:"20px"}}>

        </Paper>
    </Grid>
    </Grid>
  )
}
