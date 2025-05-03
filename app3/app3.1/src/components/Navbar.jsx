import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <AppBar>
        {/* <Tool> */}
        <Toolbar>
            <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Sample
          </Typography>
               <Link to="/">
                    <Button sx={{color: 'white' }}>STB</Button>
              </Link><br/>
              <Link to="/STB">
              <Button sx={{color: 'white' }}>Login</Button>
               </Link>
              <Link to="/Ndisp">
                    <Button sx={{color: 'white' }}>Ndisp</Button>
                     </Link>
              <Link to="/Api">
                    <Button sx={{color: 'white' }}>Api</Button>
              </Link><br/>
        </Toolbar>
      </AppBar>
    </Box>
        </Toolbar>
        {/* </Tool> */}
      </AppBar>
    </div>
  )
}

export default Navbar
