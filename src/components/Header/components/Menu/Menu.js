import { MenuItem, Box, IconButton } from '@material-ui/core'
import { Facebook, Instagram, Twitter } from '@material-ui/icons/'
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

const Menu = () => {
  const classes = useStyles()

  return (
    <Box>
      {earths.map(({ name }) => (
        <MenuItem key={name} className={classes.menuItem}>
          <Box className={classes.logo} />
          <Box className={classes.title}>{name}</Box>
        </MenuItem>
      ))}
      <Box className={classes.footer}>
        <MenuItem className={classes.footerText}>About Us</MenuItem>
        <MenuItem className={classes.footerText}>
          Terminos y Condiciones
        </MenuItem>
        <Box className={classes.footerSocialNetwork}>
          <IconButton>
            <Instagram style={{ width: 30, height: 35 }} />
          </IconButton>
          <IconButton>
            <Facebook style={{ width: 30, height: 35 }} />
          </IconButton>
          <IconButton>
            <Twitter style={{ width: 30, height: 35 }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  )
}

export default Menu
