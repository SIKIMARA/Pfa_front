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
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ensaf from "../../Images/ensaf.jpeg"
import usmba from "../../Images/USMBA.png"
import zIndex from '@mui/material/styles/zIndex';
import { Divider, FormControl, InputLabel, MenuItem, Select } from '@mui/material';



const theme = createTheme();

export default function Register() {
    const [role, setRole] = React.useState('');

    const handleChange = (event) => {
      setRole(event.target.value);
    };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
    lastname:data.get('lastName'),
    firstname:data.get('firstName'),
      email: data.get('email'),
      password: data.get('password'),
      confirmpassword:data.get('confirm-password'),
      role:data.get('Role')
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
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
        
        <Grid item xs={12} sm={12} lg={5} component={Paper} elevation={6}  square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          
          <Typography component="h1" variant="h4">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirm-password"
                  label="Confirm Password"
                  type="password"
                  id="confirm-password"
                  
                  autoComplete="confirm-password"
                />
              </Grid>
              
            </Grid>
            <Grid item xs={4}  sx={{py:2}}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Role</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="Role"
                    value={role}
                    label="Role"
                    name='Role'
                    onChange={handleChange}
                >
                    <MenuItem value={"Professeur"}>Professeur</MenuItem>
                    <MenuItem value={"Etudiant"}>Etudiant</MenuItem>
                    
                </Select>
                </FormControl>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/Login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}