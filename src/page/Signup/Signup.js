import {
  Button,
  TextField,
  Link,
  Typography,
  Box,
  Icon
} from '@material-ui/core'
import useStyles from './styles'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Facebook } from '@material-ui/icons/'
import Launch from './../Launch/Launch'
import Orbit2 from '@Assets/images/orbit@2x.png'
import Estrellablanca from '@Assets/images/estrellablanca.png'
import Estrellaroja from '@Assets/images/estrellaroja.png'

export default function Signup() {
  const history = useHistory()
  const [view, setView] = useState(null)

  const [sign, setSign] = useState({
    name: '',
    email: '',
    password: ''
  })
  const classes = useStyles()

  const handleFormSignup = async (e) => {
    e.preventDefault()
    if (e.key === 'Enter') {
      if (!sign.name.trim() & !sign.email.trim() & !sign.password()) {
        alert('No pueden haber campos vacios')
        return
      }
    }
    setView(true)
  }

  if (view) {
    return <Launch sign={sign} />
  } else {
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
        <Typography variant="h5" className={classes.titleHead} color="primary">
          CREAR CUENTA
        </Typography>
        <form size="small" className={classes.form} method="post">
          <TextField
            className={classes.input}
            name="firstName"
            variant="outlined"
            color="primary"
            required
            fullWidth
            id="name"
            label="Nombre"
            value={sign.name}
            InputProps={{
              classes: {
                notchedOutline: classes.notchedOutline
              }
            }}
            onChange={(e) =>
              setSign((prev) => ({ ...prev, name: e.target.value }))
            }
            autoComplete="off"
          />
          <TextField
            className={classes.input}
            variant="outlined"
            color="primary"
            required
            fullWidth
            id="email"
            value={sign.email}
            InputProps={{
              classes: {
                notchedOutline: classes.notchedOutline
              }
            }}
            onChange={(e) =>
              setSign((prev) => ({ ...prev, email: e.target.value }))
            }
            label="Email"
            name="email"
            autoComplete="off"
          />
          <TextField
            className={classes.input}
            variant="outlined"
            color="primary"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            value={sign.password}
            InputProps={{
              classes: {
                notchedOutline: classes.notchedOutline
              }
            }}
            onChange={(e) =>
              setSign((prev) => ({ ...prev, password: e.target.value }))
            }
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.btn}
            onClick={handleFormSignup}
          >
            REGISTRO
          </Button>
          <Typography
            variant="body2"
            className={classes.subtitle}
            color="primary"
          >
            Al continuar aceptas los Terminos y Condiciones del Aviso de
            Privacidad
          </Typography>
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            color="primary"
            className={classes.btn2}
          >
            <Icon className={classes.icon} fontSize="small">
              <Facebook
                style={{
                  width: 25,
                  height: 24,
                  color: 'white',
                  marginRight: '15px'
                }}
              />
            </Icon>
            <Typography>LOGIN WITH FACEBOOK</Typography>
          </Button>
          <Typography
            variant="body2"
            className={classes.subtitle}
            color="primary"
          >
            Tienes una cuenta?{' '}
            <Link
              variant="body2"
              color="inherit"
              underline="always"
              onClick={() => history.push('/login')}
            >
              Ingresa aqui
            </Link>
          </Typography>
        </form>
      </Box>
    )
  }
}
