import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const Muicard = () => {
  return (
    <div>
       <Card sx={{ maxWidth: 250 }}>
      <CardMedia
        sx={{ height: 250 }}
        image="https://th.bing.com/th/id/OIP.rUuoutIAw9gVndnRRgNK2gHaFj?rs=1&pid=ImgDetMain"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    

    </div>
  )
}

export default Muicard
