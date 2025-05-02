import { Button } from '@mui/material'
import React, { useState } from 'react'

const Ndisp = () => {
    
        const [content, setContent] = useState('');
      
        const submithandler = (text) => {
          setContent(text);
        }   
  return (
    <div>
<h1>Welcome {content}</h1>
     <Button variant="contained" color="secondary" onClick={() => submithandler('Sample1')} style={{ marginRight: '50px' }} >Sample1</Button>
      <Button variant="contained" color="primary"onClick={()=>submithandler('Sample2')} style={{ marginRight: '50px' }}>Sample2</Button>
      <Button variant="contained" color="secondary"onClick={()=>submithandler('Sample5')} style={{ marginRight: '50px' }} >Sample5</Button>
    </div>
  )
}

export default Ndisp
