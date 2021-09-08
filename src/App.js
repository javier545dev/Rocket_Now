import { Box } from '@material-ui/core'
import { Header, Main } from './components'
import useStyles from './styles'

function App() {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Header />
      <Box>
        <Main />
      </Box>
    </Box>
  )
}
export default App
