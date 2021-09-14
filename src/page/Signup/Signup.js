import {
  Button,
  TextField,
  Link,
  Typography,
  Box,
  Card
} from '@material-ui/core'
import useStyles from './styles'
import { useState } from 'react'
import Launch from './../Launch/Launch'

export default function Signup() {
  const [view, setView] = useState(null)

  const [sign, setSign] = useState({
    name: '',
    email: '',
    password: ''
  })
  const classes = useStyles()

  const handleFormSignup = async (e) => {
    e.preventDefault()
    setView(true)
  }

  if (view) {
    return <Launch sign={sign} />
  } else {
    return (
      <Box className={classes.root}>
        <Card className={classes.card}>
          <Typography variant="h4" className={classes.title}>
            Registro
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
              label="Su Nombre"
              value={sign.name}
              onChange={(e) =>
                setSign((prev) => ({ ...prev, name: e.target.value }))
              }
              autoComplete="off"
              autoFocus
            />
            <TextField
              className={classes.input}
              variant="outlined"
              color="primary"
              required
              fullWidth
              id="email"
              value={sign.email}
              onChange={(e) =>
                setSign((prev) => ({ ...prev, email: e.target.value }))
              }
              label="Ingrese se Email"
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
              label="Password"
              type="password"
              id="password"
              value={sign.password}
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
              Signup
            </Button>
            <Typography variant="h5" className={classes.title}>
              <Link href="#" variant="body2" color="inherit">
                Ya tienes una cuenta? Login
              </Link>
            </Typography>
          </form>
        </Card>
      </Box>
    )
  }
}
