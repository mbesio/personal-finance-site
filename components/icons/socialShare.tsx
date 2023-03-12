import { Box } from '@mui/material'
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
} from 'react-share'

const SocialShare = ({ slug }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      <FacebookShareButton
        url={`https://www.lafinanzapersonale.it/posts/${slug}/`}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <LinkedinShareButton
        url={`https://www.lafinanzapersonale.it/posts/${slug}/`}
      >
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
      <TwitterShareButton
        url={`https://www.lafinanzapersonale.it/posts/${slug}/`}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
    </Box>
  )
}

export default SocialShare
