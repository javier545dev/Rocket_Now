import { Box, Button, Typography } from '@material-ui/core'

import Estrellablanca from '@Assets/images/estrellablanca.png'
import Estrellaroja from '@Assets/images/estrellaroja.png'
import Rocket from '@Assets/images/rocket.png'
import Tierra from '@Assets/images/menutierra@2x.png'
import Candado from '@Assets/images/candado.png'
import Orbit2 from '@Assets/images/Orbit2.png'

import useStyles from './styles'

const Main = () => {
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
    <Box className={classes.root}>
      <img src={Orbit2} alt="Orbit" className={classes.orbit} />
      <Typography variant="h5" className={classes.title} color="primary">
        Tierra
      </Typography>
      <Box className={classes.planeta} style={styles.paperContainer}>
        <img src={Candado} alt="candado" className={classes.candado} />
      </Box>
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
      >
        UPGRADE
      </Button>
    </Box>
  )
}

export default Main
