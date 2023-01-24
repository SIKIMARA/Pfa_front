import { Alert, Avatar, Box, Button, Grid, IconButton, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import StringAvatar from '../StringAvatar';


export default function Utilisateurs_PE() {
 
    const tableCustomStyles = {
        headCells: {
          style: {
            
            fontWeight: 'bold',
            backgroundColor: '#97adc7'
          },
        },}
    

    const Data=[
        {
            Materiel:"Arduino",
            DateReservation :"11/12/2022",
            DateRetour:"20/01/2023",
            Enseignant:"Yassine Boufnichel"
        }
        
    
    ];
    const columns =[
        
        {
            name:"Materiel",
            selector:row=>row.Materiel,
        },
        {
            name:"Date De Reservation",
            selector:row=>row.DateReservation,
        },
        {
            name:"Date Retour",
            selector:row=>row.DateRetour,
            
        },
        {
            name:"Enseignant",
            selector:row=>row.Enseignant,
        },
        {
            name:"Action",
            width:"200px",
            selector:row=>
            (<Box sx={{display:"flex"}}>
            
            <Button color='error' variant='contained'>Supprimer</Button>
            </Box>
            )
          
        }
        
        
        
    ]
    

   
  return (
    
        <Box sx={{height:"100vh"}}>
        <Typography variant='h4' style={{padding:20,fontWeight:"bold"}}> Historique</Typography>
        <DataTable columns={columns} data={Data}  fixedHeader responsive striped customStyles={tableCustomStyles} style={{color:'black'}} />
        </Box>
    
  )
}