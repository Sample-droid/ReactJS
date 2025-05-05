import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Add = () => {
  var[input,setinput]=useState({Roll_No:"",Name:"",course:"",Grade:""})
  var location=useLocation()
  const navigate=useNavigate()
  
  console.log(location)
  const handleinput=(e)=>
{
    setinput({...input,[e.target.name]:e.target.value})
    console.log(input)
  }


// ADD

  const handlesubmit = () => {
    if(location.state !=null){
      //Update
      axios.put("http://localhost:3004/students/"+location.state.students.id,input)
      alert("Changes saved")
      navigate("/")
    }
    else{  
      //Add
   axios.post("http://localhost:3004/students", input)
    alert("1 Added Successfully")
    navigate("/")
   }

    
  };
  useEffect(()=>{
  if(location.state !=null){
    setinput({
      ...input,
      Roll_No:location.state.students.Roll_No,
      Name:location.state.students.name,
      course:location.state.students.course,
      Grade:location.state.students.Grade,
    })
  }
},[])
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