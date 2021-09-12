import {
  Button,
  TextField,
  Link,
  Typography,
  Box,
  Card
} from '@material-ui/core'
import useStyles from './styles'

export default function Signup() {
  const classes = useStyles()

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
            id="firstName"
            label="Su Nombre"
            autoComplete="off"
            autoFocus
          />
          <TextField
            className={classes.input}
            variant="outlined"
            color="primary"
            required
            fullWidth
            id="lastName"
            label="Su Apellido"
            name="lastName"
            autoComplete="off"
          />
          <TextField
            className={classes.input}
            variant="outlined"
            color="primary"
            required
            fullWidth
            id="email"
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
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.btn}
          >
            Sign Up
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
