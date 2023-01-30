import { Alert, AppBar, Avatar, Box, Button, Dialog, DialogContent, DialogTitle, Grid, IconButton, Paper, Slide, Toolbar, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import image1 from '../../Images/ensaf.jpg';
import { width } from '@mui/system';
import emailjs from '@emailjs/browser';
import { RawOff } from '@mui/icons-material';
import StringAvatar from '../StringAvatar';
import ImageUploader from './ImageUploader';
import AddMaterial from './AddMaterial';
import CloseIcon from '@mui/icons-material/Close';
import store from '../Redux/store';

export default function ListeDesMateriels() {
    const [message, setmessage] = React.useState('');
    const [Materials, setMaterials] = React.useState([]);
    const [modif,setModif]=useState([]);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = (e) => {
        setOpen(true);
        setModif(e);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const tableCustomStyles = {
        headCells: {
          style: {
            
            fontWeight: 'bold',
            backgroundColor: '#97adc7'
          },
        },}

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
            name:"Quantité",
            selector:row=>row.quantite,
            
        },
        {
            name:"Disponibilité",
            selector:row=>{return row.disponible ? "disponible":"indisponible"; },
            
        },
        {
            name:"Action",
            width:"300px",
            selector:row=>
            (<Box sx={{display:"flex"}}>
            <Button color='success' variant='contained' sx={{marginX:"20px"}} onClick={(e)=>{handleClickOpen(row)}}>Modifier</Button>
            <Button color='error' variant='contained'>Supprimer</Button>
            </Box>
            )
        },
        
        
    ]
    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
      });
      const handleSubmit=()=>{
        console.log(store.getState().Material)
      }
   
  return (
    
    <Grid container spacing={1} style={{width:"100vw",height:"100vh"}} >
    
    <Grid xs={12}>
    
        <Typography  variant='h5' m={3} style={{textAlign:"center"}}> <ManageAccountsIcon sx={{scale:1.2}}/> Les Materiels</Typography>
        
        {message && 
            (<>
            
            <Alert sx={{m:2}} variant="outlined" severity="success"> {message}</Alert>
           
            </>)
            }
    
        <DataTable columns={columns} data={Materials} pagination fixedHeader responsive striped customStyles={tableCustomStyles} />
        <Dialog
        open={open}
        TransitionComponent={Transition}
        fullScreen
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Modifier Materiel
            </Typography>
            <Button autoFocus variant='contained' style={{background:'green'}} onClick={handleSubmit}>
              Modifier
            </Button>
          </Toolbar>
        </AppBar>
        
        <DialogContent>
        <Grid container xs={12}>
            <Grid item xs={5}><ImageUploader images={modif.images} /></Grid>
            
            <Grid item xs={7}><AddMaterial Materiels={modif} /></Grid>
            
        </Grid>
        </DialogContent>
        
      </Dialog>
       
    </Grid>
    
    
    
   
    </Grid>
  )
}