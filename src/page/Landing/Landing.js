import { Box } from '@material-ui/core'
import { Main, Moon, Earth } from '../../components'

function Landing() {
  return (
    <Box style={{ scrollBehavior: 'smooth' }}>
      <Box id="Main">
        <Main />
      </Box>
      <Box id="#Moon">
        <Moon />
      </Box>
      <Box>
        <Earth />
      </Box>
      <Box>
        <Earth />
      </Box>
      <Box>
        <Earth />
      </Box>
      <Box>
        <Earth />
      </Box>
      <Box>
        <Earth />
      </Box>
      <Box>
        <Earth />
      </Box>
      <Box>
        <Earth />
      </Box>
    </Box>
  )
}
export default Landing
