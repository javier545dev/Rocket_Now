/* eslint-disable no-unused-vars */
import { MenuItem, Box, IconButton, Typography } from '@material-ui/core'
import { Facebook, Instagram, Twitter } from '@material-ui/icons/'
import Orbit2 from '@Assets/images/orbit@2x.png'
import Orbitheader from '@Assets/images/Orbitheader.png'
import Estrellablanca from '@Assets/images/estrellablanca.png'
import Estrellanaranja from '@Assets/images/estrellanaranja.png'
import Tierra from '@Assets/images/menutierra@1x.png'

import { useGlobalData } from '@Hooks'
import { useHistory } from 'react-router-dom'
import useStyles from './styles'

const Menu = ({ onClose }) => {
  const classes = useStyles()
  const { isLanding } = useGlobalData()
  const history = useHistory()

  const handleClick = (name) => () => {
    if (!isLanding) {
      history.push(`/#${name}`)
    }
    onClose()
  }

  const propsItem = (name) => {
    const object = {
      onClick: handleClick(name)
    }
    if (isLanding) {
      object.href = `#${name}`
      object.component = 'a'
    }
    return object
  }

  return (
    <Box height="100%">
      <img src={Orbit2} alt="Orbit" className={classes.orbit} />
      <img src={Orbitheader} alt="Orbit" className={classes.orbit2} />
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
        className={classes.estrellablanca3}
      />
      <img
        src={Estrellanaranja}
        alt="Estrellanaranja"
        className={classes.estrellanaranja}
      />
      <Box className={classes.boxItem}>
        <MenuItem className={classes.menuItem} {...propsItem('moon')}>
          <Box className={classes.logo}>
            <img src={Tierra} alt="Icon" className={classes.icon} />
          </Box>
          <Typography className={classes.title}>LUNA</Typography>
        </MenuItem>
        <MenuItem
          className={classes.menuItem}
          component="a"
          href="#"
          onClick={onClose}
        >
          <Box className={classes.logo}>
            <img src={Tierra} alt="Icon" className={classes.icon} />
          </Box>
          <Typography className={classes.title}>TIERRA</Typography>
        </MenuItem>
        <MenuItem
          className={classes.menuItem}
          component="a"
          href="#"
          onClick={onClose}
        >
          <Box className={classes.logo}>
            <img src={Tierra} alt="Icon" className={classes.icon} />
          </Box>
          <Typography className={classes.title}>MERCURIO</Typography>
        </MenuItem>
        <MenuItem
          className={classes.menuItem}
          component="a"
          href="#"
          onClick={onClose}
        >
          <Box className={classes.logo}>
            <img src={Tierra} alt="Icon" className={classes.icon} />
          </Box>
          <Typography className={classes.title}>VENUS</Typography>
        </MenuItem>
        <MenuItem
          className={classes.menuItem}
          component="a"
          href="#"
          onClick={onClose}
        >
          <Box className={classes.logo}>
            <img src={Tierra} alt="Icon" className={classes.icon} />
          </Box>
          <Typography className={classes.title}>MARTE</Typography>
        </MenuItem>
        <MenuItem
          className={classes.menuItem}
          component="a"
          href="#"
          onClick={onClose}
        >
          <Box className={classes.logo}>
            <img src={Tierra} alt="Icon" className={classes.icon} />
          </Box>
          <Typography className={classes.title}>JUPITER</Typography>
        </MenuItem>
        <MenuItem
          className={classes.menuItem}
          component="a"
          href="#"
          onClick={onClose}
        >
          <Box className={classes.logo}>
            <img src={Tierra} alt="Icon" className={classes.icon} />
          </Box>
          <Typography className={classes.title}>SATURNO</Typography>
        </MenuItem>
        <MenuItem
          className={classes.menuItem}
          component="a"
          href="#"
          onClick={onClose}
        >
          <Box className={classes.logo}>
            <img src={Tierra} alt="Icon" className={classes.icon} />
          </Box>
          <Typography className={classes.title}>URANO</Typography>
        </MenuItem>
        <MenuItem
          className={classes.menuItem}
          component="a"
          href="#"
          onClick={onClose}
        >
          <Box className={classes.logo}>
            <img src={Tierra} alt="Icon" className={classes.icon} />
          </Box>
          <Typography className={classes.title}>NEPTUNO</Typography>
        </MenuItem>
        <MenuItem
          className={classes.menuItem}
          component="a"
          href="#"
          onClick={onClose}
        >
          <Box className={classes.logo}>
            <img src={Tierra} alt="Icon" className={classes.icon} />
          </Box>
          <Typography className={classes.title}>PLUTON</Typography>
        </MenuItem>
      </Box>
      <Box className={classes.footer}>
        <MenuItem className={classes.footerText}>About Us</MenuItem>
        <MenuItem className={classes.footerText}>
          Terminos y Condiciones
        </MenuItem>
        <Box className={classes.footerSocialNetwork}>
          <IconButton>
            <Instagram style={{ width: 30, height: 35, color: 'white' }} />
          </IconButton>
          <IconButton>
            <Facebook style={{ width: 30, height: 35, color: 'white' }} />
          </IconButton>
          <IconButton>
            <Twitter style={{ width: 30, height: 35, color: 'white' }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  )
}

export default Menu
