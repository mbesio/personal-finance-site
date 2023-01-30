import React from 'react'
import Box from '@mui/material/Box'
import AppBar from '../components/appBar'
import HeroImage from '../components/landingPage/heroImage'
import FeaturedArtices from '../components/landingPage/featuredArticles'
import { remark } from 'remark'
import html from 'remark-html'
import { getPostBySlug } from '../lib/api'

const LandingPage = (props) => {
  return (
    <Box>
      <AppBar />
      <HeroImage />
      <FeaturedArtices />
    </Box>
  )
}

export default LandingPage

// Matteo To Do - Will need to clean this up, but like this is how I can get the articles for the main page
export async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}

export async function getStaticProps() {
  const post1 = getPostBySlug('helloworld.md', [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const post2 = getPostBySlug('helloworld2.md', [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content1 = await markdownToHtml(post1.content || '')
  const content2 = await markdownToHtml(post2.content || '')

  return {
    props: {
      posts: [
        {
          ...post1,
          content1,
        },
        {
          ...post2,
          content2,
        },
      ],
    },
  }
}
