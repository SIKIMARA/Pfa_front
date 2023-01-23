import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ensaf from '../../Images/Arduino.jpg';
import QrCodeIcon from '@mui/icons-material/QrCode';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { Box } from '@mui/system';
export default function Material(props) {
  return (
    <Card sx={{ maxWidth: 335,margin:5 }} elevation={12}>
      <CardMedia
        sx={{ height: 240 }}
        
        
      >
        <img src={props.infos.image} style={{width:"100%",height:"100%"}} alt="" />
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" sx={{fontWeight:"bold"}} component="div">
          {props.infos.titre}
        </Typography>
        <Typography gutterBottom variant="h7" sx={{fontWeight:"medium",display:'flex',alignItems:"center"}} component="div">
         <QrCodeIcon/> : {props.infos.sku}
        </Typography>
        
        <Typography variant="body2" color="text.secondary">
          {props.infos.description}
        </Typography>
        <Box sx={{display:'flex',margin:1}}>
          {props.infos.disponible ? <Typography sx={{backgroundColor:"green",color:'white',borderRadius:10,padding:1,margin:1,fontSize:"15px"}}>Disponible</Typography> : <Typography sx={{backgroundColor:"red",color:'white',borderRadius:10,padding:1,margin:1,fontSize:"15px"}}>Indisponible</Typography> }
          <Typography sx={{backgroundColor:"Black",color:'white',borderRadius:10,padding:1,margin:1,fontSize:"15px"}}>{props.infos.departement}</Typography>
        </Box>
      </CardContent>
      <CardActions style={{display:"flex",justifyContent:"center"}}>
        {(props.infos.disponible && localStorage.getItem('role')=="ETUDIANT")? <Button size="medium" variant='contained' href= {`/Material/${props.infos.id}`} style={{fontWeight:"bold",textAlign:"center"}} endIcon={<LocalGroceryStoreIcon/>}>Plus Details</Button> : null}
      </CardActions>
    </Card>
  );
}