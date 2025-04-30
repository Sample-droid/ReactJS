import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import '../App.css'
const Signup = () => {
  return (
    <div className='boxx'>
      <Typography variant='h5'>To continue using our service please sign up</Typography><br />
      <TextField variant='filled' label="Name"/><br /> <br />
            <TextField variant='filled' label="Phone No"/> <br /><br />
            <TextField variant='filled' label="Address"/><br /><br />
            <br /><br />
            <Button variant='outlined'>submit</Button><br /> <br />
      
    </div>
  )
}

export default Signup
