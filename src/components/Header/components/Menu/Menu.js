import { MenuItem, Box, IconButton } from '@material-ui/core'
import { Facebook, Instagram, Twitter } from '@material-ui/icons/'
import Orbit2 from '@Assets/images/orbit@2x.png'
import useStyles from './styles'

const earths = [
  { name: 'luna', logo: 'icon' },
  { name: 'tierra', logo: ' icon' },
  { name: 'mercurio', logo: ' icon' },
  { name: 'venus', logo: 'icon ' },
  { name: 'marte', logo: ' icon' },
  { name: 'jupiter', logo: 'icon' },
  { name: 'saturno', logo: ' icon' },
  { name: 'urano', logo: ' icon' },
  { name: 'neptuno', logo: 'icon ' },
  { name: 'pluton', logo: ' icon' }
]

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
          paddingTop: 20
        }}
      >
        {earths.map(({ name, logo }) => (
          <MenuItem key={name} className={classes.menuItem}>
            <Box className={classes.logo}>{logo}</Box>
            <Box className={classes.title}>{name}</Box>
          </MenuItem>
        ))}
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
