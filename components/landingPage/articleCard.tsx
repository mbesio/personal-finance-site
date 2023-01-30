import React from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActionArea from '@mui/material/CardActionArea'

const ArticleCard = ({ image, imageTitle, title, summary, slug }) => {
  return (
    <Card sx={{ maxWidth: '100%' }}>
      <CardActionArea
        onClick={() =>
          console.log('link to the slug for the card that has been clicked')
        }
      >
        <CardMedia
          sx={{ height: 240 }}
          image={image}
          title={imageTitle}
        ></CardMedia>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            color="primary.dark"
          >
            {title}
          </Typography>
          <Typography variant="body2" color="primary" component="p">
            {summary}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
export default ArticleCard
