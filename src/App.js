import { Box } from '@material-ui/core'
import { Route, Switch } from 'react-router-dom'
import { Landing, Login, Error404 } from './page'
import { Header } from '@Components'
import useStyles from './styles'

function App() {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Header />
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/login" exact component={Login} />
        <Route path="*" component={Error404} />
      </Switch>
    </Box>
  )
}
export default App
