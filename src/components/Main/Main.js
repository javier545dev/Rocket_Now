import { Box, Button } from '@material-ui/core'

import Astronaut from '@Assets/images/astronaut.png'
import Estrellablanca from '@Assets/images/estrellablanca.png'
import Estrellaroja from '@Assets/images/estrellaroja.png'
import Rocket from '@Assets/images/rocket.png'

import useStyles from './styles'

const Main = () => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <img src={Astronaut} alt="Astronaut" className={classes.astronaut} />
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
      <img src={Rocket} alt="Rocket" className={classes.rocket} />

      <Button variant="contained">LOG IN</Button>
      <Button variant="outlined">SIGN UP</Button>
    </Box>
  )
}

export default Main
