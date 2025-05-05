import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Add = () => {
  var[input,setinput]=useState({Roll_No:"",Name:"",course:"",Grade:""})
  const handleinput=(e)=>
  {
    setinput({...input,[e.target.name]:e.target.value})
    console.log(input)
  }


// ADD

  const handlesubmit = () => {
    axios.post("http://localhost:3004/students", input)
    alert("1 Added Successfully")

    
  };
  return (
    <div>
       <TextField id="outlined-basic" label="RollNo" name='Roll_No'  value={input.Roll_No}variant="outlined"   onChange={handleinput}/><br /><br />
       <TextField id="outlined-basic" label="Name"   name='Name'     value={input.Name} variant="outlined"     onChange={handleinput}/><br /><br />
       <TextField id="outlined-basic" label="Course" name='course'   value={input.course} variant="outlined"   onChange={handleinput} /><br /><br />
       <TextField id="outlined-basic" label="Grade"  name='Grade'    value={input.Grade}variant="outlined"     onChange={handleinput} /><br /><br />
       <Button variant='outlined' color='inherent' onClick={handlesubmit}>Submit</Button>
    </div>
  )
}

export default Add
