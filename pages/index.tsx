import React from 'react'
import Box from '@mui/material/Box'
import AppBar from '../components/appBar'
import HeroImage from '../components/landingPage/heroImage'
import FeaturedArtices from '../components/landingPage/featuredArticles'
import { getAllPosts, getPostBySlug } from '../lib/api'

const LandingPage = (props) => {
  return (
    <Box>
      <AppBar />
      <HeroImage />
      <FeaturedArtices posts={props.posts} />
    </Box>
  )
}

export default LandingPage

//have up to six articles here
const featuredArticles = [
  'l-indipendenza-finanziaria',
  'dollar-cost-averaging',
  'il-primo-step-verso-l-indipendenza-finanziaria',
  'differenza-meno-abbienti-ceto-medio-ricchi',
  'l-interesse-composto',
]

export async function getStaticProps() {
  const postsTest = getAllPosts(['slug'])
  const posts = featuredArticles.map((post) =>
    getPostBySlug(post, ['title', 'slug', 'coverImage', 'excerpt'])
  )

  return {
    props: {
      posts: posts,
    },
  }
}
