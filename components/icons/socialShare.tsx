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
      <Box sx={{ mx: 1 }}>
        <FacebookShareButton
          url={`https://www.lafinanzapersonale.it/posts/${slug}/`}
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>
      </Box>
      <Box sx={{ mx: 1 }}>
        <LinkedinShareButton
          url={`https://www.lafinanzapersonale.it/posts/${slug}/`}
        >
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
      </Box>
      <Box sx={{ mx: 1 }}>
        <TwitterShareButton
          url={`https://www.lafinanzapersonale.it/posts/${slug}/`}
        >
          <TwitterIcon size={32} round />
        </TwitterShareButton>
      </Box>
    </Box>
  )
}

export default SocialShare
