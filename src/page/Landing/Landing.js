import { Box } from '@material-ui/core'
import { Main, Moon, Earth } from '../../components'

function Landing() {
  return (
    <Box>
      <Box>
        <Main />
      </Box>
      <Box>
        <Earth />
      </Box>
      <Box>
        <Moon />
      </Box>
    </Box>
  )
}
export default Landing
