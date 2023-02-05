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

const featuredArticles = ['helloworld', 'helloworld2']

export async function getStaticProps() {
  //have up to six articles here
  const postsTest = getAllPosts(['slug'])
  console.log('postsTest to see if this works', postsTest)
  const posts = featuredArticles.map((post) =>
    getPostBySlug(post, ['title', 'slug', 'coverImage', 'excerpt'])
  )

  return {
    props: {
      posts: posts,
    },
  }
}
