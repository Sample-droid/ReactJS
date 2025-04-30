import { TextField, Typography } from '@mui/material'
import React from 'react'

const LoginMui = () => {
  return (
    <div>
      <Typography variant='h1'> Welcome Sample</Typography>
      <TextField variant='outlined' label="Name"/><br /> <br />
      <TextField variant='filled' label="Phone No"/> <br /><br />
      <TextField variant='standard' label="Address"/><br /><br />
      <br /><br />
      <button variant="text">submit</button><br /> <br />
      <button variant="contained">Submit</button><br /> <br />
      <button variant="outlined">Submit</button><br /> <br />



    </div>
  )
}

export default LoginMui
