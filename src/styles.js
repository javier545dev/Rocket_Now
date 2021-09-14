import { makeStyles } from '@material-ui/core'
import Orbit2 from '@Assets/images/orbit@2x.png'

export default makeStyles(({ breakpoints }) => ({
  root: {
    width: '100%',
    height: 'auto',
    backgroundImage: `url('${Orbit2}'), linear-gradient(224.33deg, #199FE3 2.14%, #0A23FB 31.98%, #BD26FC 59.48%, #662483 100%)`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right top',
    backgroundSize: '350px, 100%',
    [breakpoints.down('xs')]: {
      backgroundSize: '65%, 100%'
    }
  }
}))
