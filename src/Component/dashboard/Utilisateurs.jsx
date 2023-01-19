import { Alert, Box, Button, Grid, IconButton, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import Authenticated from '../Login/Authenticated'
import { width } from '@mui/system';
import emailjs from '@emailjs/browser';

export default function Utilisateurs() {
    const [message, setmessage] = React.useState('');
    const [pendingUsers, setpendingUsers] = React.useState([]);
    const tableCustomStyles = {
        headCells: {
          style: {
            
            fontWeight: 'bold',
            backgroundColor: '#97adc7'
          },
        },}
    const fetchPendingUsers = () => {
        fetch('http://localhost:8080/api/v1/auth/users/notapproved', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                //message
                setmessage(data.message)
                console.log('Success:', data);
                setpendingUsers(data);
            }
            )
            .catch((error) => {
                console.error('Error:', error);
            }
            );
    }

    // const Data=[
    //     {
    //         Nom:"Bougarrani",
    //         Prenom:"Idriss",
    //         Email:"bougarrani.idriss@usmba.ac.ma",
    //         Role:"Professeur"
    //     },
    //     {
    //         Nom:"Bougarrani",
    //         Prenom:"Idriss",
    //         Email:"bougarrani.idriss@usmba.ac.ma",
    //         Role:"Etudiant"
    //     }
    // ];
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
            <IconButton color='success' onClick={(e)=>{handleApprove(row.id,row.email,row.lastname)}}><CheckCircleIcon/></IconButton>
            <IconButton color='error' onClick={(e)=>{handleDelete(row)}}><RemoveCircleIcon/></IconButton>
            </Box>
            )
        },
        
        
    ]
    const handleApprove = (id,email,name) => {
        fetch(`http://localhost:8080/api/v1/auth/approve/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.text)
        .then(data => {
            
            setmessage("utilisateur est accepté");
            console.log("user : ")
            
            
            emailjs.send("service_spr627e","template_8gs04cl",{
                    name: name,
                    email: email,
                    },"bnJkkW0WT08mnAyIQ");
            setTimeout(() => {
                fetchPendingUsers();
            }, 1000);
            
        })
        .catch(error => {
            console.log(error);
        })
    }
    const handleDelete = (id) => {
        fetch(`http://localhost:8080/api/v1/auth/users/delete/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.text)
        .then(data => {
            
            setmessage("Utilisateur est supprimé");
            setTimeout(() => {
                fetchPendingUsers();
            }, 1000);
        })
        .catch(error => {
            console.log(error);
        })
    }

    React.useEffect(() => {
        fetchPendingUsers();
    }, [])
  return (
    <Authenticated>
    <Grid container spacing={1} style={{width:"100vw",height:"100vh"}} >
    
    <Grid xs={12}>
    <Paper style={{padding:"20px",borderRadius:"20px"}}>
        <Typography  variant='h5' m={3} style={{textAlign:"center"}}> <ManageAccountsIcon sx={{scale:1.2}}/> LES DEMANDES D'INSCRIPTIONS</Typography>
        
        {message && 
            (<>
            
            <Alert sx={{m:2}} variant="outlined" severity="success"> {message}</Alert>
           
            </>)
            }
    
        <DataTable columns={columns} data={pendingUsers} pagination fixedHeader responsive striped customStyles={tableCustomStyles} />
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
    </Authenticated>
  )
}