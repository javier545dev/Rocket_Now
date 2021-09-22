import { Button, Typography, Box } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import useStyles from './styles'
import Orbit2 from '@Assets/images/orbit@2x.png'
import Orbitheader from '@Assets/images/Orbitheader.png'
import Estrellablanca from '@Assets/images/estrellablanca.png'
import Estrellaroja from '@Assets/images/estrellaroja.png'
import Rocket from '@Assets/images/rocket.png'

export default function Saber() {
  const history = useHistory()
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <img src={Orbit2} alt="orbit" className={classes.orbit} />
      <img src={Orbitheader} alt="orbit" className={classes.orbit2} />

      <img
        src={Estrellablanca}
        alt="Estrellablanca"
        className={classes.estrellablanca}
      />
      <img
        src={Estrellablanca}
        alt="Estrellablanca"
        className={classes.estrellablanca1}
      />
      <img
        src={Estrellablanca}
        alt="Estrellablanca"
        className={classes.estrellablanca2}
      />
      <img
        src={Estrellablanca}
        alt="Estrellablanca"
        className={classes.estrellablanca3}
      />
      <img
        src={Estrellaroja}
        alt="Estrellaroja"
        className={classes.estrellaroja}
      />
      <Box className={classes.form}>
        <Typography
          align="center"
          variant="h4"
          className={classes.titleHead}
          color="primary"
        >
          ¡GRACIAS!
        </Typography>
        <Typography variant="h6" color="primary" className={classes.title}>
          Nos ponemos en
        </Typography>
        <Typography variant="h6" color="primary" className={classes.title1}>
          contacto contigo.
        </Typography>
        <img src={Rocket} alt="Rocket" className={classes.rocket} />
        <Button
          type="button"
          fullWidth
          variant="outlined"
          color="primary"
          className={classes.btn}
          onClick={() => history.push('/')}
        >
          <Typography>OK</Typography>
        </Button>
      </Box>
    </Box>
  )
}
