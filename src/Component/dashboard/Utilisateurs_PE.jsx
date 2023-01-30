import { Alert, Avatar, Box, Button, Grid, IconButton, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import StringAvatar from '../StringAvatar';


export default function Utilisateurs_PE() {
    const [users,setUsers]=useState([]);
 
    const tableCustomStyles = {
        headCells: {
          style: {
            
            fontWeight: 'bold',
            backgroundColor: '#97adc7'
          },
        },}
    

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
    //     },
    //     {
    //       Nom:"Boufnichel",
    //       Prenom:"Yassine",
    //       Email:"Boufnichel@usmba.ac.ma",
    //       Role:"Etudiant"
    //   },
    //   {
    //     Nom:"Anass",
    //     Prenom:"Benkadi",
    //     Email:"bougarrani@usmba.ac.ma",
    //     Role:"Etudiant"
    // },
    
    // ];

    useEffect(() => {
        fetch('http://localhost:8080/api/v1/auth/users', {
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
                setUsers(data);
            }
            )
            .catch((error) => {
                console.error('Error:', error);
            }
            );
      }, []);
    const columns =[
        {
            name:"image",
            selector:row=><StringAvatar string={`${row.lastname} ${row.firstname}`}/>,
        }
        ,
        {
            name:"Nom",
            selector:row=>row.lastname,
        },
        {
            name:"Prenom",
            selector:row=>row.firstname,
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
            width:"300px",
            selector:row=>
            (<Box sx={{display:"flex"}}>
            
            <Button color='success' style={{marginRight:3}} variant='contained'>Modifier</Button>
            <Button color='error' variant='contained'>Supprimer</Button>
            </Box>
            )
          
        }
        
        
        
    ]
    

   
  return (
    
        <Box sx={{height:"100vh"}}>
        <Typography variant='h4' style={{padding:20,fontWeight:"bold"}}> Utilisateurs</Typography>
        <DataTable columns={columns} data={users}  fixedHeader responsive striped customStyles={tableCustomStyles} style={{color:'black'}} />
        </Box>
    
  )
}