import { Alert, Avatar, Box, Button, Grid, IconButton, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import StringAvatar from '../StringAvatar';


export default function RecentMateriel() {
 
    const tableCustomStyles = {
        headCells: {
          style: {
            
            fontWeight: 'bold',
            backgroundColor: '#97adc7'
          },
        },}
    

    const Data=[
        {
            Image:"arduino",
            SKU:"1",
            Titre:"Arduino 300 ",
            
        },
        {
            Image:"Resistance",
            SKU:"2",
            Titre:"Resistance 220 ohm",
        },
        
    
    ];
    const columns =[
        {
            name:"image",
            selector:row=><StringAvatar string={`${row.Titre}`} />
        }
        ,
        {
            name:"SKU",
            selector:row=>row.SKU,
        },
        {
            name:"Titre",
            selector:row=>row.Titre,
        },
        
        
        
        
    ]
    

   
  return (
    
   
    
        <DataTable columns={columns} data={Data}  fixedHeader responsive striped customStyles={tableCustomStyles} style={{color:'black'}} />
    
  )
}