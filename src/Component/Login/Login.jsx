import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Authenticated from './Authenticated';
import { useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ensaf from "../../Images/ensaf.jpeg"
import usmba from "../../Images/USMBA.png"
import zIndex from '@mui/material/styles/zIndex';
import { useDispatch } from 'react-redux';
import { setRole } from '../Redux/roleSlice'; 
import { Alert, Divider } from '@mui/material';
import Header from '../Header/Header';
import { useNavigate } from 'react-router-dom';



const theme = createTheme();

export default function Login() {
  const dispatch = useDispatch();
  
  //message
  const navigate =useNavigate();
  const [message, setmessage] = React.useState('');
  const [Error,setError]=React.useState('');
  //const [Role,setRole]=React.useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setError("");
    setmessage("");
    const values ={
      email: data.get('email'),
      password: data.get('password'),
    }
    //////// fetching data to the backend
    fetch('http://localhost:8080/api/v1/auth/authenticate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((data) => {
        //message
        setmessage(data.message)
        if(data.role==="ENSEIGNANT"){
          dispatch(setRole(data.role))
          navigate("/Enseignant")
        }
        if(data.role==="ETUDIANT"){
          dispatch(setRole(data.role))
          navigate("/Etudiant")
        }
        if(data.role==="ADMIN"){
          dispatch(setRole(data.role))
          navigate("/Dashboard")
        }
        
        console.log('Success:', data);
        
      }
      )
      .catch((error) => {
        console.error('Error:', error);
        setError('Error : Password or Email Incorrect')
      }
      );
  };
const Role = useSelector(state => state.role);
console.log(Role)
  
  


  return (
    <Authenticated>
    <ThemeProvider theme={theme}>
        
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
         lg={7}
          sx={{
            backgroundImage:`url(${ensaf})`,
            backgroundSize: "cover",
            alignItems: "center",
            backgroundRepeat: "no-repeat",          
            position: "relative",         
            display: { xs: 'none', sm: 'none', md: 'none',lg:"flex" } ,
            justifyContent: "center",
            zIndex:2,
            
            "&::after":{
                    backgroundColor: "#000",
                    content: '" "',
                    height: "100%",
                    left: 0,
                    opacity: 0.6,
                    position: "absolute",
                    top: 0,
                    width: "100%",
                    zIndex:1,
            }
          }
          
        }
        >
            <img src={usmba} alt="" style={{zIndex:2,width:"200px" ,height:"250px",paddingRight:"20px"}} /> 
            
            <Typography sx={{color:"white",fontSize:"60px",fontWeight:"bold",width:"400px",zIndex:2,paddingLeft:"30px",borderLeft:"1px solid white"}}>GESTION D'INVENTAIRE</Typography>
        </Grid>
        
        <Grid item xs={12} sm={12} lg={5} component={Paper} elevation={6} square>

          
          
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {
                message && <Alert variant="outlined" severity="info">
                {message} </Alert>}
              
            
            {Role=="guest" &&  <Alert variant="outlined" severity="success">
                Login succesful
              </Alert>}
            
            {
              Error && <Alert variant="outlined" severity="error">
              {Error}
            </Alert>
            }
            
            
            
            <Typography component="h1" variant="h4" p={2}>
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                
                <Grid item>
                  <Link href="/Register" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
    </Authenticated>
  );
}