import { Box, Button, IconButton, Typography } from '@material-ui/core'
import { Facebook, Instagram, Twitter } from '@material-ui/icons/'
import Orbit2 from '@Assets/images/orbit@2x.png'
import Astronaut from '@Assets/images/astronaut.png'
import Orbitheader from '@Assets/images/Orbitheader.png'
import Estrellablanca from '@Assets/images/estrellablanca.png'
import Estrellanaranja from '@Assets/images/estrellanaranja.png'
import useStyles from './styles'

const MenuProfile = () => {
  const classes = useStyles()

  return (
    <Box height="100%" className={classes.root}>
      <img src={Orbit2} alt="Orbit" className={classes.orbit} />
      <img src={Orbitheader} alt="Orbit" className={classes.orbit2} />
      <img src={Astronaut} alt="Astronaut" className={classes.astronaut} />
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
        className={classes.estrellablanca3}
      />
      <img
        src={Estrellanaranja}
        alt="Estrellanaranja"
        className={classes.estrellanaranja}
      />
      <Button
        type="button"
        variant="outlined"
        fullWidth
        color="primary"
        className={classes.btn}
      >
        <Typography>SOCIAL HUB</Typography>
      </Button>
      <Typography color="primary" variant="body2" className={classes.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        est hic ullam adipisci maxime facere nihil totam quod eligendi eos.
      </Typography>

      <Box>
        <IconButton>
          <Instagram style={{ width: 40, height: 45, color: 'white' }} />
        </IconButton>
        <IconButton>
          <Facebook style={{ width: 40, height: 45, color: 'white' }} />
        </IconButton>
        <IconButton>
          <Twitter style={{ width: 40, height: 45, color: 'white' }} />
        </IconButton>
      </Box>
    </Box>
  )
}

export default MenuProfile
