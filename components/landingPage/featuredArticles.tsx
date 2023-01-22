import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import theme from '../../theme'
import Grid from '@mui/material/Grid'
import ArticleCard from './articleCard'
// import Box from '@mui/material/Box'

const articleDummy = {
  image:
    'https://images.unsplash.com/photo-1605711597625-399fa993f258?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJhbmtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  imageTitle: 'article-1-image',
  title: 'La finanza personale',
  summary:
    "In questo articolo vengono spiegati i sei passi necessare per iniziare a risparmiare e come raggiungere l'indipendenza finanziaria",
  slug: 'tbd',
}

const FeaturedArtices = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        paddingTop: theme.spacing(3),
      }}
    >
      <Typography
        variant="h4"
        sx={{
          mr: 2,
          flexGrow: 1,
          fontWeight: 500,
          textDecoration: 'none',
          color: '#3f51b5',
        }}
      >
        Articoli
      </Typography>
      <Grid container spacing={3}>
        {/* The article cards should be an array to loop on */}
        <Grid item xs={12} sm={6} md={4}>
          <ArticleCard
            image={articleDummy.image}
            imageTitle={articleDummy.imageTitle}
            title={articleDummy.title}
            summary={articleDummy.summary}
            slug={articleDummy.slug}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ArticleCard
            image={articleDummy.image}
            imageTitle={articleDummy.imageTitle}
            title={articleDummy.title}
            summary={articleDummy.summary}
            slug={articleDummy.slug}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ArticleCard
            image={articleDummy.image}
            imageTitle={articleDummy.imageTitle}
            title={articleDummy.title}
            summary={articleDummy.summary}
            slug={articleDummy.slug}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ArticleCard
            image={articleDummy.image}
            imageTitle={articleDummy.imageTitle}
            title={articleDummy.title}
            summary={articleDummy.summary}
            slug={articleDummy.slug}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ArticleCard
            image={articleDummy.image}
            imageTitle={articleDummy.imageTitle}
            title={articleDummy.title}
            summary={articleDummy.summary}
            slug={articleDummy.slug}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ArticleCard
            image={articleDummy.image}
            imageTitle={articleDummy.imageTitle}
            title={articleDummy.title}
            summary={articleDummy.summary}
            slug={articleDummy.slug}
          />
        </Grid>
      </Grid>
    </Container>
    // add link here to the list of all the articles
  )
}
export default FeaturedArtices
