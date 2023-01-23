import { Button, ButtonGroup, Grid, Paper, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

export default function Panier() {
    const [count,setCount]=useState(0);
    const Data=[
        {
            image:"../image1",
            titre:"arduino",
            quantité:5
        },
        {
            image:"../image2",
            titre:"resistance",
            quantité:3
        },
        {
            image:"../image1",
            titre:"arduino 100",
            quantité:7
        }
    ]
  return (
    <Paper sx={{width:"100vw",height:"100vh",background:"#ebf3ff"}}>
        <Typography variant='h4' style={{padding:30,fontWeight:"bold",display:'flex',alignItems:"center",justifyContent:"center"}}><LocalGroceryStoreIcon fontSize='large'/> Panier</Typography>
        {Data.map((e)=>{
            return(
                <Grid container xs={12} spacing={1} p={5}   style={{borderTop:"1px solid gray",display:'flex',alignItems:'center'}}>
                    <Grid item xs={2}>
                        <img src={e.image} style={{width:"100px",height:"100px",border:"1px solid black"}} />
                    </Grid>
                    <Grid item xs={3}>
                        <Typography style={{fontWeight:"bold"}}>{e.titre}</Typography>
                    </Grid>
                    <Grid item xs={7}>
                        <div style={{display:'flex',justifyContent:'end'}}>
                            <ButtonGroup style={{marginRight:"20px"}}>
                                    <Button
                                        aria-label="reduce"
                                        variant='contained'
                                        onClick={() => {
                                        setCount(Math.max(count - 1, 0));
                                        }}
                                    >
                                        -
                                    </Button>
                                    <TextField id="outlined-basic"   value={count} style={{width:"50px"}} />
                                    <Button
                                        aria-label="increase"
                                        variant='contained'
                                        onClick={() => {
                                        setCount(count + 1);
                                        }}
                                    >
                                        +
                                    </Button>
                            </ButtonGroup>
                            <Button variant='contained' style={{marginRight:"20px"}} endIcon={<LocalGroceryStoreIcon/>}>Reserver</Button>
                            <Button variant='contained' color="error" style={{marginRight:"20px"}} endIcon={<DeleteIcon/>}>Supprimer </Button>
                        </div>
                    </Grid>
                    
                </Grid>
            )

        })}
    <div  >
    <Button variant='contained' size='large'  style={{margin:"30px",background:"#81fa6e"}}> {"<<"} Retour </Button>
    <Button variant='contained' size='large'  style={{margin:"30px",background:"black"}}>Reserver Tout</Button>
    </div>
    </Paper>
  )
}
