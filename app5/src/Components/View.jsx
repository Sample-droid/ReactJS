import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const View = () => {
  var[product,setproduct]=useState([])
  useEffect(()=>{
  axios.get("http://fakestoreapi.com/products")
  .then((res)=>{
    console.log(res.data)
    setproduct(res.data)
  })

},[])
  return (
    <div>
      <Grid container justifyContent="center">

  
    
  {product.map((val)=>{
                    return(
                      <Grid item>
                  
                   
                
      <Card sx={{ maxWidth: 250 }}>
      <CardMedia
        sx={{ height: 250 }}
        image={val.image}
        title={val.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {val.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {val.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

   </Grid>
    
  )
})
}
   </Grid>
    </div>
  )
}

export default View
