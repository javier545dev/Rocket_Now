/* eslint-disable no-unreachable */
import { Button, TextField, Link, Typography, Box } from '@material-ui/core'
import useStyles from './styles'
import { useState } from 'react'
import { signUser, login } from '@API/actions'
import { useHistory } from 'react-router'
import Orbit2 from '@Assets/images/orbit@2x.png'
import Estrellablanca from '@Assets/images/estrellablanca.png'
import Estrellaroja from '@Assets/images/estrellaroja.png'
import { useGlobalActions } from '@Hooks'

export default function Launch({ sign }) {
  const history = useHistory()
  const globalAction = useGlobalActions()

  const [launch, setLaunch] = useState({
    project_name: '',
    why: '',
    what: '',
    how: ''
  })

  const handleFormLaunch = async (e) => {
    e.preventDefault()
    const data = {
      ...launch,
      ...sign
    }

    const validData = [launch.project_name, launch.why, launch.what, launch.how]

    const valid = validData.some((value) => value.trim() === '')
    if (valid) {
      alert('Algunos campos requerido')
      return
    }

    try {
      await signUser(data)
      const { data: payload } = await login({
        email: sign.email,
        password: sign.password
      })
      globalAction.loginAction(payload)
      history.push('/')
    } catch (error) {
      setLaunch({
        project_name: '',
        why: '',
        what: '',
        how: ''
      })
      alert('no guardado')
    }
  }

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
      <Typography variant="h5" className={classes.titleHead} color="primary">
        LAUNCH
      </Typography>
      <form size="small" method="post">
        <Box className={classes.form}>
          <Typography variant="h6" className={classes.title} color="primary">
            ¿Que quieres hacer?
          </Typography>
          <Typography
            variant="subtitle1"
            className={classes.title}
            color="primary"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ipsam
            enim quis cupiditate, mollitia quae nemo ad modi distinctio esse.
          </Typography>
          <Box className={classes.ref}>
            <Link href="#" variant="body1" color="primary" underline="always">
              +Saber mas
            </Link>
            <Button
              variant="contained"
              color="primary"
              className={classes.btn2}
            >
              Asesoria
            </Button>
          </Box>
          <TextField
            margin="normal"
            color="secondary"
            multiline
            rows={8}
            name="why"
            label="Escribe aqui tu idea"
            variant="filled"
            required
            autoComplete="off"
            fullWidth
            id="why"
            style={{ zIndex: 2 }}
            value={launch.why}
            InputProps={{
              disableUnderline: true,
              classes: {
                notchedOutline: classes.notchedOutline
              }
            }}
            onChange={(e) =>
              setLaunch((prev) => ({ ...prev, why: e.target.value }))
            }
          />
          <Box className={classes.boxBlank} />
        </Box>

        <Box className={classes.form}>
          <Typography variant="h6" className={classes.title} color="primary">
            ¿Porque lo quieres hacer?
          </Typography>
          <Typography
            variant="subtitle1"
            className={classes.title}
            color="primary"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ipsam
            enim quis cupiditate, mollitia quae nemo ad modi distinctio esse.
          </Typography>
          <Box className={classes.ref}>
            <Link href="#" variant="body1" color="primary" underline="always">
              +Saber mas
            </Link>
            <Button
              variant="contained"
              color="primary"
              className={classes.btn2}
            >
              Asesoria
            </Button>
          </Box>
          <TextField
            margin="normal"
            color="secondary"
            multiline
            rows={8}
            name="what"
            label="Desarrolla tu idea"
            variant="filled"
            required
            autoComplete="off"
            fullWidth
            id="what"
            style={{ zIndex: 2 }}
            value={launch.what}
            InputProps={{
              disableUnderline: true,
              classes: {
                notchedOutline: classes.notchedOutline
              }
            }}
            onChange={(e) =>
              setLaunch((prev) => ({ ...prev, what: e.target.value }))
            }
          />
          <Box className={classes.boxBlank} />
        </Box>

        <Box className={classes.form}>
          <Typography variant="h6" className={classes.title} color="primary">
            Como lo quieres hacer?
          </Typography>
          <Typography
            variant="subtitle1"
            className={classes.title}
            color="primary"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ipsam
            enim quis cupiditate, mollitia quae nemo ad modi distinctio esse.
          </Typography>
          <Box className={classes.ref}>
            <Link href="#" variant="body1" color="primary" underline="always">
              +Saber mas
            </Link>
            <Button
              variant="contained"
              color="primary"
              className={classes.btn2}
            >
              Asesoria
            </Button>
          </Box>
          <TextField
            margin="normal"
            color="secondary"
            multiline
            rows={8}
            name="how"
            label="Describe tu planeación"
            variant="filled"
            required
            autoComplete="off"
            fullWidth
            id="how"
            style={{ zIndex: 2 }}
            value={launch.how}
            InputProps={{
              disableUnderline: true,
              classes: {
                notchedOutline: classes.notchedOutline
              }
            }}
            onChange={(e) =>
              setLaunch((prev) => ({ ...prev, how: e.target.value }))
            }
          />
        </Box>

        <Box className={classes.form}>
          <Typography variant="h5" className={classes.title} color="primary">
            Nombre tu proyecto
          </Typography>
          <TextField
            id="project_name"
            required
            autoComplete="off"
            fullWidth
            label="Nombre"
            variant="outlined"
            color="primary"
            className={classes.input}
            value={launch.project_name}
            InputProps={{
              classes: {
                notchedOutline: classes.notchedOutline
              }
            }}
            onChange={(e) =>
              setLaunch((prev) => ({ ...prev, project_name: e.target.value }))
            }
          />
        </Box>

        <Box className={classes.form}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.btn}
            onClick={handleFormLaunch}
          >
            Launch
          </Button>
        </Box>
      </form>
    </Box>
  )
}
