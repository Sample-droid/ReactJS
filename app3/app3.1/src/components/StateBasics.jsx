import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    const[name,setname]=useState("Sample")
    const [submittedName, setSubmittedName] = useState("User");
    const handleinput=(e)=>{
        console.log(e.target.value)
        setname(e.target.value)
    }   
    
    const submithandler = ()=>{
        setSubmittedName(name);    }
    
  return (
    <div>
      <h1>Welcome {submittedName} </h1>
      <TextField variant='outlined' label="Name" onChange={handleinput}/><br/><br/>
      <Button variant="outlined" onClick={submithandler}>Submit</Button>
      
       
    </div>
  )
}

export default StateBasics
