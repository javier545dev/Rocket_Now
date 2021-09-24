import { Button, CardMedia, Typography, Box } from '@material-ui/core'
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

      <Typography variant="h4" className={classes.titleHead} color="primary">
        NUESTRO
      </Typography>
      <Typography variant="h4" className={classes.titleHead1} color="primary">
        PROCESO
      </Typography>
      <CardMedia
        height="280"
        component="iframe"
        autoPlay
        src="https://www.youtube.com/embed/6Nb-prB-4P0"
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
        className={classes.media}
      />

      <Box className={classes.form}>
        <Typography
          variant="subtitle2"
          className={classes.title}
          color="primary"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ad
          aperiam provident deleniti. Nostrum nam doloribus illo magnam dolorem
          sed nobis nihil expedita suscipit, natus in sunt fugiat sit, magni,
          soluta numquam vitae est architecto. Corporis hic ducimus quos
          expedita, necessitatibus, odio vero veritatis similique sunt placeat
          quis vitae eaque!
        </Typography>
        <Typography
          variant="subtitle2"
          className={classes.title1}
          color="primary"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
          debitis!
        </Typography>
      </Box>
      <Box>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          className={classes.btn}
          onClick={() => history.push('/signup')}
        >
          NECESITO MAS
        </Button>
      </Box>
    </Box>
  )
}
