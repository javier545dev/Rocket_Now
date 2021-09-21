import { Box, Button, Typography } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import Estrellablanca from '@Assets/images/estrellablanca.png'
import Estrellaroja from '@Assets/images/estrellaroja.png'
import Rocket from '@Assets/images/rocket.png'
import Tierra from '@Assets/images/menutierra@2x.png'
import GlowBlue from '@Assets/images/glowblue.png'

import useStyles from './styles'

const Moon = () => {
  const history = useHistory()
  const classes = useStyles()

  const styles = {
    paperContainer: {
      backgroundImage: `url(${Tierra})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'contain'
    }
  }

  return (
    <Box className={classes.root} id="moon">
      <Typography variant="h5" className={classes.title} color="primary">
        Luna
      </Typography>
      <Box className={classes.planeta} style={styles.paperContainer}></Box>
      <img src={GlowBlue} alt="Rocket" className={classes.glowblue} />
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
      <img
        src={Estrellaroja}
        alt="Estrellaroja"
        className={classes.estrellablanca}
      />
      <img src={Rocket} alt="Rocket" className={classes.rocket} />

      <Button
        variant="contained"
        style={{ color: 'purple' }}
        className={classes.buttons}
        onClick={() => history.push('/signup')}
      >
        EMPIEZA AQUI
      </Button>
    </Box>
  )
}

export default Moon
