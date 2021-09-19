import { MenuItem, Box, IconButton, Typography } from '@material-ui/core'
import { Facebook, Instagram, Twitter } from '@material-ui/icons/'
import Orbit2 from '@Assets/images/orbit@2x.png'
import useStyles from './styles'

const Menu = () => {
  const classes = useStyles()

  return (
    <Box>
      <img src={Orbit2} alt="Orbit" className={classes.orbit} />
      <img src={Orbit2} alt="Orbit" className={classes.orbit2} />
      <Box
        style={{
          width: '100%',
          height: 20,
          color: 'white',
          paddingTop: '3vh'
        }}
      >
        <MenuItem className={classes.menuItem}>
          <Box className={classes.logo}>logo</Box>
          <Typography className={classes.title}>LUNA</Typography>
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <Box className={classes.logo}>logo</Box>
          <Typography className={classes.title}>TIERRA</Typography>
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <Box className={classes.logo}>logo</Box>
          <Typography className={classes.title}>MERCURIO</Typography>
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <Box className={classes.logo}>logo</Box>
          <Typography className={classes.title}>VENUS</Typography>
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <Box className={classes.logo}>logo</Box>
          <Typography className={classes.title}>MARTE</Typography>
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <Box className={classes.logo}>logo</Box>
          <Typography className={classes.title}>JUPITER</Typography>
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <Box className={classes.logo}>logo</Box>
          <Typography className={classes.title}>SATURNO</Typography>
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <Box className={classes.logo}>logo</Box>
          <Typography className={classes.title}>URANO</Typography>
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <Box className={classes.logo}>logo</Box>
          <Typography className={classes.title}>NEPTUNO</Typography>
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <Box className={classes.logo}>logo</Box>
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
