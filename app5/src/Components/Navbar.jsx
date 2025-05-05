import { MiscellaneousServicesOutlined } from '@mui/icons-material'
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MiscellaneousServicesOutlined />
          </IconButton>
          <Button sx={{ fontSize: "1.0rem", fontWeight: "bold" }}><Link to={'/'} style={{color:'white'}}>
            Homepage</Link></Button>
          <Box sx={{ flexGrow: 22 }}></Box>
          <Button><Link to={'/Add'}style={{color:'white'}}>Add</Link></Button>
          <Button><Link to={'/View'}style={{color:'white'}}>View</Link></Button>
         
        </Toolbar>
      </AppBar>
    </Box>
    <br /><br />
    </div>
  )
}

export default Navbar
