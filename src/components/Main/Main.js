import { Box, Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import Astronaut from '@Assets/images/astronaut.png'
import Estrellablanca from '@Assets/images/estrellablanca.png'
import Estrellaroja from '@Assets/images/estrellaroja.png'
import Rocket from '@Assets/images/rocket.png'
import CurveBlue from '@Assets/images/curveblue.png'
import GlowBlue from '@Assets/images/glowblue.png'
import Orbit2 from '@Assets/images/orbit@2x.png'

import { useGlobalData, useGlobalActions } from '@Hooks'

import useStyles from './styles'

const Main = () => {
  const classes = useStyles()
  const history = useHistory()
  const { isAuth } = useGlobalData()
  const globalAction = useGlobalActions()

  const handleOut = async () => {
    globalAction.logoutAuth()
    history.push('/')
  }

  return (
    <Box className={classes.root}>
      <img src={Astronaut} alt="Astronaut" className={classes.astronaut} />
      <img src={Rocket} alt="Rocket" className={classes.rocket} />
      <img src={GlowBlue} alt="Rocket" className={classes.glowblue} />
      <img src={Orbit2} alt="orbit" className={classes.orbit2} />
      <img src={CurveBlue} alt="Curve Picture" className={classes.curveblue} />

      <img
        src={Estrellablanca}
        alt="Estrellablanca"
        className={classes.estrellablanca}
      />
      <img
        src={Estrellablanca}
        alt="Estrellablanca1"
        className={classes.estrellablanca1}
      />
      <img
        src={Estrellablanca}
        alt="Estrellablanca2"
        className={classes.estrellablanca2}
      />
      <img
        src={Estrellablanca}
        alt="Estrellablanca3"
        className={classes.estrellablanca3}
      />
      <img
        src={Estrellablanca}
        alt="Estrellablanca4"
        className={classes.estrellablanca4}
      />
      <img
        src={Estrellaroja}
        alt="Estrellaroja"
        className={classes.estrellaroja}
      />

      {!isAuth ? (
        <>
          <Button
            style={{ color: 'purple' }}
            variant="contained"
            className={classes.buttons}
            onClick={() => history.push('/login')}
          >
            LOG IN
          </Button>
          <Button
            color="primary"
            variant="outlined"
            className={classes.buttons}
            onClick={() => history.push('/signup')}
          >
            SIGN UP
          </Button>
        </>
      ) : (
        <Button
          variant="contained"
          className={classes.buttons}
          onClick={handleOut}
        >
          Log Out
        </Button>
      )}
    </Box>
  )
}

export default Main
