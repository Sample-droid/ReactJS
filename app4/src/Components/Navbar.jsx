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
            <MiscellaneousServicesOutlined/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Student Application Form
          </Typography>
          
          <Link to="/Add">
                    <Button sx={{color: 'white' }}>ADD</Button>
              </Link><br/>
              <Link to="/View">
                    <Button sx={{color: 'white' }}>View</Button>
              </Link><br/>
              
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar
