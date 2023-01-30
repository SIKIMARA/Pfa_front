import { Autocomplete, Avatar, Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import React, { useEffect, useRef, useState } from 'react'
import SearchBar from './SearchBar';
import SearchIcon from '@mui/icons-material/Search';
import ListMaterials from './ListMaterials';

export default function Filter() {
    const [search,setSearch]=useState('');
    const inputElement = useRef();
    const [departement,setDepartement]=useState("informatique")
    const [disponibilité,setDisponibilité]=useState(true)

    const [Materials,setMaterials]=useState([]);
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
                setMaterials(data.map((e)=>{return {title:e.titre}}));
            }
            )
            .catch((error) => {
                console.error('Error:', error);
            }
            );
      }, []);
      const submitHandler=()=>{
            setSearch(inputElement.current.value)
      }
  return (
    <Box>
        <Paper elevation={6} sx={{m:4,background:"#e8f2fa",padding:3}}>
            <Grid container xs={12} spacing={2}>
            <Grid item xs={12}>
                <Typography  sx={{fontWeight:"bold",fontSize:"20px",display:"flex",alignItems:"center",justifyContent:"center"}}><FilterAltIcon /> Filter</Typography>
            </Grid>
            <Grid item xs={10}>
                <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable 
                
                options={Materials.map((option) => option.title)}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Search input"
                        InputProps={{
                        ...params.InputProps,
                        type: 'search',
                        }}
                        inputRef={inputElement}
                        
                    />
                    )}
                    
                />
                
            </Grid>
            <Grid item xs={2} sx={{display:"flex",alignItems:"center"}}>
                <Button variant="contained" size='large' onClick={submitHandler}   endIcon={<SearchIcon/>}>Search</Button>
            </Grid>
            <Grid item xs={6}>
             <FormControl fullWidth>
             <InputLabel id="demo-simple-select-label">Departement</InputLabel>

                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={departement}
                label="Departement"
                onChange={(e)=>{setDepartement(e.target.value)}}
                >
                <MenuItem value={"informatique"}>Informatique</MenuItem>
                <MenuItem value={"mecanique"}>Mecanique</MenuItem>
                
                </Select>
            </FormControl>
            </Grid>
            <Grid item xs={6}>
             <FormControl fullWidth>
             <InputLabel id="demo-simple-select-label">Disponibilité</InputLabel>

                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={disponibilité}
                label="Disponibilité"
                onChange={(e)=>{setDisponibilité(e.target.value)}}
                >
                <MenuItem value={true}>Disponible</MenuItem>
                <MenuItem value={false}>Indisponible</MenuItem>
                
                </Select>
            </FormControl>
            </Grid>
            
            </Grid>
        </Paper>
        <ListMaterials disponibilité={disponibilité} Search={search} departement={departement} />
    </Box>
  )
}
