import { useState } from 'react'
import { AppBar, Box, IconButton } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'

import Logo from '@Assets/images/logo@1x.png'
import Logo2 from '@Assets/images/logo@2x.png'
import MenuProfile from '@Assets/images/menuprofile@1x.png'
import MenuProfile2 from '@Assets/images/menuprofile@2x.png'
import MenuTierra from '@Assets/images/menutierra@1x.png'
import MenuTierra2 from '@Assets/images/menutierra@2x.png'

import MenuPopper from './components/Popper'

import useStyles from './styles'

export default function Header() {
  const classes = useStyles()
  const history = useHistory()
  const [openMenu, setOpenMenu] = useState(false)
  const [openTierra, setOpenTierra] = useState(null)
  const [openProfile, setOpenProfile] = useState(null)

  return (
    <AppBar
      color="transparent"
      position="relative"
      elevation={0}
      className={classes.header}
    >
      <Box className={classes.logo} onClick={() => history.push('/')}>
        <img src={Logo} alt="rocket now" srcSet={`${Logo2} 2x`} />
      </Box>

      <Box className={classes.subtoolbar}>
        <MenuPopper
          open={openTierra}
          onClose={() => setOpenTierra(false)}
          type="tierra"
        >
          <IconButton onClick={() => setOpenTierra((prev) => !prev)}>
            <img
              src={MenuTierra}
              srcSet={`${MenuTierra2} 2x`}
              alt="menu tierra"
            />
          </IconButton>
        </MenuPopper>
        <MenuPopper
          open={openProfile}
          onClose={() => setOpenProfile(false)}
          type="profile"
        >
          <IconButton onClick={() => setOpenProfile((prev) => !prev)}>
            <img
              src={MenuProfile}
              srcSet={`${MenuProfile2} 2x`}
              alt="menu profile"
            />
          </IconButton>
        </MenuPopper>

        <MenuPopper
          open={openMenu}
          onClose={() => setOpenMenu(false)}
          type="menu"
        >
          <IconButton
            onClick={() => setOpenMenu((prev) => !prev)}
            color="primary"
            aria-label="menu"
            className={classes.burger}
          >
            <MenuIcon style={{ width: 30, height: 35 }} />
          </IconButton>
        </MenuPopper>
      </Box>
    </AppBar>
  )
}
