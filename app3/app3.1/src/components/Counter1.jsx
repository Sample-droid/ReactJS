import { Button } from '@mui/material'
import React, { useState } from 'react'

const Counter1 = () => {
    const [count,setCount]= useState(0)
    const Add=()=> setCount(count+1)
    const Subtr=()=> setCount(count-1)
  return (
    <div>
        <h1>Count {count}</h1>
      <Button variant="contained" color="primary" onClick={Subtr} style={{ marginRight: '50px' }}>-</Button>
      <Button variant="contained" color="Secondary" onClick={Add}>+</Button>
    </div>
  )
}

export default Counter1
