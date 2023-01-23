import { Button, IconButton } from '@mui/material';
import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import DeleteIcon from '@mui/icons-material/Delete';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import { textAlign } from '@mui/system';
import { useDispatch } from 'react-redux';
import { updateImages } from '../Redux/userSlice';

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #3282fc',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  position:"relative",
  padding: 4,
  boxSizing: 'border-box'
};



const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};


export default function ImageUploader(Addfiles) {
  const dispatch=useDispatch();
  const [files, setFiles] = useState([]);
  dispatch(updateImages(files))
  const {getRootProps, getInputProps} = useDropzone({
    accept: {
      'image/*': []
    },
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
      
    }
  });
  
  const thumbs = files.map(file => (
    <div style={{
    background:`url(${file.preview})`,
    backgroundPosition:'center',
    backgroundSize:'cover',
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #3282fc',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    position:"relative",
    padding: 4,
    boxSizing: 'border-box'}} 
    key={file.name}>
      
        
        <IconButton style={{position:"absolute",color:"red"}} onClick={(e)=>{setFiles(files.filter((e)=>{return e!=file;}))}}  aria-label="delete" size="small">
          <DeleteIcon fontSize="inherit" />
        </IconButton>

    </div>
  ));

 

  return (
    <section className="container" style={{paddingTop:"100px"}}>
      <div {...getRootProps({className: 'dropzone'})} style={{border:"3px solid #3282fc",padding:20,background:"#d4e5ff",width:"100%"}}>
        <input {...getInputProps()}  />
        <div style={{textAlign:"center"}}><PermMediaIcon fontSize='large'/>
        <h4>Importer Les Photos</h4></div>
        
      </div>
      <aside style={thumbsContainer}>
        {thumbs}
      </aside>
    </section>
  );
}

