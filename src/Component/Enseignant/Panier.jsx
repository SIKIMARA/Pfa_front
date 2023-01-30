import { Button, ButtonGroup, Grid, Paper, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

export default function Panier() {
    const [count,setCount]=useState(0);
    const [Materials, setMaterials] = React.useState([]);
    useEffect(() => {
        fetch(`http://localhost:8080/api/v1/auth/panniers/${localStorage.getItem("id")}`, {
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
    //         image:"../image1",
    //         titre:"arduino",
    //         quantité:5
    //     },
    //     {
    //         image:"../image2",
    //         titre:"resistance",
    //         quantité:3
    //     },
    //     {
    //         image:"../image1",
    //         titre:"arduino 100",
    //         quantité:7
    //     }
    // ]
  return (
    <Paper sx={{width:"100vw",height:"100vh",background:" rgb(0,0,255,0.1)"}}>
        <Typography variant='h4' style={{padding:30,fontWeight:"bold",display:'flex',alignItems:"center",justifyContent:"center"}}><LocalGroceryStoreIcon fontSize='large'/> Panier</Typography>
        {Materials.map((e)=>{
            return(
                <Grid container xs={12} spacing={1} p={5}   style={{borderTop:"1px solid gray",display:'flex',alignItems:'center'}}>
                    <Grid item xs={2}>
                        <img src={e.images[0].image} style={{width:"100px",height:"100px",border:"1px solid black"}} />
                    </Grid>
                    <Grid item xs={3}>
                        <Typography style={{fontWeight:"bold"}}>{e.titre}</Typography>
                    </Grid>
                    <Grid item xs={7}>
                        <div style={{display:'flex',justifyContent:'end'}}>
                            
                            
                            <Button variant='contained' color="error" style={{marginRight:"20px"}} endIcon={<DeleteIcon/>}>Supprimer </Button>
                        </div>
                    </Grid>
                    
                </Grid>
            )

        })}
    <div  >
    <Button variant='contained' size='large'  style={{margin:"30px",background:"#81fa6e"}} href='/'> {"<<"} Retour </Button>
    <Button variant='contained' size='large'  style={{margin:"30px",background:"black"}} href='/reservation'>Reserver Tout</Button>
    </div>
    </Paper>
  )
}
