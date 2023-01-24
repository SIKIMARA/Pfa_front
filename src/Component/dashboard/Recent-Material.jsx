import { Alert, Avatar, Box, Button, Grid, IconButton, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import StringAvatar from '../StringAvatar';


export default function RecentMateriel() {
    const [Materials, setMaterials] = React.useState([]);
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
    const tableCustomStyles = {
        headCells: {
          style: {
            
            fontWeight: 'bold',
            backgroundColor: '#97adc7'
          },
        },}
    

   
    const columns =[
        {
            name:"image",
            selector:row=><Avatar src={row.images[0].image} />
        }
        ,
        {
            name:"SKU",
            selector:row=>row.sku,
        },
        {
            name:"Titre",
            selector:row=>row.titre,
        },
        
        
        
        
    ]
    

   
  return (
    
   
    
        <DataTable columns={columns} data={Materials}  fixedHeader responsive striped customStyles={tableCustomStyles} style={{color:'black'}} />
    
  )
}