// import React from 'react'
// import { styled } from '@mui/material/styles'
// import Grid from '@mui/material/Grid'
// import Typography from '@mui/material/Typography'
// import Icon from '@mui/icons-material/InsertEmoticon' // replace with your desired icon

// const Root = styled(Grid)(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   padding: theme.spacing(2),
//   [theme.breakpoints.down('sm')]: {
//     flexDirection: 'column',
//     alignItems: 'flex-start',
//   },
// }))

// const IconContainer = styled(Grid)(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   height: '100%',
//   paddingRight: theme.spacing(2),
//   [theme.breakpoints.down('sm')]: {
//     paddingRight: 0,
//     marginBottom: theme.spacing(1),
//   },
// }))

// const IconWrapper = styled(Icon)(({ theme }) => ({
//   fontSize: 64, // adjust as needed
// }))

// const TextContainer = styled(Grid)(({ theme }) => ({
//   width: '75%',
//   [theme.breakpoints.down('sm')]: {
//     width: '100%',
//   },
// }))

// const CalculatorCard = () => {
//   return (
//     <Root container>
//       <IconContainer item xs={12} sm={4}>
//         <IconWrapper />
//       </IconContainer>
//       <TextContainer item xs={12} sm={8}>
//         <Typography variant="h4" component="h2">
//           Title
//         </Typography>
//         <Typography variant="body1">Short description</Typography>
//       </TextContainer>
//     </Root>
//   )
// }

// export default CalculatorCard

import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActionArea from '@mui/material/CardActionArea'
import Link from 'next/link'
// import Home from '../icons/home'

const CalculatorCard = ({
  name,
  description,
  path,
  children,
  // image,
  // imageTitle,
  // title,
  // summary,
  // link,
}) => {
  console.log('children in Calculator Card ', children)
  return (
    <Card sx={{ maxWidth: '100%', height: '100%' }}>
      <Link
        href={path}
        style={{
          textDecoration: 'none',
        }}
      >
        <CardActionArea sx={{ flexGrow: 1, display: 'flex' }}>
          {/* <Home /> */}
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
