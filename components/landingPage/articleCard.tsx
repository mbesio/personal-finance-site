import React from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActionArea from '@mui/material/CardActionArea'
import Link from 'next/link'

const ArticleCard = ({ image, imageTitle, title, summary, slug }) => {
  return (
    <Card sx={{ maxWidth: '100%', height: '100%' }}>
      <Link
        href={slug}
        style={{
          textDecoration: 'none',
        }}
      >
        <CardActionArea>
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
            <Typography
              variant="body2"
              color="primary"
              component="p"
              sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: '3',
                WebkitBoxOrient: 'vertical',
              }}
            >
              {summary}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  )
}
export default ArticleCard
