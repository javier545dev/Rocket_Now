import { Button, Typography, Box, TextField } from '@material-ui/core'
import useStyles from './styles'
import { useHistory } from 'react-router'
import Orbit2 from '@Assets/images/orbit@2x.png'
import Estrellablanca from '@Assets/images/estrellablanca.png'
import Estrellaroja from '@Assets/images/estrellaroja.png'

export default function Saber() {
  const history = useHistory()
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <img src={Orbit2} alt="orbit" className={classes.orbit} />
      <img src={Orbit2} alt="orbit" className={classes.orbit2} />

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
      <Typography
        align="left"
        variant="h4"
        className={classes.titleHead}
        color="primary"
      >
        ASESORIA
      </Typography>
      <Typography
        align="left"
        variant="h4"
        className={classes.titleHead1}
        color="primary"
      >
        ESPECIALIZADA
      </Typography>
      <Typography variant="h6" color="primary" className={classes.title}>
        Tenemos al experto
      </Typography>
      <Typography variant="h6" color="primary" className={classes.title1}>
        perfecto para ti.
      </Typography>
      <Box className={classes.form}>
        <TextField
          id="project_name"
          required
          autoComplete="off"
          fullWidth
          label="NOMBRE"
          variant="outlined"
          color="primary"
          className={classes.input}
          InputProps={{
            classes: {
              notchedOutline: classes.notchedOutline
            }
          }}
        />
        <TextField
          id="project_name"
          required
          autoComplete="off"
          fullWidth
          label="CORREO ELECTRONICO"
          variant="outlined"
          color="primary"
          className={classes.input}
          InputProps={{
            classes: {
              notchedOutline: classes.notchedOutline
            }
          }}
        />
        <TextField
          margin="normal"
          color="secondary"
          multiline
          rows={8}
          name="help"
          label="¿En que necesitas ayuda? (Opcional)"
          variant="filled"
          autoComplete="off"
          fullWidth
          id="how"
          style={{ zIndex: 2 }}
          InputProps={{
            disableUnderline: true,
            classes: {
              notchedOutline: classes.notchedOutline
            }
          }}
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.btn}
          onClick={() => history.push('/gracias')}
        >
          CONTÁCTENME
        </Button>
      </Box>
    </Box>
  )
}
