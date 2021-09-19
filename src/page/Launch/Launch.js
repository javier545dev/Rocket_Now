import { Button, TextField, Link, Typography, Box } from '@material-ui/core'
import useStyles from './styles'
import { useEffect, useState } from 'react'
import { signUser } from '@API/actions'
import { useHistory } from 'react-router'
import Orbit2 from '@Assets/images/orbit@2x.png'
import Estrellablanca from '@Assets/images/estrellablanca.png'
import Estrellaroja from '@Assets/images/estrellaroja.png'

export default function Launch({ sign }) {
  const history = useHistory()

  const [launch, setLaunch] = useState({
    project_name: '',
    why: '',
    what: '',
    how: ''
  })

  useEffect(() => {
    setLaunch((prev) => ({
      name: sign.name,
      email: sign.email,
      password: sign.password,
      ...prev
    }))
  }, [sign])

  const handleFormLaunch = async (e) => {
    console.log(launch)
    e.preventDefault()
    try {
      await signUser(launch)
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
      <form size="small" className={classes.form} method="post">
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
          <Button variant="contained" color="primary" className={classes.btn2}>
            Asesoria
          </Button>
        </Box>
        <TextField
          margin="normal"
          color="secondary"
          multiline
          rows={4}
          name="why"
          label="Escribe aqui tu idea"
          variant="filled"
          row={4}
          required
          autoComplete="off"
          fullWidth
          id="why"
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
          <Button variant="contained" color="primary" className={classes.btn2}>
            Asesoria
          </Button>
        </Box>
        <TextField
          margin="normal"
          color="secondary"
          multiline
          rows={4}
          name="what"
          label="Desarrolla tu idea"
          variant="filled"
          row={4}
          required
          autoComplete="off"
          fullWidth
          id="what"
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
          <Button variant="contained" color="primary" className={classes.btn2}>
            Asesoria
          </Button>
        </Box>
        <TextField
          margin="normal"
          color="secondary"
          multiline
          rows={4}
          name="how"
          label="Describe tu planeación"
          variant="filled"
          row={4}
          required
          autoComplete="off"
          fullWidth
          id="how"
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
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.btn}
          onClick={handleFormLaunch}
        >
          Launch
        </Button>
      </form>
    </Box>
  )
}
