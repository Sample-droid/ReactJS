import { Button, TextField } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <div>
      <TextField id="standard-basic" label="Product Name" variant="outlined" /><br/><br/>
      <TextField
          id="standard-multiline-flexible"
          label="Description"
          multiline
          minRows={4} 
          maxRows={6} 
          variant="outlined"/><br/><br/>
      <TextField id="standard-basic" label="Image Link" variant="outlined" /><br/><br/>
      <TextField id="standard-basic" label="Price" variant="outlined" /><br/><br />
       <Button variant='contained'> Submit</Button>
    </div>
  )
}

export default Add
