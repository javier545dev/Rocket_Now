import { Box, Button, Typography, TextField } from '@material-ui/core'
import { MoreVert } from '@material-ui/icons/'
import Orbit2 from '@Assets/images/orbit@2x.png'
import Astronaut from '@Assets/images/astronaut.png'
import Estrellablanca from '@Assets/images/estrellablanca.png'
import Estrellanaranja from '@Assets/images/estrellanaranja.png'
import Orbitheader from '@Assets/images/Orbitheader.png'

import useStyles from './styles'

const MenuTierra = () => {
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
      <TextField
        defaultValue="Manuel Hernandez"
        fullWidth
        variant="standard"
        color="primary"
        label="Mi cuenta"
        className={classes.inputText}
        InputProps={{ endAdornment: <MoreVert color="primary" /> }}
      />
      <TextField
        defaultValue="1 projecto"
        fullWidth
        variant="standard"
        color="primary"
        label="Mis projectos"
        className={classes.inputText}
        InputProps={{ endAdornment: <MoreVert color="primary" /> }}
      />
      <TextField
        defaultValue="Basic"
        fullWidth
        variant="standard"
        color="primary"
        label="Asesoría"
        className={classes.inputText}
        InputProps={{
          endAdornment: <MoreVert color="primary" />
        }}
      />
      <TextField
        defaultValue="November 2020"
        fullWidth
        variant="standard"
        color="primary"
        label="Membership since"
        className={classes.inputText}
        InputProps={{ endAdornment: <MoreVert color="primary" /> }}
      />
      <Button
        type="button"
        variant="outlined"
        fullWidth
        color="primary"
        className={classes.btn}
      >
        <Typography>UPGRADE SUBSCRIPTION</Typography>
      </Button>
    </Box>
  )
}

export default MenuTierra
