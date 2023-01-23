import { Alert, Avatar, Box, Button, Grid, IconButton, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import StringAvatar from '../StringAvatar';


export default function RecentUser() {
 
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
        },
        {
          Nom:"Boufnichel",
          Prenom:"Yassine",
          Email:"Boufnichel@usmba.ac.ma",
          Role:"Etudiant"
      },
      {
        Nom:"Anass",
        Prenom:"Benkadi",
        Email:"bougarrani@usmba.ac.ma",
        Role:"Etudiant"
    },
    
    ];
    const columns =[
        {
            name:"image",
            selector:row=><StringAvatar string={`${row.Nom} ${row.Prenom}`}/>,
        }
        ,
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
        
        
        
    ]
    

   
  return (
    
   
    
        <DataTable columns={columns} data={Data}  fixedHeader responsive striped customStyles={tableCustomStyles} style={{color:'black'}} />
    
  )
}