import React from 'react'

export default function ModifierMateriel() {
  return (
    <div>
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Modifier Materiel
            </Typography>
            <Button autoFocus variant='contained' style={{background:'green'}} onClick={handleClose}>
              Modifier
            </Button>
          </Toolbar>
        </AppBar>
        
        
        <Grid container xs={12}>
            <Grid item xs={5}><ImageUploader/></Grid>
            
            <Grid item xs={7}><AddMaterial /></Grid>
            <Grid item xs={12} style={{display:"flex",justifyContent:"center"}}>
                <Button sx={{margin:5}} variant="contained" size='large'  > Ajouter Materiel</Button>
            </Grid>
        </Grid>
      
    </div>
  )
}
