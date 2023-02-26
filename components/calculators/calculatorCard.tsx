import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActionArea from '@mui/material/CardActionArea'
import Link from 'next/link'

const CalculatorCard = ({ name, description, path, children }) => {
  return (
    <Card sx={{ maxWidth: '100%', height: '100%' }}>
      <Link
        href={path}
        style={{
          textDecoration: 'none',
        }}
      >
        <CardActionArea sx={{ flexGrow: 1, display: 'flex' }}>
          {children}
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              color="primary.dark"
            >
              {name}
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
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  )
}
export default CalculatorCard
