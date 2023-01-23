import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch } from 'react-redux';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { Badge, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import StringAvatar from '../StringAvatar';
import store from '../Redux/store';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import Panier from '../Enseignant/Panier';
import Modal from '@mui/material/Modal';

export default function Header() {
  const [open,setOpen]=React.useState(false);
const Navigate=useNavigate();
const pages = ['Se connecter', "S'identifier"];

  const [auth, setAuth] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');
  const handleClose = () => {
    setAnchorEl(null);
  };
  React.useEffect(() => {
    if (token && role) {
      setAuth(true);
    }
  }, [role]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    //destroy token and role in the local storage
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    setAuth(false);
    navigate("/login");
  }
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      
      <AppBar position="static">
        <Toolbar sx={{backgroundColor:"white"}}>
          
          <Typography variant="h5" component="div" sx={{ flexGrow: 1,color:"blue",fontWeight:"bold" }}>
          
            <Inventory2Icon sx={{paddingTop:"4px"}}/> GESTION D'INVENTAIRE
          </Typography>
          {auth ? (
            <div style={{display:"flex",alignItems:"center"}}>
              <IconButton href='/panier'>
              <Badge badgeContent={1} color="primary">
                 <LocalGroceryStoreIcon color="action" />
              </Badge>
              </IconButton>
              <IconButton
              
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="blue"
              >
                <StringAvatar string={`${localStorage.getItem('username')}`} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <Typography sx={{color:"black",fontWeight:"bold",textAlign:"center",padding:"10px"}}>Bienvenue, {localStorage.getItem('username')} </Typography>
                <MenuItem href="/" onClick={(e)=>{Navigate("/")}}>Home</MenuItem>
                <MenuItem href="/etudiant" onClick={(e)=>{Navigate("/etudiant")}}>Materiels</MenuItem>
                <MenuItem onClick={(e) => {handleLogout()}}>Se deconnecter</MenuItem>
              </Menu>
            </div>
          ):(<div>
          <Box sx={{m:1 ,display:{xs:"none",md:"flex"}}}>
            <Button endIcon={<LoginIcon/>} style={{background:"blue",fontWeight:"700",marginRight:"10px",padding:"10px",color:"white"}} href='/login'>Se Connecter</Button>
            <Button endIcon={<LogoutIcon/>} style={{border:"1px solid blue",fontWeight:"700",padding:"10px"}} href='/register'>S'identifier</Button>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{backgroundColor:"#dfe8f2"}}
            >
              <MenuIcon sx={{color:"blue"}} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
            </div>
          )}
        </Toolbar>
      </AppBar>
      
    </Box>
  );
}