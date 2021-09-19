/* eslint-disable no-unused-vars */
import {
  Button,
  TextField,
  Link,
  Typography,
  Box,
  Icon
} from '@material-ui/core'
import useStyles from './styles'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Facebook } from '@material-ui/icons/'
import Launch from '@Page/Launch'
import Orbit2 from '@Assets/images/orbit@2x.png'
import Estrellablanca from '@Assets/images/estrellablanca.png'
import Estrellaroja from '@Assets/images/estrellaroja.png'

export default function Signup() {
  const history = useHistory()
  const [view, setView] = useState(null)

  const [sign, setSign] = useState({
    name: undefined,
    email: undefined,
    password: undefined
  })
  const [signError, setSignError] = useState({
    name: '',
    email: '',
    password: ''
  })

  const classes = useStyles()

  const verifyInputs = () => {
    Object.keys(signError).forEach((key) => {
      const value = sign[key]

      if (value !== undefined) {
        setSignError((prev) => ({ ...prev, [key]: '' }))

        if (value.trim() === '') {
          setSignError((prev) => ({ ...prev, [key]: 'Campo Requerido' }))
          return
        }

        if (key === 'email' && value !== '') {
          const regExp =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ // eslint-disable-line
          if (!regExp.test(value)) {
            setSignError((prev) => ({ ...prev, [key]: 'Email no valido' }))
            return
          }
        }
      }
    })
  }

  const handleFormSignup = async (e) => {
    e.preventDefault()
    const valid = [sign.name, sign.email, sign.password].some(
      (value) => value.trim() === ''
    )
    if (!valid) {
      setView(true)
    } else {
      alert('Algunos campos requerido')
    }
  }

  useEffect(() => {
    verifyInputs()
  }, [sign.name, sign.email, sign.password])

  if (view) {
    return <Launch sign={sign} />
  }

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
      <form
        size="small"
        className={classes.form}
        method="post"
        onSubmit={handleFormSignup}
      >
        <TextField
          className={classes.input}
          name="firstName"
          variant="outlined"
          color="primary"
          // required
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
          // helperText={signError.name}
          autoComplete="off"
        />
        <TextField
          className={classes.input}
          variant="outlined"
          color="primary"
          required
          fullWidth
          id="email"
          type="email"
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
          // helperText={signError.email}
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
          // helperText={signError.password}
          autoComplete="current-password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.btn}
          disabled={signError.name || signError.email || signError.password}
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
