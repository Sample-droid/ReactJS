import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const View = () => {
  var[students,setstudent]=useState([])
  const navigate=useNavigate()
  axios.get("http://localhost:3004/students")
  .then((res)=>{
    console.log(res.data)
    setstudent(res.data)
  })

// DELETE
  const deletestudent=(id)=>{
    axios.delete("http://localhost:3004/students/"+id)
    alert("1 Deleted Successfully")
  }
//UPDATE
    const updatestudent=(students)=>{
     console.log("Click Button")
     navigate("/Add",{state:{students}})
    }
  return (
    <div>
      <TableContainer>
              <Table>
                  <TableHead>
                      <TableRow>
                          <TableCell>RollNo</TableCell>
                          <TableCell>Name</TableCell>
                          <TableCell>Course</TableCell>
                          <TableCell>Grade</TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                  {students.map((val)=>{
                    return(
                  <TableRow>
                    <TableCell>{val.Roll_No}</TableCell>
                    <TableCell>{val.Name}</TableCell>
                    <TableCell>{val.course}</TableCell>
                    <TableCell>{val.Grade}</TableCell>
                    <TableCell>
                    <Button variant='contained' color='success' onClick={()=>updatestudent(val)} sx={{ marginRight: 5 }} >Update</Button>
                    <Button variant='contained' color='error' onClick={()=>deletestudent(val.id)}>Delete</Button>
                    </TableCell>
                  </TableRow>
                    )
                  })
                }
                  </TableBody>
                  
              </Table>
            </TableContainer>
    </div>
  )
}

export default View
