import React from 'react'
import { useParams } from 'react-router-dom'
import Authenticated from '../Login/Authenticated'
import ensaf from '../../Images/Arduino.jpg';
import Carousel from 'react-elastic-carousel'
import  { useRef } from "react";
import { Button, ButtonGroup, Divider, Grid, TextField, Typography } from '@mui/material';
import ScienceIcon from '@mui/icons-material/Science';
import { useState } from 'react';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { Box } from '@mui/system';

const Data=[
  {
      id:1,
      image:'../../Images/Arduino.jpg',
      images:'',
      sku:'1223542366',
      titre:'Arduino Uno R3',
      description:"This version is optimized in the original version to ensure consistent and compatible with the original, but also easy to use Increase the pin socket, to facilitate the use of DuPont line",
      departement:"informatique",
      disponible :true,
      motClés:["informatique","arduino","hardware","embarqué"]
  },]
export default function MaterialDetails() {
  const [count,setCount]=useState(0);
  const carouselRef = useRef(null);
  const {id}=useParams();
  return (
    
    <Grid container xs={12} sx={{height:"100vh",alignItems:"center"}}>
    <Grid item xs={7}>
    <Carousel 
     ref={carouselRef}
     enableAutoPlay
     showArrows={false}
     outerSpacing={30}
     autoPlaySpeed={1000}
     itemsToShow={1}
     onNextEnd={({ index }) => {
      clearTimeout(1000);
      if (index + 1 === 2) {
        if (carouselRef?.current?.goTo) {
          setTimeout(() => {
            if (carouselRef?.current?.goTo) {
              carouselRef.current.goTo(0);
            }
          }, 2000);
        }
      }
    }}
       >
      <img src={ensaf} style={{height:"400px",width:"500px"}} alt="" />
      <img src={ensaf} style={{height:"400px",width:"500px"}} alt="" />
      <img src={ensaf} style={{height:"400px",width:"500px"}} alt="" />
      <img src={ensaf} style={{height:"400px",width:"500px"}} alt="" />
</Carousel>
</Grid>
<Divider/>
<Grid item xs={5} padding={5} sx={{borderLeft:"1px solid #878787",fontFamily:"poppins"}}>
  <Typography><span style={{fontWeight:"bold"}}>SKU</span> : {Data[0].sku}</Typography>
  <Typography variant='h3' style={{textAlign:"center" ,fontWeight:"bold",fontFamily:"poppins"}}> {Data[0].titre}</Typography>
  <Typography variant='h7' 
  style={{textAlign:"center" ,fontFamily:"poppins",display:"flex",alignItems:"center",marginTop:20,color:"#028ec9"}}
  ><ScienceIcon/> <span style={{fontWeight:"bold"}}>Departement</span> :  {Data[0].departement}</Typography>
  <Grid style={{display:"flex",margin:20}} >
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

      <Button variant="contained" size='large' endIcon={<LocalGroceryStoreIcon/>} style={{fontWeight:"bold"}}>Add To Basket</Button>
      </Grid>
      <Typography variant='h7' 
      style={{textAlign:"center" ,fontFamily:"poppins",display:"flex",alignItems:"center",marginTop:20}}
      > <span style={{fontWeight:"bold"}}>Description :</span> </Typography>
      <Typography variant='h7' 
      style={{fontFamily:"poppins",}}
      > {Data[0].description} </Typography>
      <Typography variant='h7' 
      style={{textAlign:"center" ,fontFamily:"poppins",display:"flex",alignItems:"center",marginTop:20}}
      > <span style={{fontWeight:"bold"}}>Mot clés :</span> </Typography>
      <Box sx={{display:"flex",flexWrap:"wrap"}}>
      {Data[0].motClés.map((e)=>{
        return <div style={{margin:10,padding:10,background:"#028ec9",color:"white",borderRadius:10}}>{e}</div>
      })}
      </Box>
  

</Grid>

</Grid>
   
  )
}
