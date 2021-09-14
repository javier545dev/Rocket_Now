import { MenuItem, Box, IconButton } from '@material-ui/core'
import { Facebook, Instagram, Twitter } from '@material-ui/icons/'
import Tierra from '@Assets/images/menutierra@2x.png'

import useStyles from './styles'

const earths = [
  { name: 'luna' },
  { name: 'tierra' },
  { name: 'mercurio' },
  { name: 'venus' },
  { name: 'marte' },
  { name: 'jupiter' },
  { name: 'saturno' },
  { name: 'urano' },
  { name: 'neptuno' },
  { name: 'pluton' }
]

const styles = {
  paperContainer: {
    backgroundImage: `url(${Tierra})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain'
  }
}

const Menu = () => {
  const classes = useStyles()

  return (
    <Box>
      <Box
        style={{
          width: '100%',
          height: 20,
          color: 'white',
          paddingBottom: 100
        }}
      >
        {earths.map(({ name }) => (
          <MenuItem key={name} className={classes.menuItem}>
            <Box className={classes.logo} style={styles.paperContainer} />
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
