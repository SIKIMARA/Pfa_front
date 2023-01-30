import { Alert, Avatar, Button, ButtonGroup, Divider, Grid, Input, Paper, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import StringAvatar from '../StringAvatar';
import DatePicker from 'react-datetime';
import moment from 'moment';
import 'react-datetime/css/react-datetime.css';
import './Reservation.css'
import React, { useEffect } from 'react'



export default function Reservation() {
  const [message, setmessage] = React.useState({type:'',message:''});
  const [value, setValue] = React.useState(null);

  const [Materials, setMaterials] = React.useState([]);
  const [count, setCount] = React.useState([]);
  var yesterday = new Date();
  console.log(value)
  const disablePastDt = current => {
    return current.isAfter(yesterday);
  };
  useEffect(()=>{
    setCount(new Array(Materials.length).fill(0))
  },[Materials])
  
  
  
  const tableCustomStyles = {
    headCells: {
      style: {
        
        fontWeight: 'bold',
        backgroundColor: 'black',
        color:'white'
      },
    },}
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
                
                setMaterials(data);
                
            }
            )
            .catch((error) => {
                console.error('Error:', error);
            }
            );
      }, []);
  
    const increment=(index,quantité)=>{
      const array=[...count];
      array[index]=Math.min(array[index]+1,quantité);
      setCount(array)
    }
    const decrement=(index)=>{
      const array=[...count];
      array[index]=Math.max(array[index] - 1, 0)
      setCount(array)
    }
    const submitHandler=()=>{
      console.log(JSON.stringify(
        {
          materialId:Materials[0].id,
          userId:localStorage.getItem("id"),
          quantity:count[0],
          dateRetour:value,
        }))
      for(let i=0;i<Materials.length;i++){
        fetch('http://localhost:8080/api/v1/auth/materials/reserve', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        {
          materialId:Materials[i].id,
          userId:localStorage.getItem("id"),
          quantity:count[i],
          dateRetour:value,
        }
      ),
    })
      .then((data) => {
        //message
        setmessage({type:'success',message:'materiel est ajouté'})
        console.log('Success:', data);
      }
      )
      .catch((error) => {
        console.error('Error:', error);
      }
      );
      }
      
    }
  return (
    <Box sx={{width:'100vw',background:'rgb(0,0,255,0.1)'}}>
      <Grid xs={12} style={{paddingTop:15,textAlign:'center'}}>
        <Typography variant='h4' style={{fontWeight:"bold"}}>Reservation</Typography>
      </Grid>
      <Grid container xs={12} spacing={15} padding={2}>
        <Grid item xs={5}>

          <Paper sx={{background:"white",width:"100%",display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',padding:5}} elevation={5}>
          {message && 
            (<>
            
            <Alert sx={{m:2}} variant="outlined" severity={message.type}> {message.message}</Alert>
           
            </>)
            } 
            <StringAvatar string={`${localStorage.getItem('username')}`}  />
            <Typography  style={{fontWeight:"bold",marginTop:10}}>Username</Typography>
            <TextField id="outlined-disabled"   disabled   fullWidth defaultValue={localStorage.getItem("username")}   />
            <Typography  style={{fontWeight:"bold",marginTop:10}}>Email</Typography>
            <TextField id="outlined-disabled"   disabled   fullWidth defaultValue={localStorage.getItem("email")}   />
            <Typography  style={{fontWeight:"bold",marginTop:10}}>Role</Typography>
            <TextField id="outlined-disabled"    disabled   fullWidth defaultValue={localStorage.getItem("role")}   />
            <Typography  style={{fontWeight:"bold",marginTop:10}}>Date Retour</Typography>
            <DatePicker
              timeFormat={false}
              inputProps={{className:'datetime'}}
              isValidDate={disablePastDt}
              onChange={(e)=>setValue(e.format("YYYY-MM-DD"))}
              value={value}
            />
            {/* <input type="date" name="" value={value} onChange={(e)=>setValue(e)} id="" /> */}

            {
              value==null ? <Button variant='contained' fullWidth size='large' disabled style={{backgroundColor:'black',margin:10}} >Reserver</Button> :<Button variant='contained' fullWidth size='large' onClick={submitHandler}  style={{backgroundColor:'black',margin:10}}>Reserver</Button> 
            }
            
          </Paper>
        </Grid>
        <Grid item xs={7}>
          <Paper sx={{background:"white",width:"100%",display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',padding:5}} elevation={5}>
            
            <Typography variant='h4'  style={{fontWeight:"bold",margin:'20px 0px'}}>Les Materiels Reservés</Typography>
            {Materials.map((e,index)=>{
            return(
              
                <Grid container xs={12} spacing={4}   style={{display:'flex',padding:'20px 0px',borderBottom:'1px solid gray',alignItems:'center'}}>
                  
                    <Grid item xs={2}>
                        <img src={e.images[0].image} style={{width:"100px",height:"100px",border:"3px solid rgb(7, 123, 246)"}} />
                    </Grid>
                    <Grid item xs={3}>
                        <Typography style={{fontWeight:"bold"}}>{e.titre}</Typography>
                    </Grid>
                    <Grid item xs={7} style={{display:'flex',flexDirection:'column',alignItems:"end"}}>
                        
                          <Typography style={{marginRight:'20px',fontWeight:'bold'}}>disponible : {e.quantite} </Typography>
                        <ButtonGroup >
                              <Button
                                  aria-label="reduce"
                                  variant='contained'
                                  sx={{background:'black'}}
                                  onClick={()=>{decrement(index)}}
                              >
                                  -
                              </Button>
                              <TextField id="outlined-basic"   value={count[index]} style={{width:"50px"}} />
                              <Button
                                  aria-label="increase"
                                  variant='contained'
                                  sx={{background:'black'}}
                                  onClick={() => {
                                  increment(index,e.quantite);
                                  }}
                                  
                              >
                                  +
                              </Button>
                              </ButtonGroup>
                        
                    </Grid>
                    
                </Grid>
            )

        })}
          </Paper>
        </Grid>
      </Grid>
    </Box> 
  )
}
