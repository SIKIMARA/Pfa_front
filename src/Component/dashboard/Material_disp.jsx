import { Alert, Avatar, Box, Button, Grid, IconButton, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'

import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';


export default function Material_disp() {
    const [message, setmessage] = React.useState({type:'',message:''});
    const [Materials, setMaterials] = React.useState([]);
    const tableCustomStyles = {
        headCells: {
          style: {
            
            fontWeight: 'bold',
            backgroundColor: '#97adc7'
          },
        },}

        useEffect(() => {
            fetch('http://localhost:8080/api/v1/auth/materials/indisponible', {
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
            name:"Id",
            selector:row=>row.id,
        },
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
            name:"Action",
            width:"300px",
            selector:row=>
            (<Box sx={{display:"flex"}}>
            <Button color='success' variant='contained' oncl sx={{marginX:"20px"}} onClick={(e)=>{HandleSubmit(row.id)}}>Rendre Disponible</Button>
           
            </Box>
            )
        },
        
        
    ]
    const HandleSubmit=(e)=>{
        
            fetch(`http://localhost:8080/api/v1/auth/materials/available/${e}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                
                .then((data) => {
                    
                    setmessage({type:'success',message:'Material is available again'})
                    setTimeout(() => {
                        window.location.reload()
                    }, 2000);
                   

                }
                )
                .catch((error) => {
                    setmessage({type:'error',message: 'error'});
                    console.log(error)
                }
                );
          
    }
   
  return (
    
    <Grid container spacing={1} style={{width:"100vw",height:"100vh"}} >
    
    <Grid xs={12}>
    <Paper style={{padding:"20px",borderRadius:"20px"}}>
        <Typography  variant='h5' m={3} style={{textAlign:"center"}}> <ManageAccountsIcon sx={{scale:1.2}}/> Les Materiels Indisponible</Typography>
        
        {message && 
            (<>
            <Alert sx={{m:2}} variant="outlined" severity={message.type}> {message.message}</Alert>
            </>)
            }
    
        <DataTable columns={columns} data={Materials} pagination fixedHeader responsive striped customStyles={tableCustomStyles} />
    </Paper>
       
    </Grid>
    
    
    
   
    </Grid>
  )
}