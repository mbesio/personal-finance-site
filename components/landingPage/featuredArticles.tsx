import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import ArticleCard from './articleCard'

// should get as props an array of blog posts to render
const FeaturedArtices = ({ posts }) => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        pt: 3,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          mr: 2,
          flexGrow: 1,
          fontWeight: 500,
          textDecoration: 'none',
          color: 'primary.dark',
        }}
      >
        Articoli
      </Typography>
      <Grid container spacing={3}>
        {posts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.slug}>
            <ArticleCard
              image={post.coverImage}
              imageTitle={`image for ${post.title}`}
              title={post.title}
              summary={post.excerpt}
              slug={`posts/${post.slug}`}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
export default FeaturedArtices
