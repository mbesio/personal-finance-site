import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import { remark } from 'remark'
import html from 'remark-html'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import AppBar from '../../components/landingPage/appBar'

type PostType = {
  slug: string
  title: string
  date: string
  coverImage: string
  excerpt: string
  ogImage: {
    url: string
  }
  content: string
}

type Props = {
  post: PostType
  morePosts: PostType[]
  preview?: boolean
}

export default function Post({ post, morePosts, preview }: Props) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <>
      <AppBar />
      <Box
        m="auto"
        sx={{
          mt: 5,
          px: 2,
          maxWidth: {
            sm: '100%',
            md: '60%',
          },
        }}
      >
        <Typography variant="h3" color="primary.dark">
          {post.title}
        </Typography>
        {/* Could create an image component and import this */}
        <Box
          sx={{
            mt: 1,
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${post.coverImage})`,
            height: '300px',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            color: 'white',
            fontFamily: { xs: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'] },
          }}
        ></Box>
        <Box
          sx={{
            fontFamily: { xs: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'] },
            lineHeight: '1.3em',
          }}
          color="#1976d2"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </Box>
    </>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
