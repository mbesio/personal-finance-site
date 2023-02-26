import React from 'react'
import Box from '@mui/material/Box'
import AppBar from '../../components/appBar'
import FeaturedArtices from '../../components/landingPage/featuredArticles'
import { getPostSlugs, getPostBySlug } from '../../lib/api'

const AllPosts = (props) => {
  return (
    <Box>
      <AppBar />
      <FeaturedArtices posts={props.posts} />
    </Box>
  )
}

export default AllPosts

export async function getStaticProps() {
  // To Do - sort the articles based on some specific order
  const slugs = getPostSlugs()
  const posts = slugs.map((post) =>
    getPostBySlug(post, ['title', 'slug', 'coverImage', 'excerpt'])
  )

  return {
    props: {
      posts: posts,
    },
  }
}
