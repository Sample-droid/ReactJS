import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const MuiTable = () => {
var data=[{name:"Sample1",age:0},
    {name:"Sample2",age:0},{name:"Sample1",age:0}
]
  return (
    <div className='tabl'>
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name </TableCell>
                    <TableCell>Age</TableCell>
                   
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((val,i)=>{
                return(
                    <TableRow>
                        <TableCell>{val.name}</TableCell>
                        <TableCell>{val.age}</TableCell>

                    </TableRow>
                )
            })}
               </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default MuiTable
