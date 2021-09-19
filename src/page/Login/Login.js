import { Box, Typography, TextField, Button, Link } from '@material-ui/core'
import { useState } from 'react'
import { useHistory } from 'react-router'
import { login } from '@API/actions'
import { useGlobalActions } from '@Hooks'
import useStyles from './styles'
import Orbit2 from '@Assets/images/orbit@2x.png'
import Estrellablanca from '@Assets/images/estrellablanca.png'
import Estrellaroja from '@Assets/images/estrellaroja.png'

const Login = () => {
  const classes = useStyles()
  const history = useHistory()
  const globalAction = useGlobalActions()

  const [data, setData] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = async (event) => {
    console.log(globalAction)
    event.preventDefault()
    try {
      const { data: payload } = await login(data)
      localStorage.setItem('token', payload.access_token)
      localStorage.setItem('token_type', payload.token_type)
      localStorage.setItem('expires_at', payload.expires_at)
      setData({
        email: '',
        password: ''
      })
      globalAction.loginAction()
      history.push('/')
    } catch (error) {
      setData({
        email: data.email,
        password: ''
      })
      alert('Correo o contraseña incorrectas')
    }
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
        LOG IN
      </Typography>
      <form size="small" className={classes.form} method="post">
        <TextField
          id="email"
          label="Correo Electronico"
          variant="outlined"
          color="primary"
          type="email"
          autoComplete="off"
          className={classes.input}
          value={data.email}
          InputProps={{
            classes: {
              notchedOutline: classes.notchedOutline
            }
          }}
          onChange={(e) =>
            setData((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        <TextField
          id="password"
          label="Contraseña"
          variant="outlined"
          color="primary"
          type="password"
          autoComplete="off"
          className={classes.input}
          value={data.password}
          InputProps={{
            classes: {
              notchedOutline: classes.notchedOutline
            }
          }}
          onChange={(e) =>
            setData((prev) => ({ ...prev, password: e.target.value }))
          }
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          className={classes.btn}
          onClick={handleSubmit}
        >
          Inicia Sesión
        </Button>
        <Typography
          variant="body2"
          className={classes.subtitle}
          color="primary"
        >
          Aun no eres miembro?{' '}
          <Link
            href="#"
            variant="body2"
            color="inherit"
            underline="always"
            onClick={() => history.push('/signup')}
          >
            Haz clic aqui para registrarte
          </Link>
        </Typography>
      </form>
    </Box>
  )
}

export default Login
