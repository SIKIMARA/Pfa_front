import { Box, Button, ButtonGroup, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { WithContext as ReactTags } from 'react-tag-input';
import store from '../Redux/store';
import { updateCount, updateDepartement, updateDescription, updateSku, updateTags, updateTitre, updateUser } from '../Redux/userSlice';
import './style.css'
export default function AddMaterial (props) {
  const dispatch=useDispatch();
    
    const [tags,setTags]=useState([]);
    const [count,setCount]=useState(0);
    console.log(store.getState().Material.sku)
    const [materiels,setMateriels]=useState([]);
    useEffect(()=>{
      if(props.Materiels!=null){
        setMateriels(props.Materiels)
        console.log(props.Materiels)
        setTags(props.Materiels.tags.split(',').map((e)=>{return{id:e,text:e}}))
        console.log(props.Materiels.tags.split(',').map((e)=>{return{id:e,text:e}}))
        setCount(props.Materiels.quantite)
        dispatch(updateDescription((props.Materiels.description)))
        dispatch(updateTitre((props.Materiels.titre)))
        dispatch(updateSku((props.Materiels.sku)))
        
      }
    },[])
    useEffect(()=>{
      dispatch(updateCount( count))
      
      dispatch(updateTags( tags.map((e)=>e.id).join(",")))
      console.log(tags)
    },[count,tags])
    
      const handleDelete = i => {
        setTags(tags.filter((tag, index) => index !== i));
        
      };
    
      const handleAddition = tag => {
        setTags([...tags, tag]);
        
      };
    
      const handleDrag = (tag, currPos, newPos) => {
        const newTags = tags.slice();
    
        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);
    
        // re-render
        setTags(newTags);
      };
    
      const handleTagClick = index => {
        console.log('The tag at index ' + index + ' was clicked');
      };
  return (
    <Box sx={{paddingLeft:10,marginLeft:10,borderLeft:"1px solid grey"}}>
        <Typography style={{fontWeight:"bold",marginTop:3}}>SKU : </Typography>
        <TextField id="outlined-basic"   variant="outlined" fullWidth value={materiels.sku}  onChange={(e)=>{setMateriels((data)=>{return {...data,sku:e.target.value}});dispatch(updateSku((e.target.value)))}}/>
        <Typography style={{fontWeight:"bold",marginTop:3}}>Titre : </Typography>
        <TextField id="outlined-basic"  variant="outlined" fullWidth value={materiels.titre}  onChange={(e)=>{setMateriels((data)=>{return {...data,titre:e.target.value}});dispatch(updateTitre((e.target.value)))}}/>
        <Typography style={{fontWeight:"bold",marginTop:3}}>Description : </Typography>
        <TextField
          id="outlined-multiline-static"
          multiline
          rows={4}
          fullWidth
          value={materiels.description}  
          onChange={(e)=>{setMateriels((data)=>{return {...data,description:e.target.value}});dispatch(updateDescription((e.target.value)))}}
          
        />
        <Typography style={{fontWeight:"bold",marginTop:3}}>Departement : </Typography>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={store.getState().Material.departement}  
          onChange={(e)=>{setMateriels((data)=>{return {...data,departement:e.target.value}});dispatch(updateDepartement((e.target.value)))}}
        >
          <MenuItem value="informatique">informatique</MenuItem>
          <MenuItem value="mecanique">mecanique</MenuItem>
          
        </Select>
        <Typography style={{fontWeight:"bold",marginTop:5}}>Quantité : </Typography>
        <ButtonGroup style={{margin:"20px 0px"}}>
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
        <Typography style={{fontWeight:"bold",marginTop:3}}>Keywords : </Typography>
        <ReactTags
          tags={tags}
          
          //handleInputChange={(e)=>{dispatch(updateTags(tags))}}
          handleDelete={handleDelete}
          handleAddition={handleAddition}
          handleDrag={handleDrag}
          handleTagClick={handleTagClick}
          inputFieldPosition="bottom"
        />

        

    </Box>
  )
}
