import { Box, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { WithContext as ReactTags } from 'react-tag-input';
import store from '../Redux/store';
import { updateDepartement, updateDescription, updateSku, updateTags, updateTitre, updateUser } from '../Redux/userSlice';
import './style.css'
export default function (props) {
  const dispatch=useDispatch();
    
    const [tags,setTags]=useState([]);
    dispatch(updateTags( tags.map((e)=>e.id).join(",")))
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
        <TextField id="outlined-basic" label="SKU"  variant="outlined" fullWidth   onChange={(e)=>{dispatch(updateSku((e.target.value)))}}/>
        <Typography style={{fontWeight:"bold",marginTop:3}}>Titre : </Typography>
        <TextField id="outlined-basic" label="Titre" variant="outlined" fullWidth  onChange={(e)=>{dispatch(updateTitre((e.target.value)))}}/>
        <Typography style={{fontWeight:"bold",marginTop:3}}>Description : </Typography>
        <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          fullWidth
          onChange={(e)=>{dispatch(updateDescription((e.target.value)))}}
        />
        <Typography style={{fontWeight:"bold",marginTop:3}}>Departement : </Typography>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={store.getState().Material.departement}
          label="Departement"
          onChange={(e)=>{dispatch(updateDepartement((e.target.value)))}}
        >
          <MenuItem value="informatique">informatique</MenuItem>
          <MenuItem value="mecanique">mecanique</MenuItem>
          
        </Select>
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
