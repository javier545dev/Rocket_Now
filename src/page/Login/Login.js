import { Box, Typography, TextField, Button, Link } from '@material-ui/core'
import { useState } from 'react'
import { useHistory } from 'react-router'
import { login } from '@API/actions'
import { useGlobalActions } from '@Hooks'
import useStyles from './styles'

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
      <Typography variant="h4" className={classes.title} color="primary">
        LOG IN
      </Typography>
      <form size="small" className={classes.form} method="post">
        <TextField
          style={{
            color: '#000',
            borderRadius: '40px',
            fontWeight: '600'
          }}
          id="email"
          label="Correo Electronico"
          variant="outlined"
          color="primary"
          type="email"
          autoComplete="off"
          className={classes.input}
          value={data.email}
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
        <Typography variant="h8" className={classes.subtitle} color="primary">
          <Link href="#" variant="body2" color="inherit">
            Aun no eres miembro? Haz clic aqui para registrarte
          </Link>
        </Typography>
      </form>
    </Box>
  )
}

export default Login
